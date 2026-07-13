const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        // Auto Generated (PRD000001, PRD000002...)
        productCode: {
            type: String,
            required: true,
            unique: true,
            uppercase: true,
            trim: true,
        },

        productName: {
            type: String,
            required: [true, "Product name is required"],
            trim: true,
        },

        sku: {
            type: String,
            required: [true, "SKU is required"],
            unique: true,
            uppercase: true,
            trim: true,

        },

        barcode: {
            type: String,
            trim: true,
            unique: true,
            sparse: true,
            default: "",
        },

        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: [true, "Category is required"],
        },

        brand: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Brand",
            default: null,
        },

        unit: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Unit",
            required: true,
        },

        description: {
            type: String,
            trim: true,
            default: "",
        },

        purchasePrice: {
            type: Number,
            required: [true, "Purchase price is required"],
            min: 0,
        },

        sellingPrice: {
            type: Number,
            required: [true, "Selling price is required"],
            min: 0,
        },

      
        tax: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Tax",
        },

        discount: {
            type: Number,
            default: 0,
            min: 0,
            max: 100,
        },

        initialStock: {
            type: Number,
            default: 0,
            min: 0,
        },

        currentStock: {
            type: Number,
            default: 0,
            min: 0,
        },

        reorderLevel: {
            type: Number,
            default: 5,
            min: 0,
        },

        maximumStock: {
            type: Number,
            default: 0,
            min: 0,
        },

        warehouse: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Warehouse",
            default: null,
        },

        trackInventory: {
            type: Boolean,
            default: true,
        },

        allowNegativeStock: {
            type: Boolean,
            default: false,
        },

        images: [
            {
                url: {
                    type: String,
                    default: "",
                },
                publicId: {
                    type: String,
                    default: "",
                },
            },
        ],

        status: {
            type: String,
            enum: ["Active", "Inactive"],
            default: "Active",
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
    }
);

// Database Indexes
// productSchema.index({ productCode: 1 });
productSchema.index({ productName: 1 });

productSchema.index({ category: 1 });
productSchema.index({ status: 1 });
productSchema.index({ isDeleted: 1 });
module.exports = mongoose.model("Product", productSchema);