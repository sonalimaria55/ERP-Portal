const mongoose = require("mongoose");


const purchaseSchema = new mongoose.Schema(
{
    purchaseNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        uppercase: true,
    },


    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Supplier",
        required: true,
    },


    items: [
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


            purchasePrice: {
                type: Number,
                required: true,
                min: 0,
            },


            tax: {
                type: Number,
                default: 0,
            },


            discount: {
                type: Number,
                default: 0,
            },


            total: {
                type: Number,
                default: 0,
            },
        },
    ],


    subtotal: {
        type: Number,
        default: 0,
    },


    discount: {
        type: Number,
        default: 0,
    },


    tax: {
        type: Number,
        default: 0,
    },


    grandTotal: {
        type: Number,
        default: 0,
    },


    status: {
        type: String,
        enum: [
            "Pending",
            "Received",
            "Cancelled",
        ],
        default: "Pending",
    },


    expectedDeliveryDate: {
        type: Date,
    },


    receivedDate: {
        type: Date,
    },


    notes: {
        type: String,
        default: "",
        trim: true,
    },


    isDeleted: {
        type: Boolean,
        default: false,
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

},
{
    timestamps: true,
});


purchaseSchema.index({
    purchaseNumber: 1,
});


purchaseSchema.index({
    supplier: 1,
});


purchaseSchema.index({
    status: 1,
});


purchaseSchema.index({
    isDeleted: 1,
});


module.exports = mongoose.model(
    "Purchase",
    purchaseSchema
);