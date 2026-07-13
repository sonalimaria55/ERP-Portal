const mongoose=require("mongoose");


const posItemSchema =
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
},


sellingPrice:{
    type:Number,
    required:true,
},


gst:{
    type:Number,
    default:0,
},


discount:{
    type:Number,
    default:0,
},


total:{
    type:Number,
    required:true,
}

},
{
_id:false
});



const posBillSchema =
new mongoose.Schema(
{

billNumber:{
    type:String,
    unique:true,
    index:true,
},


session:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"POSSession",
    required:true,
},


branch:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Branch",
    required:true,
},


customer:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Customer",
    default:null,
},


items:[
    posItemSchema
],


subtotal:{
    type:Number,
    default:0,
},


gstAmount:{
    type:Number,
    default:0,
},


discountAmount:{
    type:Number,
    default:0,
},


grandTotal:{
    type:Number,
    required:true,
},


paymentMode:{
    type:String,
    enum:[
        "cash",
        "upi",
        "card",
        "credit"
    ],
    default:"cash",
},


status:{
    type:String,
    enum:[
        "completed",
        "cancelled"
    ],
    default:"completed",
},


createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
}


},
{
timestamps:true
});


module.exports =
mongoose.model(
"POSBill",
posBillSchema
);