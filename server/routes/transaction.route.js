const express = require("express");
const router = express.Router();
const {
  createTransaction,
  getTransaction,
  getAllTransactions,
  deleteTransaction,
} = require("../controllers/transactionController");

// These all routes will be authenticated first
router.post("/:userId/createTransaction", createTransaction);

router.get("/:userId/getTransaction", getTransaction);

router.get("/:userId/allTransactions", getAllTransactions);

router.delete("/:userId/deleteTransaction", deleteTransaction);

module.exports = router;
