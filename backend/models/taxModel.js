const mongoose = require("mongoose");


const taxSchema = new mongoose.Schema(
  {
    taxCode: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    },


    taxName: {
      type: String,
      required: [true, "Tax name is required"],
      unique: true,
      trim: true,
    },


    taxPercentage: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },


    description: {
      type: String,
      default: "",
      trim: true,
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


// Indexes
taxSchema.index({
  isActive: 1,
});


taxSchema.index({
  isDeleted: 1,
});


module.exports = mongoose.model("Tax", taxSchema);