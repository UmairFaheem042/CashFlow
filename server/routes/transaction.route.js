const express = require("express");
const router = express.Router();
const {
  createTransaction,
  getAllTransactions,
  deleteTransaction,
  getRecentTransactions,
} = require("../controllers/transactionController");
const { validateToken } = require("../middleware/validateToken");

// These all routes will be validated first using validateToken
router.post("/:userId/createTransaction", validateToken, createTransaction);
router.get("/:userId/getAllTransactions", validateToken, getAllTransactions);
router.get("/:userId/getRecentTransactions", validateToken, getRecentTransactions);
router.delete("/:userId/deleteTransaction/:transactionId", validateToken, deleteTransaction);

router.get("/:userId/getTransactionStats", (req, res) => {})
router.get("/:userId/getMonthlyTransactions", (req, res) => {})
router.get("/:userId/getYearlyTransactions", (req, res) => {})

module.exports = router;
