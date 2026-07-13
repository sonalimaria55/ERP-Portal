const mongoose = require("mongoose");

const supplierLedgerSchema = new mongoose.Schema(
{
    supplier:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Supplier",
        required:true,
    },

    purchase:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Purchase",
        default:null,
    },

    purchaseReturn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"PurchaseReturn",
        default:null,
    },

    payment:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"SupplierPayment",
        default:null,
    },

    transactionDate:{
        type:Date,
        default:Date.now,
    },

    transactionType:{
        type:String,
        enum:[
            "Purchase",
            "Purchase Return",
            "Payment",
            "Adjustment",
        ],
        required:true,
    },

    debit:{
        type:Number,
        default:0,
    },

    credit:{
        type:Number,
        default:0,
    },

    balance:{
        type:Number,
        default:0,
    },

    remarks:{
        type:String,
        default:"",
    },

    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },

},
{
    timestamps:true,
});

module.exports = mongoose.model(
    "SupplierLedger",
    supplierLedgerSchema
);