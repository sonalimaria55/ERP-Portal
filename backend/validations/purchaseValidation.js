const mongoose = require("mongoose");

const validatePurchaseData = (data) => {
  const errors = [];

  // Supplier
  if (!data.supplier) {
    errors.push("Supplier is required.");
  } else if (!mongoose.Types.ObjectId.isValid(data.supplier)) {
    errors.push("Invalid supplier.");
  }

  // Items
  if (!Array.isArray(data.items) || data.items.length === 0) {
    errors.push("At least one purchase item is required.");
  } else {
    data.items.forEach((item, index) => {
      if (!item.product) {
        errors.push(
          `Product is required for item ${index + 1}.`
        );
      } else if (
        !mongoose.Types.ObjectId.isValid(item.product)
      ) {
        errors.push(
          `Invalid product for item ${index + 1}.`
        );
      }

      if (
        item.quantity === undefined ||
        Number(item.quantity) <= 0
      ) {
        errors.push(
          `Quantity must be greater than 0 for item ${index + 1}.`
        );
      }

      if (
        item.purchasePrice === undefined ||
        Number(item.purchasePrice) < 0
      ) {
        errors.push(
          `Purchase price is invalid for item ${index + 1}.`
        );
      }

      if (
        item.tax !== undefined &&
        Number(item.tax) < 0
      ) {
        errors.push(
          `Tax cannot be negative for item ${index + 1}.`
        );
      }

      if (
        item.discount !== undefined &&
        Number(item.discount) < 0
      ) {
        errors.push(
          `Discount cannot be negative for item ${index + 1}.`
        );
      }
    });
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

module.exports = {
  validatePurchaseData,
};