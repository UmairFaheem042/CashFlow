const User = require("../models/user.model");
const Category = require("../models/category.model");

exports.createCategory = async (req, res) => {
  const { name, icon } = req.body;
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) {
      res.status(401).json({
        success: false,
        message: "You should be logged in fot this",
      });
      return;
    }
    const category = await Category.create({ name, icon, userId });

    user.categories.push(category._id);
    await user.save();

    res.status(201).json({
      success: true,
      message: "Category created successfully",
      createdCategory: category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while creating category",
      error: error.message,
    });
  }
};

exports.getAllCategories = async (req, res) => {
  const { userId } = req.params;
  try {
    // const user = await User.findById(userId).populate({
    //   path: "categories",
    //   options: { sort: { name: 1 } },
    // });

    const user = await User.findById(userId).populate({
      path: "categories",
      options: { sort: { name: 1 } },
      populate: {
        path: "transactions", // Populate transactions within categories
        options: { sort: { date: -1 } }, // Optionally sort transactions by date (descending)
      },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Categories retrieved successfully",
      categories: user.categories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching categories",
      error: error.message,
    });
  }
};

exports.deleteCategory = async (req, res) => {
  const { categoryId, userId } = req.params;
  try {
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }
    await Category.findByIdAndDelete(categoryId);

    await User.findByIdAndUpdate(
      userId,
      { $pull: { categories: categoryId } }, // Remove categoryId from the categories array
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Category deleted successfully",
      deletedCategory: category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while deleting the category",
      error: error.message,
    });
  }
};
