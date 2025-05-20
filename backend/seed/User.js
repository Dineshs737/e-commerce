const User = require("../models/User");

const users = [
  {
    _id: "65b8e564ea5ce114184ccb96",
    name: "demo user",
    email: "demo@gmail.com",
    password:'$2a$12$yF2ouQGP2vCTOyQcRv0qKOkxVaUcAVP9qrtz2rYy2Zrc90uMMHm9y',
    isVerified: true,
    isAdmin: false,
    __v: 0,
  },
  {
    _id: "65c2526fdcd9253acfbaa731",
    name: "rishibakshi",
    email: "demo2@gmail.com",
    password: '$2a$12$yF2ouQGP2vCTOyQcRv0qKOkxVaUcAVP9qrtz2rYy2Zrc90uMMHm9y',
    isVerified: true,
    isAdmin: true,
    __v: 0,
  },
];

exports.seedUser = async () => {
  try {
    await User.insertMany(users);
    console.log("User seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
