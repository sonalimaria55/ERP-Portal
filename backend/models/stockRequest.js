const mongoose = require("mongoose");

const stockRequestItemSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    requestedQuantity: {
      type: Number,
      required: true,
      min: 1,
    },

    approvedQuantity: {
      type: Number,
      default: 0,
      min: 0,
    },

    remarks: {
      type: String,
      default: "",
      trim: true,
    },
  },
  { _id: false }
);

const stockRequestSchema = new mongoose.Schema(
  {
    requestNumber: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    },

    factory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Factory",
      required: true,
    },

    branch: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch",
      required: true,
    },

    requestedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    approvedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    status: {
      type: String,
      enum: [
        "Pending",
        "Approved",
        "Rejected",
        "Dispatched",
        "Received",
        "Completed",
      ],
      default: "Pending",
    },

    remarks: {
      type: String,
      default: "",
      trim: true,
    },

    items: {
      type: [stockRequestItemSchema],
      validate: {
        validator: (items) => items.length > 0,
        message: "At least one product is required.",
      },
    },
  },
  {
    timestamps: true,
  }
);

stockRequestSchema.index({ requestNumber: 1 });
stockRequestSchema.index({ status: 1 });
stockRequestSchema.index({ branch: 1 });
stockRequestSchema.index({ factory: 1 });

module.exports = mongoose.model(
  "StockRequest",
  stockRequestSchema
);