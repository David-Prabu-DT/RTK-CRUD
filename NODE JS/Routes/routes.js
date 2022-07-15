const express = require("express");
const router = express.Router();

const {
  SignUp,
  Login,
  CheckAuth,
  RefreshTokenHandler,
  Test,
} = require("../Controllers/JwtController");

router.route("/signup").post(SignUp);
router.route("/login").post(Login);
router.route("/refresh").post(RefreshTokenHandler);


module.exports = router;
