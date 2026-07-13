// const mongoose = require("mongoose");

// const employeeSchema = new mongoose.Schema(
//   {
//     // Employee Code
//     employeeCode: {
//       type: String,
//       unique: true,
//       index: true,
//     },

//     // Personal Details
//     fullName: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     photo: {
//       type: String,
//       default: "",
//     },

//     phone: {
//       type: String,
//       required: true,
//       unique: true,
//       trim: true,
//     },

//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       lowercase: true,
//       trim: true,
//     },

//     aadhaarNumber: {
//       type: String,
//       required: true,
//       unique: true,
//       trim: true,
//     },

//     panNumber: {
//       type: String,
//       required: true,
//       unique: true,
//       uppercase: true,
//       trim: true,
//     },

//     uanNumber: {
//       type: String,
//       trim: true,
//       default: "",
//     },

 

//     factory: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Factory",
//       default: null,
//     },

//     branch: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Branch",
//       default: null,
//     },

//     joiningDate: {
//       type: Date,
//       required: true,
//     },

//     // Address
//     address: {
//       type: String,
//       trim: true,
//       default: "",
//     },

//     city: {
//       type: String,
//       trim: true,
//       default: "",
//     },

//     state: {
//       type: String,
//       trim: true,
//       default: "",
//     },

//     pincode: {
//       type: String,
//       trim: true,
//       default: "",
//     },

//     // Emergency Contact
//   guardianContactName: {
//       type: String,
//       trim: true,
//       default: "",
//     },

//     guardianContactPhone: {
//       type: String,
//       trim: true,
//       default: "",
//     },

//     // ERP Login Account
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       default: null,
//     },

//     // Employee Status
//     status: {
//       type: String,
//       enum: ["Active", "Inactive"],
//       default: "Active",
//     },

//     // Audit
//     createdBy: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       default: null,
//     },

//     updatedBy: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       default: null,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// module.exports = mongoose.model("Employee", employeeSchema);
const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    // =====================================
    // Employee Identity
    // =====================================

    // Permanent Employee ID (Never Changes)
    employeeId: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true,
      uppercase: true,
    },

    // Employee Code (Business / Login / ID Card)
    employeeCode: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true,
      uppercase: true,
    },

    // =====================================
    // Personal Details
    // =====================================

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
      default: "",
      trim: true,
    },

    dateOfBirth: {
      type: Date,
      default: null,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      default: "Male",
    },


    // =====================================
    // Company Details
    // =====================================

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

    designation: {
      type: String,
      default: "",
      trim: true,
    },

    department: {
      type: String,
      default: "",
      trim: true,
    },

    // =====================================
    // Address
    // =====================================

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

    // =====================================
    // Guardian / Emergency Contact
    // =====================================

    guardianName: {
      type: String,
      default: "",
      trim: true,
    },

    guardianRelation: {
      type: String,
      default: "",
      trim: true,
    },

    guardianPhone: {
      type: String,
      default: "",
      trim: true,
    },

    guardianAddress: {
      type: String,
      default: "",
      trim: true,
    },

    // =====================================
    // Bank Details
    // =====================================

    bankName: {
      type: String,
      default: "",
      trim: true,
    },

  

    accountNumber: {
      type: String,
      default: "",
      trim: true,
    },

    ifscCode: {
      type: String,
      default: "",
      trim: true,
      uppercase: true,
    },

    // =====================================
    // ERP Login Account
    // =====================================

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    // =====================================
    // Employee Status
    // =====================================

    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },

    // =====================================
    // Audit
    // =====================================

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