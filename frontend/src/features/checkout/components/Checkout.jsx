import { Stack, TextField, Typography, Button, Grid, FormControl, Radio, Paper, IconButton, Box, useTheme, useMediaQuery } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import React, { useEffect, useState } from 'react';
import { Cart } from '../../cart/components/Cart';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addAddressAsync, selectAddressStatus, selectAddresses } from '../../address/AddressSlice';
import { selectLoggedInUser } from '../../auth/AuthSlice';
import { Link, useNavigate } from 'react-router-dom';
import { createOrderAsync, selectCurrentOrder, selectOrderStatus } from '../../order/OrderSlice';
import { resetCartByUserIdAsync, selectCartItems } from '../../cart/CartSlice';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { SHIPPING, TAXES } from '../../../constants';
import { motion } from 'framer-motion';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Initialize Stripe with your publishable key (replace with your own from Stripe Dashboard)
const stripePromise = loadStripe('pk_test_xxxxxxxxxxxxxxxxxxxxxxxx'); // Replace with your Stripe Publishable Key

// Payment Form Component for Stripe
const PaymentForm = ({ orderTotal, handleCreateOrder }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handlePayment = async () => {
    if (!stripe || !elements) return;

    setProcessing(true);

    try {
      // Call backend to create a payment intent
      const response = await fetch('http://localhost:8000/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: (orderTotal + SHIPPING + TAXES) * 100 }), // Convert to cents
      });

      const { clientSecret } = await response.json();

      // Confirm the payment with Stripe
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        setError(result.error.message);
        setProcessing(false);
      } else if (result.paymentIntent.status === 'succeeded') {
        setError(null);
        setProcessing(false);
        handleCreateOrder(); // Proceed with order creation after successful payment
      }
    } catch (err) {
      setError('An error occurred while processing your payment.');
      setProcessing(false);
    }
  };

  return (
    <Stack rowGap={2}>
      <CardElement options={{ style: { base: { fontSize: '16px', color: '#424770' } } }} />
      {error && <Typography color="error">{error}</Typography>}
      <LoadingButton
        loading={processing}
        variant="contained"
        onClick={handlePayment}
        disabled={!stripe || processing}
      >
        Pay Now
      </LoadingButton>
    </Stack>
  );
};

export const Checkout = () => {
  const addresses = useSelector(selectAddresses);
  const [selectedAddress, setSelectedAddress] = useState(addresses[0]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('COD'); // Default to COD
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const loggedInUser = useSelector(selectLoggedInUser);
  const addressStatus = useSelector(selectAddressStatus);
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const orderStatus = useSelector(selectOrderStatus);
  const currentOrder = useSelector(selectCurrentOrder);
  const orderTotal = cartItems.reduce((acc, item) => (item.product.price * item.quantity) + acc, 0);
  const theme = useTheme();
  const is900 = useMediaQuery(theme.breakpoints.down(900));
  const is480 = useMediaQuery(theme.breakpoints.down(480));

  useEffect(() => {
    if (addressStatus === 'fulfilled') {
      reset();
    } else if (addressStatus === 'rejected') {
      alert('Error adding your address');
    }
  }, [addressStatus, reset]);

  useEffect(() => {
    if (currentOrder && currentOrder?._id) {
      dispatch(resetCartByUserIdAsync(loggedInUser?._id));
      navigate(`/order-success/${currentOrder?._id}`);
    }
  }, [currentOrder, dispatch, loggedInUser, navigate]);

  const handleAddAddress = (data) => {
    const address = { ...data, user: loggedInUser._id };
    dispatch(addAddressAsync(address));
  };

  const handleCreateOrder = () => {
    const order = {
      user: loggedInUser._id,
      item: cartItems,
      address: selectedAddress,
      paymentMode: selectedPaymentMethod,
      total: orderTotal + SHIPPING + TAXES,
      status: selectedPaymentMethod === 'CARD' ? 'paid' : 'pending', // Set status based on payment method
    };
    dispatch(createOrderAsync(order));
  };

  return (
    <Stack
      flexDirection={'row'}
      p={2}
      rowGap={10}
      justifyContent={'center'}
      flexWrap={'wrap'}
      mb={'5rem'}
      mt={2}
      columnGap={4}
      alignItems={'flex-start'}
    >
      {/* Left Box */}
      <Stack rowGap={4}>
        {/* Heading */}
        <Stack flexDirection={'row'} columnGap={is480 ? 0.3 : 1} alignItems={'center'}>
          <motion.div whileHover={{ x: -5 }}>
            <IconButton component={Link} to={'/cart'}>
              <ArrowBackIcon fontSize={is480 ? 'medium' : 'large'} />
            </IconButton>
          </motion.div>
          <Typography variant="h4">Shipping Information</Typography>
        </Stack>

        {/* Address Form */}
        <Stack component={'form'} noValidate rowGap={2} onSubmit={handleSubmit(handleAddAddress)}>
          <Stack>
            <Typography gutterBottom>Type</Typography>
            <TextField placeholder="Eg. Home, Business" {...register('type', { required: true })} />
          </Stack>

          <Stack>
            <Typography gutterBottom>Street</Typography>
            <TextField {...register('street', { required: true })} />
          </Stack>

          <Stack>
            <Typography gutterBottom>Country</Typography>
            <TextField {...register('country', { required: true })} />
          </Stack>

          <Stack>
            <Typography gutterBottom>Phone Number</Typography>
            <TextField type="number" {...register('phoneNumber', { required: true })} />
          </Stack>

          <Stack flexDirection={'row'} columnGap={1}>
            <Stack width={'100%'}>
              <Typography gutterBottom>City</Typography>
              <TextField {...register('city', { required: true })} />
            </Stack>
            <Stack width={'100%'}>
              <Typography gutterBottom>State</Typography>
              <TextField {...register('state', { required: true })} />
            </Stack>
            <Stack width={'100%'}>
              <Typography gutterBottom>Postal Code</Typography>
              <TextField type="number" {...register('postalCode', { required: true })} />
            </Stack>
          </Stack>

          <Stack flexDirection={'row'} alignSelf={'flex-end'} columnGap={1}>
            <LoadingButton loading={addressStatus === 'pending'} type="submit" variant="contained">
              Add
            </LoadingButton>
            <Button color="error" variant="outlined" onClick={() => reset()}>
              Reset
            </Button>
          </Stack>
        </Stack>

        {/* Existing Addresses */}
        <Stack rowGap={3}>
          <Stack>
            <Typography variant="h6">Address</Typography>
            <Typography variant="body2" color={'text.secondary'}>
              Choose from existing Addresses
            </Typography>
          </Stack>

          <Grid container gap={2} width={is900 ? 'auto' : '50rem'} justifyContent={'flex-start'} alignContent={'flex-start'}>
            {addresses.map((address, index) => (
              <FormControl key={address._id}>
                <Stack
                  p={is480 ? 2 : 2}
                  width={is480 ? '100%' : '20rem'}
                  height={is480 ? 'auto' : '15rem'}
                  rowGap={2}
                  component={Paper}
                  elevation={1}
                >
                  <Stack flexDirection={'row'} alignItems={'center'}>
                    <Radio
                      checked={selectedAddress === address}
                      name="addressRadioGroup"
                      value={selectedAddress}
                      onChange={() => setSelectedAddress(addresses[index])}
                    />
                    <Typography>{address.type}</Typography>
                  </Stack>
                  <Stack>
                    <Typography>{address.street}</Typography>
                    <Typography>
                      {address.state}, {address.city}, {address.country}, {address.postalCode}
                    </Typography>
                    <Typography>{address.phoneNumber}</Typography>
                  </Stack>
                </Stack>
              </FormControl>
            ))}
          </Grid>
        </Stack>

        {/* Payment Methods */}
        <Stack rowGap={3}>
          <Stack>
            <Typography variant="h6">Payment Methods</Typography>
            <Typography variant="body2" color={'text.secondary'}>
              Please select a payment method
            </Typography>
          </Stack>

          <Stack rowGap={2}>
            <Stack flexDirection={'row'} justifyContent={'flex-start'} alignItems={'center'}>
              <Radio
                value={selectedPaymentMethod}
                name="paymentMethod"
                checked={selectedPaymentMethod === 'COD'}
                onChange={() => setSelectedPaymentMethod('COD')}
              />
              <Typography>Cash</Typography>
            </Stack>

            <Stack flexDirection={'row'} justifyContent={'flex-start'} alignItems={'center'}>
              <Radio
                value={selectedPaymentMethod}
                name="paymentMethod"
                checked={selectedPaymentMethod === 'CARD'}
                onChange={() => setSelectedPaymentMethod('CARD')}
              />
              <Typography>Card</Typography>
            </Stack>

            {/* Conditionally Render Stripe Payment Form */}
            {selectedPaymentMethod === 'CARD' && (
              <Elements stripe={stripePromise}>
                <PaymentForm orderTotal={orderTotal} handleCreateOrder={handleCreateOrder} />
              </Elements>
            )}
          </Stack>
        </Stack>
      </Stack>

      {/* Right Box */}
      <Stack width={is900 ? '100%' : 'auto'} alignItems={is900 ? 'flex-start' : ''}>
        <Typography variant="h4">Order Summary</Typography>
        <Cart checkout={true} />
        {/* Show Pay and Order Button only for COD */}
        {selectedPaymentMethod === 'COD' && (
          <LoadingButton
            fullWidth
            loading={orderStatus === 'pending'}
            variant="contained"
            onClick={handleCreateOrder}
            size="large"
          >
            Pay and Order
          </LoadingButton>
        )}
      </Stack>
    </Stack>
  );
};