const Users = require("../models/users");

module.exports = async (email, password) => {
  try {
    await Users.find({
      email,
      password,
    });
  } catch (err) {
    console.log("ERROR on LogIn File " + err);
  }
};
