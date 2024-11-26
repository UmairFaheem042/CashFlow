const express = require("express");
const app = express();
const connectDB = require("./config/db");
const userRoutes = require("./routes/user.route");
const transactionRoutes = require("./routes/transaction.route");
const categoryRoutes = require("./routes/category.route");
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/transaction", transactionRoutes);
app.use("/api/category", categoryRoutes);

connectDB()

app.listen(process.env.PORT, () => {
  console.log("Server is listening");
});
