const Users = require("../models/users.js");

module.exports = async (email, firstName, lastName, password) => {
  try {
    await Users.create({
      email,
      firstName,
      lastName,
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
