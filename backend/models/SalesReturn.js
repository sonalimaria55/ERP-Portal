const mongoose = require("mongoose");


const returnItemSchema =
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
    },


    price:{
        type:Number,
        required:true,
    },


    reason:{
        type:String,
        trim:true,
    }

},
{
    _id:false
});



const salesReturnSchema =
new mongoose.Schema(
{

    returnNumber:{
        type:String,
        unique:true,
        index:true,
    },


    invoice:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Invoice",
        required:true,
    },


    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Customer",
        default:null,
    },


    branch:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Branch",
        required:true,
    },


    items:[
        returnItemSchema
    ],


    totalAmount:{
        type:Number,
        required:true,
    },


    status:{
        type:String,
        enum:[
            "pending",
            "approved",
            "rejected",
            "completed"
        ],
        default:"pending",
    },


    refundStatus:{
        type:String,
        enum:[
            "pending",
            "completed"
        ],
        default:"pending",
    },


    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },


    approvedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        default:null,
    }

},
{
timestamps:true
});


module.exports =
mongoose.model(
"SalesReturn",
salesReturnSchema
);