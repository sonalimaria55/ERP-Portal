const Category = require("../models/Category");

// Create Category
const createCategory = async (categoryData) => {
  return await Category.create(categoryData);
};

// Get All Categories
const getAllCategories = async (page, limit, search) => {
  const query = {
    isDeleted: false,
  };

  if (search) {
    query.categoryName = {
      $regex: search,
      $options: "i",
    };
  }

  const total = await Category.countDocuments(query);

  const categories = await Category.find(query)
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit);

  return {
    total,
    categories,
  };
};

// Get Category By ID
const getCategoryById = async (id) => {
  return await Category.findById(id);
};

// Update Category
const updateCategory = async (id, categoryData) => {
  return await Category.findByIdAndUpdate(id, categoryData, {
    new: true,
    runValidators: true,
  });
};

// Soft Delete Category
const deleteCategory = async (id) => {
  return await Category.findByIdAndUpdate(
    id,
    {
      isDeleted: true,
    },
    {
      new: true,
    }
  );
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};