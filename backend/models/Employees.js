const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    // Employee Code
    employeeCode: {
      type: String,
      unique: true,
      index: true,
    },

    // Personal Details
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    photo: {
      type: String,
      default: "",
    },

    phone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    aadhaarNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    panNumber: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    },

    uanNumber: {
      type: String,
      trim: true,
      default: "",
    },

    // Organization Details
    department: {
      type: String,
      enum: [
        "Management",
        "Factory",
        "Branch",
        "Sales",
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

    joiningDate: {
      type: Date,
      required: true,
    },

    // Address
    address: {
      type: String,
      trim: true,
      default: "",
    },

    city: {
      type: String,
      trim: true,
      default: "",
    },

    state: {
      type: String,
      trim: true,
      default: "",
    },

    pincode: {
      type: String,
      trim: true,
      default: "",
    },

    // Emergency Contact
    emergencyContactName: {
      type: String,
      trim: true,
      default: "",
    },

    emergencyContactPhone: {
      type: String,
      trim: true,
      default: "",
    },

    // ERP Login Account
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    // Employee Status
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },

    // Audit
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

module.exports = mongoose.model("Employee", employeeSchema);