
const mongoose = require("mongoose");

const internalCustomerSchema = new mongoose.Schema({
  customerCode: {
    type: String,
    unique: true,
    index: true,
  },

  customerName: {
    type: String,
    required: true,
    trim: true,
  },

  phone: {
    type: String,
  },

  email: {
    type: String,
  },

  address: {
    type: String,
  },

  type: {
    type: String,
    enum: [
      "factory",
      "branch",
      "department"
    ],
    required: true,
  },

  factory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Factory",
    default: null,
  },

  branch: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Branch",
    default: null,
  },

  isActive: {
    type: Boolean,
    default: true,
  },

}, {
  timestamps: true,
});

module.exports = mongoose.model(
  "InternalCustomer",
  internalCustomerSchema
);