const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const SignUp = require("../services/signup");

const Users = require("../models/users");

//Signup
router.post("/signup", async (req, res) => {
  const { email, firstName, lastName, password } = req.body;

  const checkUser = await Users.findOne({ email });
  try {
    if (checkUser) {
      res.status(500).send("Email Already Used!!");
    } else {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      await SignUp(email, firstName, lastName, hashedPassword);
      res.status(200).send("Account Created!!");
    }

    return true;
  } catch (err) {
    res.status(400).send("Account Not Created!");
    console.log("Error ", err);
  }
});

//LOgIn
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const checkEmail = await Users.findOne({ email });
  const checkPassword = await bcrypt.compare(password, checkEmail.password);

  try {
    //check Email
    if (checkEmail && checkPassword) {
      res.status(200).send("LogIn Success!!");
    } else {
      res.status(400).send("Invalid User!!");
    }
  } catch (err) {
    console.log("Error " + err);
  }
});

module.exports = router;
