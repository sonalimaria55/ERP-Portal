const mongoose = require("mongoose");


const invoiceItemSchema =
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


    price:{
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



const invoiceSchema =
new mongoose.Schema(
{

    invoiceNumber:{
        type:String,
        unique:true,
        index:true,
    },


    salesOrder:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"SalesOrder",
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


    branch:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Branch",
        required:true,
    },


    items:[
        invoiceItemSchema
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


    paymentStatus:{
        type:String,
        enum:[
            "unpaid",
            "partial",
            "paid"
        ],
        default:"unpaid",
    },


    paymentMode:{
        type:String,
        enum:[
            "cash",
            "card",
            "upi",
            "bank",
            "credit"
        ],
        default:"cash",
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
"Invoice",
invoiceSchema
);