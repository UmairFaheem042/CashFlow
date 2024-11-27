const User = require("../models/user.model");
const Transaction = require("../models/transaction.model");
const Category = require("../models/category.model");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signUp = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(409).json({
        success: false,
        message: "User already exist",
      });
      return;
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "User created successfully",
      createdUser: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while registering user",
      error: error.message,
    });
  }
};

exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!password)
      return res.status().json({
        success: false,
        message: "Enter password",
      });

    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({
        success: false,
        message: "User not found",
      });

    // compare password

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }

    // generate token too and save it in cookie/session
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "5h", // Token expiration time
    });

    // Save token in a secure cookie
    res.cookie("token", token, {
      httpOnly: true, // Prevent access to cookie via JavaScript
      secure: process.env.NODE_ENV === "production", // Use secure flag in production
      maxAge: 18000000, // 5 hours
    });

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      id: user._id,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while logging",
      error: error.message,
    });
  }
};
