const Inventory = require("../models/Inventory");

// Reserve Stock
const reserveStock = async (productId, branchId, quantity, session) => {
  const inventory = await Inventory.findOne({
    product: productId,
    branch: branchId,
  }).session(session);

  if (!inventory) {
    throw new Error("Inventory not found.");
  }

  const availableQuantity =
    inventory.quantity - inventory.reservedQuantity;

  if (availableQuantity < quantity) {
    throw new Error(
      `Only ${availableQuantity} units available in stock.`
    );
  }

  inventory.reservedQuantity += quantity;

  await inventory.save({ session });

  return inventory;
};

// Release Reserved Stock
const releaseReservedStock = async (productId, branchId, quantity, session) => {
  const inventory = await Inventory.findOne({
    product: productId,
    branch: branchId,
  }).session(session);

  if (!inventory) {
    throw new Error("Inventory not found.");
  }

  if (inventory.reservedQuantity < quantity) {
    throw new Error("Reserved quantity mismatch.");
  }

  inventory.reservedQuantity -= quantity;

  await inventory.save({ session });

  return inventory;
};

// Deduct Reserved Stock (final dispatch move)
const deductReservedStock = async (productId, branchId, quantity, session) => {


// Find inventory
console.log("===== INVENTORY DEBUG =====");
console.log("Product ID:", productId);
console.log("Branch ID:", branchId);

  const inventory = await Inventory.findOne({
    product: productId,
    branch: branchId,
  }).session(session);

  if (!inventory) {
    throw new Error("Inventory not found.");
  }

  if (inventory.reservedQuantity < quantity) {
    throw new Error("Reserved quantity mismatch.");
  }

  inventory.quantity -= quantity;
  inventory.reservedQuantity -= quantity;

  await inventory.save({ session });

  return inventory;
};

// Add Stock
const addStock = async (productId, branchId, quantity, session) => {
  let inventory = await Inventory.findOne({
    product: productId,
    branch: branchId,
  }).session(session);

  if (!inventory) {
    inventory = new Inventory({
      product: productId,
      branch: branchId,
      quantity: 0,
      reservedQuantity: 0,
    });
  }

  inventory.quantity += quantity;

  await inventory.save({ session });

  return inventory;
};

module.exports = {
  reserveStock,
  releaseReservedStock,
  deductReservedStock,
  addStock,
};