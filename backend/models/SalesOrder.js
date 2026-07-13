const mongoose = require("mongoose");


const salesOrderItemSchema =
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


discount:{
    type:Number,
    default:0,
},


gst:{
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



const salesOrderSchema =
new mongoose.Schema(
{

orderNumber:{
    type:String,
    unique:true,
    index:true,
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


branch:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Branch",
    required:true,
},


items:[
    salesOrderItemSchema
],



subtotal:{
    type:Number,
    default:0,
},


taxAmount:{
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



status:{
    type:String,
    enum:[
        "draft",
        "confirmed",
        "cancelled",
        "completed"
    ],
    default:"draft",
},



paymentStatus:{
    type:String,
    enum:[
        "pending",
        "partial",
        "paid"
    ],
    default:"pending",
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
"SalesOrder",
salesOrderSchema
);