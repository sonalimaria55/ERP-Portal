const mongoose = require("mongoose");


const unitSchema = new mongoose.Schema(
  {
    unitCode: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    },

    unitName: {
      type: String,
      required: [true, "Unit name is required"],
      unique: true,
      trim: true,
      maxlength: [
        50,
        "Unit name cannot exceed 50 characters"
      ],
    },

    shortName: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
      maxlength: [
        10,
        "Short name cannot exceed 10 characters"
      ],
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
unitSchema.index({
  isActive: 1,
});

unitSchema.index({
  isDeleted: 1,
});


module.exports = mongoose.model("Unit", unitSchema);