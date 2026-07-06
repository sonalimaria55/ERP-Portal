const mongoose = require("mongoose");

const Product = require("../models/Product");
const Category = require("../models/Category");
const Inventory = require("../models/Inventory");

//
// CREATE PRODUCT
//
const createProduct = async (data, user) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const {
      productName,
      sku,
      barcode,
      category,
      brand,
      description,
      purchasePrice,
      sellingPrice,
      gst,
      unit,
      factoryStock,
      minimumStock,
      images,
    } = data;

    // 1. Check category
    const categoryExists = await Category.findById(category).session(session);
    if (!categoryExists) {
      throw new Error("Category not found");
    }

    // 2. Check SKU
    const skuExists = await Product.findOne({ sku }).session(session);
    if (skuExists) {
      throw new Error("SKU already exists");
    }

    // 3. Check barcode (if provided)
    if (barcode) {
      const barcodeExists = await Product.findOne({ barcode }).session(session);
      if (barcodeExists) {
        throw new Error("Barcode already exists");
      }
    }

    // 4. Create product
    const product = await Product.create(
      [
        {
          productName,
          sku,
          barcode,
          category,
          brand,
          description,
          purchasePrice,
          sellingPrice,
          gst,
          unit,
          minimumStock,
          images,
          createdBy: user._id,
        },
      ],
      { session }
    );

    const createdProduct = product[0];

    // 5. Create factory inventory
    await Inventory.create(
      [
        {
          product: createdProduct._id,
          branch: null, // factory
          quantity: factoryStock || 0,
          reservedQuantity: 0,
          lastUpdatedBy: user._id,
        },
      ],
      { session }
    );

    await session.commitTransaction();
    session.endSession();

    return createdProduct;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};

//
// GET ALL PRODUCTS
//
const getAllProducts = async () => {
  return await Product.find()
    .populate("category", "categoryName")
    .populate("createdBy", "name email")
    .sort({ createdAt: -1 });
};

//
// GET PRODUCT BY ID
//
const getProductById = async (id) => {
  const product = await Product.findById(id)
    .populate("category", "categoryName")
    .populate("createdBy", "name email");

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
};

//
// UPDATE PRODUCT
//
const updateProduct = async (id, data) => {
  const product = await Product.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  })
    .populate("category", "categoryName")
    .populate("createdBy", "name email");

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
};

//
// DEACTIVATE PRODUCT (Soft Delete)
//
const deactivateProduct = async (id) => {
  const product = await Product.findById(id);

  if (!product) {
    throw new Error("Product not found");
  }

  product.isActive = false;
  await product.save();

  return product;
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deactivateProduct,
};