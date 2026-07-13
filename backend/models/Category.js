// const mongoose = require("mongoose");

// const categorySchema = new mongoose.Schema(
//   {
//     categoryName: {
//       type: String,
//       required: [true, "Category name is required"],
//       unique: true,
//       trim: true,
//       maxlength: [100, "Category name cannot exceed 100 characters"],
//     },

//     description: {
//       type: String,
//       trim: true,
//       default: "",
//       maxlength: [500, "Description cannot exceed 500 characters"],
//     },

//     isActive: {
//       type: Boolean,
//       default: true,
//     },

//     isDeleted: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// module.exports = mongoose.model("Category", categorySchema);
//---------------------------------------------------------------------
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    categoryCode: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    },

    categoryName: {
      type: String,
      required: [true, "Category name is required"],
      unique: true,
      trim: true,
      maxlength: [100, "Category name cannot exceed 100 characters"],
    },

    description: {
      type: String,
      trim: true,
      default: "",
      maxlength: [500, "Description cannot exceed 500 characters"],
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


// Additional indexes
categorySchema.index({ isActive: 1 });
categorySchema.index({ isDeleted: 1 });


module.exports = mongoose.model("Category", categorySchema);