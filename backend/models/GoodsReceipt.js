const mongoose = require("mongoose");


const grnItemSchema =
new mongoose.Schema(
{
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true,
    },


    orderedQuantity:{
        type:Number,
        required:true,
    },


    receivedQuantity:{
        type:Number,
        required:true,
    },


    rejectedQuantity:{
        type:Number,
        default:0,
    },


    purchasePrice:{
        type:Number,
        required:true,
    }

},
{
    _id:false
});



const goodsReceiptSchema =
new mongoose.Schema(
{

    grnNumber:{
        type:String,
        unique:true,
        index:true,
    },


    purchase:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Purchase",
        required:true,
    },


    supplier:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Supplier",
        required:true,
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
        grnItemSchema
    ],


    status:{
        type:String,
        enum:[
            "Draft",
            "Completed",
            "Cancelled"
        ],
        default:"Draft",
    },


    remarks:{
        type:String,
        default:"",
    },


    receivedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },


    receivedDate:{
        type:Date,
        default:Date.now,
    }

},
{
timestamps:true
});


module.exports =
mongoose.model(
"GoodsReceipt",
goodsReceiptSchema
);