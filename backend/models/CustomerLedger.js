const mongoose = require("mongoose");


const customerLedgerSchema =
new mongoose.Schema(
{

customer:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Customer",
    required:true,
},


invoice:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Invoice",
    default:null,
},


payment:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"CustomerPayment",
    default:null,
},


transactionType:{
    type:String,
    enum:[
        "SALE",
        "PAYMENT",
        "RETURN",
        "ADJUSTMENT"
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
timestamps:true
});


module.exports =
mongoose.model(
"CustomerLedger",
customerLedgerSchema
);