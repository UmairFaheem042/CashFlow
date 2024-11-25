const express = require("express");
const router = express.Router();
const {
  createCategory,
  getCategory,
  getAllCategories,
  deleteCategory,
} = require("../controllers/categoryController");

// These all routes will be authenticated first
router.post("/:userId/createCategory", createCategory);

router.get("/:userId/getCategory", getCategory);

router.get("/:userId/allCategories", getAllCategories);

// when deleting category, it should not delete transaction, in place of category it should fill Others
router.delete("/:userId/deleteCategory", deleteCategory);

module.exports = router;
