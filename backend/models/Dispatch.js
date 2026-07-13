// const mongoose = require("mongoose");

// const dispatchSchema = new mongoose.Schema(
//   {
//     dispatchNumber: {
//       type: String,
//       required: true,
//       unique: true,
//       trim: true,
//     },

//     // Source Branch (null = Factory)
//     fromBranch: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Branch",
//       default: null,
//     },

//     // Destination Branch
//     toBranch: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Branch",
//       required: true,
//     },

//     // Products included in this dispatch
//     products: [
//       {
//         product: {
//           type: mongoose.Schema.Types.ObjectId,
//           ref: "Product",
//           required: true,
//         },

//         quantity: {
//           type: Number,
//           required: true,
//           min: 1,
//         },
//       },
//     ],

//     // Total quantity of all products
//     totalItems: {
//       type: Number,
//       default: 0,
//     },

//     status: {
//       type: String,
//       enum: [
//         "Pending",
//         "Approved",
//         "Dispatched",
//         "In Transit",
//         "Delivered",
//         "Cancelled",
//       ],
//       default: "Pending",
//     },

//     expectedDeliveryDate: {
//       type: Date,
//     },

//     deliveredDate: {
//       type: Date,
//     },

//     notes: {
//       type: String,
//       trim: true,
//       default: "",
//     },

//     createdBy: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// // Calculate total quantity before saving
// dispatchSchema.pre("save", function (next) {
//   this.totalItems = this.products.reduce(
//     (total, item) => total + item.quantity,
//     0
//   );

  
// });

// module.exports = mongoose.model("Dispatch", dispatchSchema);
const mongoose = require("mongoose");

const dispatchItemSchema = new mongoose.Schema(
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
  {
    _id: false,
  }
);

const dispatchSchema = new mongoose.Schema(
  {
    // // Auto Generated (DSP000001)
    // dispatchNumber: {
    //   type: String,
    //   required: true,
    //   unique: true,
    //   uppercase: true,
    //   trim: true,
    // },

    // Related Stock Request
    stockRequest: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "StockRequest",
      required: true,
    },

    // Source Factory
    factory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Factory",
      required: true,
    },

    // Optional source branch (for future Branch → Branch transfers)
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

    // Products being dispatched
    items: {
      type: [dispatchItemSchema],
      validate: {
        validator: (items) => items.length > 0,
        message: "At least one product is required.",
      },
    },

    // Total quantity
    totalItems: {
      type: Number,
      default: 0,
    },

    // Dispatch Status
    status: {
      type: String,
      enum: [
        "Pending",
        "Approved",
        "Dispatched",
        "Received",
        "Cancelled",
      ],
      default: "Pending",
    },

    // Dispatch Date
    dispatchDate: {
      type: Date,
      default: Date.now,
    },

    // Expected Delivery
    expectedDeliveryDate: {
      type: Date,
      default: null,
    },

    // Actual Receipt Date
    receivedDate: {
      type: Date,
      default: null,
    },

    remarks: {
      type: String,
      trim: true,
      default: "",
    },

    // Factory user who dispatched
    dispatchedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Branch user who received
    receivedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    isCancelled: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Auto calculate total quantity
dispatchSchema.pre("save", function (next) {
  this.totalItems = this.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  next();
});

// Indexes

dispatchSchema.index({ stockRequest: 1 });
dispatchSchema.index({ factory: 1 });
dispatchSchema.index({ fromBranch: 1 });
dispatchSchema.index({ toBranch: 1 });
dispatchSchema.index({ status: 1 });
dispatchSchema.index({ dispatchDate: 1 });

module.exports = mongoose.model("Dispatch", dispatchSchema);