const express = require("express");
const router = express.Router();
const {
  createCategory,
  getAllCategories,
  deleteCategory,
} = require("../controllers/categoryController");

// These all routes will be authenticated first
router.post("/:userId/createCategory", createCategory);

router.get("/:userId/getAllCategories", getAllCategories);

router.delete("/:userId/deleteCategory/:categoryId", deleteCategory);

module.exports = router;
