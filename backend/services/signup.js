const Users = require("../models/Users.js");

module.exports = async (email, firstname, lastname, password) => {
  try {
    await Users.create({
      email,
      firstname,
      lastname,
      password,
    });
    return true;
  } catch (err) {
    if (err.name === "ValidationError") {
      console.error("Validation Error:", err.message);
    } else if (err.name === "MongoNetworkError") {
      console.error("Database Connection Error:", err.message);
    } else {
      console.error("Unknown Error:", err);
    }
    return false;
  }
};
