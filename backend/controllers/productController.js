const productService = require("../services/productService");

const {
  uploadProductImage,
  deleteProductImage,
} = require("../services/productImageService");

const Product = require("../models/Product");

/**
 * Create Product
 */
const createProduct = async (req, res) => {
  try {

    const productData = {
      ...req.body,
    };

    // If image uploaded to Cloudinary
    if (req.file) {
      productData.images = [
        {
          url: req.file.path,
          publicId: req.file.filename,
        },
      ];
    }

    const product = await productService.createProduct(
      productData,
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

/**
 * Upload Product Image
 */
const uploadImage = async (req, res) => {
  try {
    console.log("========== PRODUCT IMAGE UPLOAD ==========");
    console.log(req.file);

    const product = await Product.findOne({
      _id: req.params.id,
      isDeleted: false,
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    const image = await uploadProductImage(req.file);

    product.images.push(image);
    product.updatedBy = req.user._id;

    await product.save();

    return res.status(200).json({
      success: true,
      message: "Product image uploaded successfully",
      data: product,
    });
  } catch (error) {
    console.error(error);

    return res.status(400).json({
      success: false,
      message: error.message,
      stack:
        process.env.NODE_ENV === "development"
          ? error.stack
          : undefined,
    });
  }
};

/**
 * Delete Product Image
 */
const deleteImage = async (req, res) => {
  try {
    const product = await Product.findOne({
      _id: req.params.id,
      isDeleted: false,
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    const image = product.images.id(req.params.imageId);

    if (!image) {
      return res.status(404).json({
        success: false,
        message: "Image not found",
      });
    }

    await deleteProductImage(image.publicId);

    image.deleteOne();

    product.updatedBy = req.user._id;

    await product.save();

    return res.status(200).json({
      success: true,
      message: "Product image deleted successfully",
      data: product,
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
  uploadImage,
  deleteImage,
};