const mongoose = require("mongoose");

const purchaseReturnItemSchema = new mongoose.Schema(
{
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true,
    },

    quantity:{
        type:Number,
        required:true,
        min:1,
    },

    purchasePrice:{
        type:Number,
        required:true,
    },

    reason:{
        type:String,
        default:"",
    },
},
{
    _id:false,
});

const purchaseReturnSchema = new mongoose.Schema(
{
    returnNumber:{
        type:String,
        unique:true,
        required:true,
    },

    purchase:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Purchase",
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
    },

    items:[purchaseReturnItemSchema],

    totalAmount:{
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
    "PurchaseReturn",
    purchaseReturnSchema
);