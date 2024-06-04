const express = require("express");
const router = express.Router();

const SignUp = require("../services/signup");

router.post("/signup", async (req, res) => {
  const { email, firstname, lastname, password } = req.body;

  const result = await SignUp(email, firstname, lastname, password);
  try {
    if (!email || !firstname || !lastname || !password) {
      res.status(200).send({
        status: result,
        message: "Sign up successfuly! ",
      });
    } else {
      res.status(500).send({
        status: result,
        message: "Account not created!!",
      });
    }
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
