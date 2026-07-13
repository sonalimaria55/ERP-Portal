const mongoose = require("mongoose");


const stockLedgerSchema =
new mongoose.Schema(
{

    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true,
    },


    branch:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Branch",
        default:null,
    },


    factory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Factory",
        default:null,
    },


    transactionType:{
        type:String,
        enum:[
            "purchase",
            "purchase_return",
            "internal_transfer_in",
            "internal_transfer_out",
            "sale",
            "sale_return",
            "adjustment"
        ],
        required:true,
    },


    referenceType:{
        type:String,
        enum:[
            "Purchase",
            "InternalTransfer",
            "Sale",
            "Return",
            "Manual"
        ],
    },


    referenceId:{
        type:mongoose.Schema.Types.ObjectId,
    },


    quantity:{
        type:Number,
        required:true,
    },


    balanceAfter:{
        type:Number,
        required:true,
    },


    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },


    remarks:{
        type:String,
        trim:true,
    }

},
{
    timestamps:true
});


module.exports =
mongoose.model(
"StockLedger",
stockLedgerSchema
);