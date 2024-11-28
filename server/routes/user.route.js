const express = require("express");
const router = express.Router();

const {
  signIn,
  signUp,
  signOut,
  verifyOTP,
} = require("../controllers/user.controller");
// const { sendMail } = require("../utils/nodemailer");

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/signout", signOut);
router.post("/verify-otp", verifyOTP);

// router.post("/sendMail", sendMail);

module.exports = router;
