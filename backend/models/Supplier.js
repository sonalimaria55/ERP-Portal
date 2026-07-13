const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema(
  {
    branch: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch",
      default: null,
    },
    factory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Factory",
      default: null,
    },
    supplierCode: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    },
    supplierName: {
      type: String,
      required: [true, "Supplier name is required"],
      trim: true,
      maxlength: [100, "Supplier name cannot exceed 100 characters"],
    },
    contactPerson: {
      type: String,
      default: "",
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    gstNumber: {
      type: String,
      trim: true,
      uppercase: true,
      default: "",
    },
    address: {
      type: String,
      default: "",
      trim: true,
    },
    city: {
      type: String,
      default: "",
      trim: true,
    },
    state: {
      type: String,
      default: "",
      trim: true,
    },
    pincode: {
      type: String,
      default: "",
      trim: true,
    },
    paymentTerms: {
      type: String,
      default: "",
    },
    openingBalance: {
      type: Number,
      default: 0,
    },
    creditLimit: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

supplierSchema.index({ supplierName: 1 });
supplierSchema.index({ gstNumber: 1 });
supplierSchema.index({ isActive: 1 });
supplierSchema.index({ isDeleted: 1 });

module.exports = mongoose.model("Supplier", supplierSchema);