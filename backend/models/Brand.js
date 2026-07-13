// const mongoose = require("mongoose");

// const brandSchema = new mongoose.Schema(
//   {
//     brandId: {
//       type: String,
//       required: true,
//       unique: true,
//       uppercase: true,
//       trim: true,
//     },

//     brandCode: {
//       type: String,
//       required: true,
//       unique: true,
//       uppercase: true,
//       trim: true,
//     },

//     brandName: {
//       type: String,
//       required: true,
//       unique: true,
//       trim: true,
//     },

//     description: {
//       type: String,
//       default: "",
//       trim: true,
//     },

//     logo: {
//       type: String,
//       default: "",
//     },

//     status: {
//       type: String,
//       enum: ["Active", "Inactive"],
//       default: "Active",
//     },

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

// brandSchema.index({ brandName: 1 });
// brandSchema.index({ status: 1 });

// module.exports = mongoose.model("Brand", brandSchema);

const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema(
  {
    brandId: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    },

    brandCode: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    },

    brandName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
      trim: true,
    },

    logo: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
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


// Indexes

brandSchema.index({ status: 1 });


module.exports = mongoose.model("Brand", brandSchema);