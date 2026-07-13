const mongoose = require("mongoose");


const paymentSchema =
new mongoose.Schema(
{

    paymentNumber:{
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


    internalCustomer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"InternalCustomer",
        default:null,
    },


    amount:{
        type:Number,
        required:true,
        min:1,
    },


    paymentMode:{
        type:String,
        enum:[
            "cash",
            "upi",
            "card",
            "bank",
            "credit"
        ],
        required:true,
    },


    transactionReference:{
        type:String,
        trim:true,
    },


    paymentDate:{
        type:Date,
        default:Date.now,
    },


    status:{
        type:String,
        enum:[
            "success",
            "pending",
            "failed"
        ],
        default:"success",
    },


    receivedBy:{
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
"Payment",
paymentSchema
);