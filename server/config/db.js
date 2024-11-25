const mongoose = require("mongoose");

exports.connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connection successfull");
  } catch (error) {
    console.log("Unable to connect to Database");
    process.exit(1);
  }
};