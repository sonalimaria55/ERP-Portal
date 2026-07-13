const mongoose = require("mongoose");


const purchaseItemSchema =
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


purchasePrice:{
    type:Number,
    required:true,
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



const purchaseOrderSchema =
new mongoose.Schema(
{

purchaseNumber:{
    type:String,
    unique:true,
    index:true,
},


supplier:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Supplier",
    default:null,
},


internalSupplier:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"InternalSupplier",
    default:null,
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



items:[
    purchaseItemSchema
],



subtotal:{
    type:Number,
    default:0,
},


gstAmount:{
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
        "ordered",
        "received",
        "cancelled"
    ],
    default:"draft",
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
"PurchaseOrder",
purchaseOrderSchema
);