const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema(
  {
    counterName: {
      type: String,
      required: [true, "Counter name is required"],
      trim: true,
    },

    counterCode: {
      type: String,
      required: [true, "Counter code is required"],
      uppercase: true,
      trim: true,
      unique: true,
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

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Counter", counterSchema);