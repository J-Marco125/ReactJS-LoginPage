const Users = require("../models/users.js");
const bcrypt = require("bcrypt");
module.exports = async (email, firstName, lastName, hashedPassword) => {
  try {
    await Users.create({
      email,
      firstName,
      lastName,
      password: hashedPassword,
    });
  } catch (err) {
    console.log("Error on signin files " + err);
  }
};
