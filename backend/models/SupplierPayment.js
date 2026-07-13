const mongoose = require("mongoose");

const supplierPaymentSchema = new mongoose.Schema(
{
    paymentNumber:{
        type:String,
        unique:true,
        required:true,
    },

    supplier:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Supplier",
        required:true,
    },

    factory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Factory",
        default:null,
    },

    branch:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Branch",
        default:null,
    },

    paymentDate:{
        type:Date,
        default:Date.now,
    },

    paymentMethod:{
        type:String,
        enum:[
            "Cash",
            "Bank Transfer",
            "Cheque",
            "UPI",
            "NEFT",
            "RTGS",
        ],
        required:true,
    },

    amount:{
        type:Number,
        required:true,
        min:1,
    },

    referenceNumber:{
        type:String,
        default:"",
    },

    remarks:{
        type:String,
        default:"",
    },

    status:{
        type:String,
        enum:[
            "Pending",
            "Completed",
            "Cancelled",
        ],
        default:"Completed",
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
    "SupplierPayment",
    supplierPaymentSchema
);