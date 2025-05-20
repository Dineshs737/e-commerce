const Order = require("../models/Order");
const fs = require("fs");

const orders = [
  {
    _id: "65c2658db53f820728d0745a",
    user: "65b8e564ea5ce114184ccb96",
    item: [
      {
        user: "65b8e564ea5ce114184ccb96",
        product: {
          _id: "65a7e45902e12c44f5994454",
          title: "Samsung Galaxy Book",
          description:
            "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
          price: 1499,
          discountPercentage: 4.15,
          stockQuantity: 50,
          brand: { _id: "65a7e20102e12c44f59943db", name: "Samsung" },
          category: "65a7e24602e12c44f599442d",
          thumbnail: "https://th.bing.com/th/id/R.e13dc451136c449cdc9eb95964a3f20c?rik=NVKnNnZ5e9WHqw&pid=ImgRaw&r=0",
          images: [
      "https://th.bing.com/th/id/R.e13dc451136c449cdc9eb95964a3f20c?rik=NVKnNnZ5e9WHqw&pid=ImgRaw&r=0",
      "https://file.bodnara.co.kr/logo/insidelogo.php?image=%2Fhttp:%2F%2Ffile.bodnara.co.kr%2Fwebedit%2Fnews%2F2015%2F1588297968-gbfa1.jpg",
      "https://th.bing.com/th/id/OIP.aLwJIXctmHZkDcFp6jcLMgHaEJ?rs=1&pid=ImgDetMain",
      "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/laptop_xps_13_2n1_7390_pdp_consumer_blackwhite_mod1.jpg",
          ],
          isDeleted: false,
          updatedAt: "2024-02-05T09:34:30.107Z",
        },
        quantity: 1,
        _id: "65c26581b53f820728d07456",
      },
    ],
    address: [
      {
        _id: "65c26398e1e1a2106ac8fbd5",
        user: "65b8e564ea5ce114184ccb96",
        street: "main 11th",
        city: "Indrapuram",
        state: "Uttar Pradesh",
        phoneNumber: "9452571272",
        postalCode: "201012",
        country: "India",
        type: "Home",
        __v: 0,
      },
    ],
    status: "Pending",
    paymentMode: "CARD",
    total: 1509.55,
    createdAt: "2024-02-07T10:36:15.151Z",
  },
  {
    _id: "65c265c6b53f820728d0749c",
    user: "65b8e564ea5ce114184ccb96",
    item: [
      {
        _id: "65c265a2b53f820728d07474",
        user: "65b8e564ea5ce114184ccb96",
        product: {
          _id: "65a7e45902e12c44f599445d",
          title: "Hyaluronic Acid Serum",
          description:
            "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
          price: 19,
          discountPercentage: 13.31,
          stockQuantity: 110,
          brand: {
            _id: "65a7e20102e12c44f59943e6",
            name: "L'Oreal Paris",
          },
          category: "65a7e24602e12c44f599442f",
          thumbnail:
            "https://johnbellcroyden.co.uk/cdn/shop/articles/shutterstock_1427266883.jpg?v=1594288811",
          images: [
    "https://johnbellcroyden.co.uk/cdn/shop/articles/shutterstock_1427266883.jpg?v=1594288811",
      "https://th.bing.com/th/id/OIP.4cokpE8BdRqi7k-Md6XTSQHaHa?w=1080&h=1080&rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.RIHsFtp23fszrUp0d2UTsgHaHa?w=1200&h=1200&rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.qRZTkqJrc2QIwWJI4WtVDwHaE9?w=2000&h=1339&rs=1&pid=ImgDetMain",
      "https://johnbellcroyden.co.uk/cdn/shop/articles/shutterstock_1427266883.jpg?v=1594288811",
          ],
          isDeleted: false,
        },
        quantity: 2,
      },
      {
        _id: "65c265b9b53f820728d0748f",
        user: "65b8e564ea5ce114184ccb96",
        product: {
          _id: "65a7e45902e12c44f599445e",
          title: "Tree Oil 30ml",
          description:
            "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
          price: 12,
          discountPercentage: 4.09,
          stockQuantity: 78,
          brand: { _id: "65a7e20102e12c44f59943e7", name: "Hemani Tea" },
          category: "65a7e24602e12c44f599442f",
          thumbnail:
            "https://th.bing.com/th/id/OIP.UAunD0Ah5GVZLnjAwLkGrwAAAA?rs=1&pid=ImgDetMain",
          images: [
      "https://th.bing.com/th/id/OIP.UAunD0Ah5GVZLnjAwLkGrwAAAA?rs=1&pid=ImgDetMain",
      "https://2.bp.blogspot.com/_jv3nI0G229k/SQIiVugLg-I/AAAAAAAABDQ/wxtvoX6pTPM/s320/bodyshop_teaTreeOil_facialWash.jpg",
      "https://img.makeupalley.com/0/0/0/1/3694898.jpeg",
      "https://th.bing.com/th/id/OIP._3ezkBpushNDN_qECjQwJwHaKZ?rs=1&pid=ImgDetMain",
          ],
          isDeleted: false,
        },
        quantity: 3,
      },
    ],
    address: [
      {
        _id: "65c26398e1e1a2106ac8fbd5",
        user: "65b8e564ea5ce114184ccb96",
        street: "main 11th",
        city: "Indrapuram",
        state: "Uttar Pradesh",
        phoneNumber: "9452571272",
        postalCode: "201012",
        country: "India",
        type: "Home",
        __v: 0,
      },
    ],
    status: "Pending",
    paymentMode: "COD",
    total: 84.55,
    createdAt: "2024-02-07T10:36:15.151Z",
  },
  {
    _id: "65c265feb53f820728d074b4",
    user: "65b8e564ea5ce114184ccb96",
    item: [
      {
        user: "65b8e564ea5ce114184ccb96",
        product: {
          _id: "65a7e45902e12c44f59944b0",
          title: "American Vintage Wood Pendant Light",
          description:
            "American Vintage Wood Pendant Light Farmhouse Antique Hanging Lamp Lampara Colgante",
          price: 46,
          discountPercentage: 8.84,
          stockQuantity: 138,
          brand: { _id: "65a7e20102e12c44f5994425", name: "Ifei Home" },
          category: "65a7e24602e12c44f599443f",
          thumbnail:
            "https://th.bing.com/th/id/R.f79366cf3cf59e2f2e4e1203cf3fe70b?rik=2PL3FNTZowx4%2fg&pid=ImgRaw&r=0",
          images: [
      "https://th.bing.com/th/id/OIP.vHaVifsV23XDriqrtDdk2wHaLJ?w=690&h=1038&rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.ZdA5bDUVwUhfdzUbrzuYBQHaFj?w=2433&h=1825&rs=1&pid=ImgDetMain",
      "https://i.etsystatic.com/19353717/r/il/4bb91b/3900504174/il_794xN.3900504174_enm7.jpg",
      "https://i.etsystatic.com/13994904/r/il/ed10df/1454290530/il_1588xN.1454290530_f8zq.jpg",
      "https://th.bing.com/th/id/R.f79366cf3cf59e2f2e4e1203cf3fe70b?rik=2PL3FNTZowx4%2fg&pid=ImgRaw&r=0",
          ],
          isDeleted: false,
        },
        quantity: 1,
        _id: "65c265edb53f820728d074b0",
      },
    ],
    address: [
      {
        _id: "65c26398e1e1a2106ac8fbd5",
        user: "65b8e564ea5ce114184ccb96",
        street: "main 11th",
        city: "Indrapuram",
        state: "Uttar Pradesh",
        phoneNumber: "9452571272",
        postalCode: "201012",
        country: "India",
        type: "Home",
        __v: 0,
      },
    ],
    status: "Pending",
    paymentMode: "COD",
    total: 56.55,
    createdAt: "2024-02-07T10:36:15.151Z",
  },
  {
    _id: "65c2667db53f820728d07579",
    user: "65b8e564ea5ce114184ccb96",
    item: [
      {
        _id: "65c26673b53f820728d0756f",
        user: "65b8e564ea5ce114184ccb96",
        product: {
          _id: "65a7e45902e12c44f599446d",
          title: "Sofa for Coffe Cafe",
          description:
            "Ratttan Outdoor furniture Set Waterproof  Rattan Sofa for Coffe Cafe",
          price: 50,
          discountPercentage: 15.59,
          stockQuantity: 30,
          brand: {
            _id: "65a7e20102e12c44f59943f6",
            name: "Ratttan Outdoor",
          },
          category: "65a7e24602e12c44f5994432",
          thumbnail:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNxwoiByIhilWm4zhsvff5YL_JUXySTuCi9g&s",
          images: [
      "https://ae01.alicdn.com/kf/HTB1p9xzaq61gK0jSZFlq6xDKFXaS.jpg",
      "https://image.made-in-china.com/2f0j00dfvYbtkKnEoJ/Hot-Sell-Modern-Foshan-Leather-1-1-3-Genenie-Italian-Leather-Office-Sofa-Set.jpg",
      "hhttps://5.imimg.com/data5/AK/ET/MY-48718147/7-seater-office-sofa-set.jpg",
      "https://images.pexels.com/photos/18014529/pexels-photo-18014529/free-photo-of-interior-of-a-cafe-with-sofas-and.jpeg",
          ],
          isDeleted: false,
        },
        quantity: 1,
      },
    ],
    address: [
      {
        _id: "65c26412e1e1a2106ac8fbd8",
        user: "65b8e564ea5ce114184ccb96",
        street: "main 18th",
        city: "Noida",
        state: "Uttar Pradesh",
        phoneNumber: "9846286159",
        postalCode: "301273",
        country: "India",
        type: "Buisness",
        __v: 0,
      },
    ],
    status: "Pending",
    paymentMode: "CARD",
    total: 60.55,
    createdAt: "2024-02-07T10:36:15.151Z",
  },
  {
    _id: "65c266eab53f820728d0763f",
    user: "65b8e564ea5ce114184ccb96",
    item: [
      {
        _id: "65c266dab53f820728d07632",
        user: "65b8e564ea5ce114184ccb96",
        product: {
          _id: "65a7e45902e12c44f59944ae",
          title: "Metal Ceramic Flower",
          description:
            "Metal Ceramic Flower Chandelier Home Lighting American Vintage Hanging Lighting Pendant Lamp",
          price: 35,
          discountPercentage: 10.94,
          stockQuantity: 146,
          brand: { _id: "65a7e20102e12c44f5994425", name: "Ifei Home" },
          category: "65a7e24602e12c44f599443f",
          thumbnail:
            "https://th.bing.com/th/id/OIP.tIGeAKyA3V5jLrbz-3MNCAHaIE?w=2754&h=3000&rs=1&pid=ImgDetMain",
          images: [
            "https://th.bing.com/th/id/OIP.jVNJ36n0KvaQk0_C87nArAHaHa?w=564&h=564&rs=1&pid=ImgDetMain",
            "https://i.pinimg.com/originals/31/99/4d/31994d99910939715545c8c42e2eb64b.jpg",
            "https://i.ebayimg.com/images/g/iDAAAOxySE9Q6xRf/s-l500.jpg",
            "https://i.etsystatic.com/6510704/r/il/3af2a3/1414977695/il_794xN.1414977695_oveq.jpg",
            "https://th.bing.com/th/id/OIP.tIGeAKyA3V5jLrbz-3MNCAHaIE?w=2754&h=3000&rs=1&pid=ImgDetMain",
          ],
          isDeleted: false,
        },
        quantity: 4,
      },
    ],
    address: [
      {
        _id: "65c26398e1e1a2106ac8fbd5",
        user: "65b8e564ea5ce114184ccb96",
        street: "main 11th",
        city: "Indrapuram",
        state: "Uttar Pradesh",
        phoneNumber: "9452571272",
        postalCode: "201012",
        country: "India",
        type: "Home",
        __v: 0,
      },
    ],
    status: "Pending",
    paymentMode: "COD",
    total: 150.55,
    createdAt: "2024-02-07T10:36:15.151Z",
  },
];

exports.seedOrder = async () => {
  try {
    await Order.insertMany(orders);
    console.log("Order seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
