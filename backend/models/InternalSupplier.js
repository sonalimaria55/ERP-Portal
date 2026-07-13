const mongoose = require("mongoose");


const internalSupplierSchema = new mongoose.Schema(
{
    supplierCode:{
        type:String,
        unique:true,
        index:true,
    },


    supplierName:{
        type:String,
        required:true,
        trim:true,
    },


    type:{
        type:String,
        enum:[
            "factory",
            "branch",
            "department"
        ],
        required:true,
    },


    contactPerson:{
        type:String,
        trim:true,
    },


    phone:{
        type:String,
    },


    email:{
        type:String,
    },


    address:{
        type:String,
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


    isActive:{
        type:Boolean,
        default:true,
    }

},
{
    timestamps:true,
}
);


module.exports =
mongoose.model(
    "InternalSupplier",
    internalSupplierSchema
);