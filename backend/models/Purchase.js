const mongoose = require("mongoose");


const purchaseItemSchema = new mongoose.Schema(
{
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },


    quantity: {
        type: Number,
        required: true,
        min: 1,
    },


    purchasePrice: {
        type: Number,
        required: true,
        min: 0,
    },


    tax: {
        type: Number,
        default: 0,
    },


    discount: {
        type: Number,
        default: 0,
    },


    total: {
        type: Number,
        default: 0,
    },

},
{
    _id:false,
}
);



const purchaseSchema = new mongoose.Schema(
{

    purchaseNumber:{
        type:String,
        required:true,
        unique:true,
        uppercase:true,
        trim:true,
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


    purchaseDate:{
        type:Date,
        default:Date.now,
    },


    expectedDeliveryDate:{
        type:Date,
        default:null,
    },


    items:{
        type:[purchaseItemSchema],

        validate:{
            validator:(items)=>items.length>0,

            message:
            "At least one item is required.",
        },
    },


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
        default:0,
    },


    status:{
        type:String,

        enum:[
            "Draft",
            "Ordered",
            "Partially Received",
            "Received",
            "Cancelled",
        ],

        default:"Draft",
    },


    remarks:{
        type:String,
        trim:true,
        default:"",
    },


    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },


    updatedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        default:null,
    },


    receivedAt:{
        type:Date,
        default:null,
    },


},
{
    timestamps:true,
}
);






purchaseSchema.index({
    supplier:1,
});


purchaseSchema.index({
    status:1,
});


purchaseSchema.index({
    purchaseDate:-1,
});



module.exports = mongoose.model(
    "Purchase",
    purchaseSchema
);