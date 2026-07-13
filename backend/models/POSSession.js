const mongoose = require("mongoose");


const posSessionSchema =
new mongoose.Schema(
{

    sessionNumber:{
        type:String,
        unique:true,
        index:true,
    },


    branch:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Branch",
        required:true,
    },


    counter:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Counter",
        default:null,
    },


    cashier:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },


    openingCash:{
        type:Number,
        default:0,
    },


    closingCash:{
        type:Number,
        default:0,
    },


    status:{
        type:String,
        enum:[
            "open",
            "closed"
        ],
        default:"open",
    },


    openedAt:{
        type:Date,
        default:Date.now,
    },


    closedAt:{
        type:Date,
    }


},
{
timestamps:true
});


module.exports =
mongoose.model(
"POSSession",
posSessionSchema
);