const express = require("express");
const router = express.Router();
const {
  createTransaction,
  getAllTransactions,
  deleteTransaction,
  getRecentTransactions,
} = require("../controllers/transactionController");

// These all routes will be authenticated first
router.post("/:userId/createTransaction", createTransaction);

router.get("/:userId/getAllTransactions", getAllTransactions);

router.get("/:userId/getRecentTransactions", getRecentTransactions);

router.delete("/:userId/deleteTransaction/:transactionId", deleteTransaction);

module.exports = router;
