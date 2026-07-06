const mongoose = require("mongoose");

const dispatchSchema = new mongoose.Schema(
  {
    dispatchNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    // Source Branch (null = Factory)
    fromBranch: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch",
      default: null,
    },

    // Destination Branch
    toBranch: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch",
      required: true,
    },

    // Products included in this dispatch
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },

        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
      },
    ],

    // Total quantity of all products
    totalItems: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: [
        "Pending",
        "Approved",
        "Dispatched",
        "In Transit",
        "Delivered",
        "Cancelled",
      ],
      default: "Pending",
    },

    expectedDeliveryDate: {
      type: Date,
    },

    deliveredDate: {
      type: Date,
    },

    notes: {
      type: String,
      trim: true,
      default: "",
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Calculate total quantity before saving
dispatchSchema.pre("save", function (next) {
  this.totalItems = this.products.reduce(
    (total, item) => total + item.quantity,
    0
  );

  
});

module.exports = mongoose.model("Dispatch", dispatchSchema);