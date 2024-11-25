const express = require("express");
const router = express.Router();

const { signIn, signUp } = require("../controllers/user.controller");

router.post("/signup", signUp);
router.post("/signin", signIn);

router.get("/allUsers", (req, res) => {
  res.send("GET Route for user");
});

module.exports = router;
