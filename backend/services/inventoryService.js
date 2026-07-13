const Inventory = require("../models/Inventory");
const stockTransactionService = require("./stockTransactionService");

/**
 * Get Inventory
 */
const getInventory = async (
  productId,
  branchId,
  session
) => {
  return await Inventory.findOne({
    product: productId,
    branch: branchId || null,
  }).session(session);
};

/**
 * Reserve Stock
 */
const reserveStock = async (
  productId,
  branchId,
  quantity,
  session
) => {
  const inventory = await getInventory(
    productId,
    branchId,
    session
  );

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

/**
 * Release Reserved Stock
 */
const releaseReservedStock = async (
  productId,
  branchId,
  quantity,
  session
) => {
  const inventory = await getInventory(
    productId,
    branchId,
    session
  );

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

/**
 * Deduct Reserved Stock
 */
const deductReservedStock = async (
  productId,
  branchId,
  quantity,
  session
) => {
  const inventory = await getInventory(
    productId,
    branchId,
    session
  );

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

/**
 * Add Stock
 */
const addStock = async (
  productId,
  branchId,
  quantity,
  transactionData = {},
  session
) => {
  let inventory = await getInventory(
    productId,
    branchId,
    session
  );

  if (!inventory) {
    inventory = new Inventory({
      product: productId,
      branch: branchId || null,
      quantity: 0,
      reservedQuantity: 0,
    });
  }
  inventory.quantity += Number(quantity);

  await inventory.save({ session });

  await stockTransactionService.createTransaction(
    {
      product: productId,
      transactionType:
        transactionData.transactionType || "MANUAL",
      quantity,
      balanceAfter: inventory.quantity,
      referenceType:
        transactionData.referenceType || "MANUAL",
      referenceId:
        transactionData.referenceId || null,
      remarks:
        transactionData.remarks || "",
      createdBy:
        transactionData.createdBy,
    },
    session
  );

  return inventory;
};

/**
 * Remove Stock
 */
const removeStock = async (
  productId,
  branchId,
  quantity,
  transactionData = {},
  session
) => {
  const inventory = await getInventory(
    productId,
    branchId,
    session
  );

  if (!inventory) {
    throw new Error("Inventory not found.");
  }

  if (inventory.quantity < quantity) {
    throw new Error(
      `Only ${inventory.quantity} units available.`
    );
  }

  inventory.quantity -= quantity;

  await inventory.save({ session });

  await stockTransactionService.createTransaction(
    {
      product: productId,
      transactionType:
        transactionData.transactionType || "MANUAL",
      quantity: -quantity,
      balanceAfter: inventory.quantity,
      referenceType:
        transactionData.referenceType || "MANUAL",
      referenceId:
        transactionData.referenceId || null,
      remarks:
        transactionData.remarks || "",
      createdBy:
        transactionData.createdBy,
    },
    session
  );

  return inventory;
};

/**
 * Adjust Stock
 */
const adjustStock = async (
  productId,
  branchId,
  difference,
  transactionData = {},
  session
) => {
  let inventory = await getInventory(
    productId,
    branchId,
    session
  );

  if (!inventory) {
    inventory = new Inventory({
      product: productId,
      branch: branchId || null,
      quantity: 0,
      reservedQuantity: 0,
    });
  }

  const newQuantity = inventory.quantity + difference;

  if (newQuantity < 0) {
    throw new Error(
      "Adjusted stock cannot be negative."
    );
  }

  inventory.quantity = newQuantity;

  await inventory.save({ session });

  await stockTransactionService.createTransaction(
    {
      product: productId,
      transactionType:
        transactionData.transactionType ||
        "ADJUSTMENT",
      quantity: difference,
      balanceAfter: inventory.quantity,
      referenceType:
        transactionData.referenceType || "MANUAL",
      referenceId:
        transactionData.referenceId || null,
      remarks:
        transactionData.remarks ||
        "Manual Stock Adjustment",
      createdBy:
        transactionData.createdBy,
    },
    session
  );

  return inventory;
};

module.exports = {
  getInventory,
  reserveStock,
  releaseReservedStock,
  deductReservedStock,
  addStock,
  removeStock,
  adjustStock,
};