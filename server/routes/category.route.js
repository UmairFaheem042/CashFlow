const express = require("express");
const router = express.Router();
const {
  createCategory,
  getAllCategories,
  deleteCategory,
} = require("../controllers/categoryController");
const { validateToken } = require("../middleware/validateToken");

// These all routes will be authenticated first
router.post("/:userId/createCategory", validateToken,createCategory);
router.get("/:userId/getAllCategories", validateToken, getAllCategories);
router.delete("/:userId/deleteCategory/:categoryId", validateToken, deleteCategory);

module.exports = router;
