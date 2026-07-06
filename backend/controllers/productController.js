const Product = require("../models/Product");
const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");
const productService = require("../services/productService");

//
// CREATE PRODUCT
//
const createProduct = asyncHandler(async (req, res) => {
  const product = await productService.createProduct(req.body, req.user);

  res.status(201).json(
    new ApiResponse(true, "Product created successfully", product)
  );
});

//
// GET ALL PRODUCTS
//
const getAllProducts = asyncHandler(async (req, res) => {
  const products = await productService.getAllProducts();

  res.status(200).json(
    new ApiResponse(true, "Products fetched successfully", {
      count: products.length,
      products,
    })
  );
});

//
// GET PRODUCT BY ID
//
const getProductById = asyncHandler(async (req, res) => {
  const product = await productService.getProductById(req.params.id);

  res.status(200).json(
    new ApiResponse(true, "Product fetched successfully", product)
  );
});

//
// UPDATE PRODUCT
//
const updateProduct = asyncHandler(async (req, res) => {
  const product = await productService.updateProduct(
    req.params.id,
    req.body
  );

  res.status(200).json(
    new ApiResponse(true, "Product updated successfully", product)
  );
});

//
// DELETE PRODUCT (soft delete later if needed)
//
const deleteProduct = asyncHandler(async (req, res) => {
  await productService.deactivateProduct(req.params.id);

  res.status(200).json(
    new ApiResponse(true, "Product deleted successfully")
  );
});

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};