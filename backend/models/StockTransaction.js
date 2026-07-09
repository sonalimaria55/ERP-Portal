const mongoose = require("mongoose");

const stockTransactionSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    transactionType: {
      type: String,
      enum: [
        "OPENING_STOCK",
        "PURCHASE",
        "SALE",
        "RETURN",
        "ADJUSTMENT",
        "TRANSFER_IN",
        "TRANSFER_OUT",
      ],
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
    },

    balanceAfter: {
      type: Number,
      required: true,
    },

    referenceType: {
      type: String,
      enum: [
        "PRODUCT",
        "PURCHASE",
        "SALE",
        "DISPATCH",
        "MANUAL",
      ],
      default: "MANUAL",
    },

    referenceId: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
    },

    remarks: {
      type: String,
      trim: true,
      default: "",
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "StockTransaction",
  stockTransactionSchema
);