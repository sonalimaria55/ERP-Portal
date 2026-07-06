const Inventory = require("../models/Inventory");
const Product = require("../models/Product");
const Branch = require("../models/Branch");

const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");

// Create Inventory
const createInventory = asyncHandler(async (req, res) => {
  const {
    product,
    branch,
    quantity,
    reservedQuantity
  } = req.body;

  // Check Product
  const productExists = await Product.findById(product);

  if (!productExists) {
    return res
      .status(404)
      .json(new ApiResponse(false, "Product not found"));
  }

  // Check Branch (Factory = null)
  if (branch) {
    const branchExists = await Branch.findById(branch);

    if (!branchExists) {
      return res
        .status(404)
        .json(new ApiResponse(false, "Branch not found"));
    }
  }

  // Prevent duplicate inventory
  const inventoryExists = await Inventory.findOne({
    product,
    branch: branch || null,
  });

  if (inventoryExists) {
    return res
      .status(400)
      .json(new ApiResponse(false, "Inventory already exists"));
  }

  const inventory = await Inventory.create({
    product,
    branch: branch || null,
    quantity,
    reservedQuantity,
    lastUpdatedBy: req.user._id,
  });

  res.status(201).json(
    new ApiResponse(
      true,
      "Inventory created successfully",
      inventory
    )
  );
});

// Get All Inventory
const getAllInventory = asyncHandler(async (req, res) => {

  const inventory = await Inventory.find()
    .populate("product", "productName sku")
    .populate("branch", "branchName branchCode")
    .populate("lastUpdatedBy", "name email");

  res.status(200).json(
    new ApiResponse(true, "Inventory fetched successfully", {
      count: inventory.length,
      inventory,
    })
  );

});

// Get Single Inventory
const getInventoryById = asyncHandler(async (req, res) => {

  const inventory = await Inventory.findById(req.params.id)
    .populate("product", "productName sku")
    .populate("branch", "branchName branchCode")
    .populate("lastUpdatedBy", "name email");

  if (!inventory) {
    return res
      .status(404)
      .json(new ApiResponse(false, "Inventory not found"));
  }

  res.status(200).json(
    new ApiResponse(
      true,
      "Inventory fetched successfully",
      inventory
    )
  );

});

// Update Inventory
const updateInventory = asyncHandler(async (req, res) => {

  const inventory = await Inventory.findById(req.params.id);

  if (!inventory) {
    return res
      .status(404)
      .json(new ApiResponse(false, "Inventory not found"));
  }

  inventory.quantity =
    req.body.quantity ?? inventory.quantity;

  inventory.reservedQuantity =
    req.body.reservedQuantity ??
    inventory.reservedQuantity;

  inventory.lastUpdatedBy = req.user._id;

  await inventory.save();

  res.status(200).json(
    new ApiResponse(
      true,
      "Inventory updated successfully",
      inventory
    )
  );

});

// Delete Inventory
const deleteInventory = asyncHandler(async (req, res) => {

  const inventory = await Inventory.findById(req.params.id);

  if (!inventory) {
    return res
      .status(404)
      .json(new ApiResponse(false, "Inventory not found"));
  }

  await inventory.deleteOne();

  res.status(200).json(
    new ApiResponse(
      true,
      "Inventory deleted successfully"
    )
  );

});

module.exports = {
  createInventory,
  getAllInventory,
  getInventoryById,
  updateInventory,
  deleteInventory,
};