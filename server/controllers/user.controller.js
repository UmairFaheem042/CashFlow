const User = require("../models/user.model");
const Transaction = require("../models/transaction.model");
const Category = require("../models/category.model");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  generateTokenAndSetCookie,
} = require("../utils/generateTokenAndSetCookie");
const { sendMail } = require("../utils/nodemailer");

exports.signUp = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    if (!fullName || !email || !password) {
      throw new Error("All fields are required");
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exist",
      });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const verificationToken = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24H
    });

    sendMail(fullName, email, verificationToken);

    // JWT
    generateTokenAndSetCookie(res, user._id);

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        ...user._doc,
        password: undefined,
        verificationToken: undefined, // Exclude token from response
        verificationTokenExpiresAt: undefined,
      },
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
    generateTokenAndSetCookie(res, user._id);

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

exports.signOut = async (req, res) => {};

exports.verifyOTP = async (req, res) => {
  const { email, verificationToken } = req.body;
  try {
    const user = await User.findOne({ email, verificationToken });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid verification code or email",
      });
    }

    if (user.verificationTokenExpiresAt < Date.now()) {
      return res.status(400).json({
        success: false,
        message: "Verification token has expired",
      });
    }

    // Mark user as verified and clear the token
    user.verificationToken = undefined;
    user.verificationTokenExpiresAt = undefined;
    user.isVerified = true;
    await user.save();

    res.status(200).json({
      success: true,
      message: "Account verified successfully",
      user: {
        _id: user._id,
        email: user.email,
        fullName: user.fullName,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred during verification",
      error: error.message,
    });
  }
};
