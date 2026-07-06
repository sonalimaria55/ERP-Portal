const Category = require("../models/Category");
const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");

// Create Category
const createCategory = asyncHandler(async (req, res) => {
  const { categoryName, description } = req.body;

  const exists = await Category.findOne({ categoryName });

  if (exists) {
    return res.status(400).json(
      new ApiResponse(false, "Category already exists")
    );
  }

  const category = await Category.create({
    categoryName,
    description,
  });

  res.status(201).json(
    new ApiResponse(true, "Category created successfully", category)
  );
});

// Get All Categories
const getAllCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find().sort({ createdAt: -1 });

  res.status(200).json(
    new ApiResponse(true, "Categories fetched successfully", {
      count: categories.length,
      categories,
    })
  );
});

// Get Category By ID
const getCategoryById = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    return res.status(404).json(
      new ApiResponse(false, "Category not found")
    );
  }

  res.status(200).json(
    new ApiResponse(true, "Category fetched successfully", category)
  );
});

// Update Category
const updateCategory = asyncHandler(async (req, res) => {
  const category = await Category.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!category) {
    return res.status(404).json(
      new ApiResponse(false, "Category not found")
    );
  }

  res.status(200).json(
    new ApiResponse(true, "Category updated successfully", category)
  );
});

// Delete Category
const deleteCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    return res.status(404).json(
      new ApiResponse(false, "Category not found")
    );
  }

  await category.deleteOne();

  res.status(200).json(
    new ApiResponse(true, "Category deleted successfully")
  );
});

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};