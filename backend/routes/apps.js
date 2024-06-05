const express = require("express");
const router = express.Router();

const SignUp = require("../services/signup");

router.post("/signup", async (req, res) => {
  const email = req.body.email;
  const firstname = req.body.firstName;
  const lastname = req.body.lastName;
  const password = req.body.password;

  const result = await SignUp(email, firstname, lastname, password);
  try {
    if (!result && result === "") {
      res.status(500).send({
        status: result,
        message: "Account not created!!",
      });
    } else {
      res.status(200).send({
        status: result,
        message: "Sign up successfuly! ",
      });
    }
    return false;
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
