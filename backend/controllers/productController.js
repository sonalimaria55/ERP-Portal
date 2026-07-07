// const Product = require("../models/Product");
// const asyncHandler = require("../utils/asyncHandler");
// const ApiResponse = require("../utils/ApiResponse");
// const productService = require("../services/productService");

// //
// // CREATE PRODUCT
// //
// const createProduct = asyncHandler(async (req, res) => {
//   const product = await productService.createProduct(req.body, req.user);

//   res.status(201).json(
//     new ApiResponse(true, "Product created successfully", product)
//   );
// });

// //
// // GET ALL PRODUCTS
// //
// const getAllProducts = asyncHandler(async (req, res) => {
//   const products = await productService.getAllProducts();

//   res.status(200).json(
//     new ApiResponse(true, "Products fetched successfully", {
//       count: products.length,
//       products,
//     })
//   );
// });

// //
// // GET PRODUCT BY ID
// //
// const getProductById = asyncHandler(async (req, res) => {
//   const product = await productService.getProductById(req.params.id);

//   res.status(200).json(
//     new ApiResponse(true, "Product fetched successfully", product)
//   );
// });

// //
// // UPDATE PRODUCT
// //
// const updateProduct = asyncHandler(async (req, res) => {
//   const product = await productService.updateProduct(
//     req.params.id,
//     req.body
//   );

//   res.status(200).json(
//     new ApiResponse(true, "Product updated successfully", product)
//   );
// });

// //
// // DELETE PRODUCT (soft delete later if needed)
// //
// const deleteProduct = asyncHandler(async (req, res) => {
//   await productService.deactivateProduct(req.params.id);

//   res.status(200).json(
//     new ApiResponse(true, "Product deleted successfully")
//   );
// });

// module.exports = {
//   createProduct,
//   getAllProducts,
//   getProductById,
//   updateProduct,
//   deleteProduct,
// };
const productService = require("../services/productService");

/**
 * Create Product
 */
const createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(
      req.body,
      req.user._id
    );

    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Get All Products
 */
const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts(req.query);

    return res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: products,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Get Product By Id
 */
const getProductById = async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Product fetched successfully",
      data: product,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Update Product
 */
const updateProduct = async (req, res) => {
  try {
    const product = await productService.updateProduct(
      req.params.id,
      req.body,
      req.user._id
    );

    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Delete Product
 */
const deleteProduct = async (req, res) => {
  try {
    const result = await productService.deleteProduct(
      req.params.id,
      req.user._id
    );

    return res.status(200).json({
      success: true,
      message: result.message,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};