const mongoose = require("mongoose");


const internalTransferItemSchema =
new mongoose.Schema(
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
    }

},
{
    _id:false
});



const internalTransferSchema =
new mongoose.Schema(
{

    transferCode:{
        type:String,
        unique:true,
        index:true,
    },


    fromBranch:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Branch",
        default:null,
    },


    fromFactory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Factory",
        default:null,
    },


    toBranch:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Branch",
        default:null,
    },


    status:{
        type:String,
        enum:[
            "pending",
            "approved",
            "in_transit",
            "completed",
            "cancelled"
        ],
        default:"pending",
    },


    items:[
        internalTransferItemSchema
    ],


    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },


    approvedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        default:null,
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
"InternalTransfer",
internalTransferSchema
);