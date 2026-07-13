const mongoose = require("mongoose");


const customerSchema =
new mongoose.Schema(
{

    customerCode:{
        type:String,
        unique:true,
        index:true,
    },


    customerName:{
        type:String,
        required:true,
        trim:true,
    },


    phone:{
        type:String,
        required:true,
    },


    email:{
        type:String,
        trim:true,
    },


    customerType:{
        type:String,
        enum:[
            "retail",
            "wholesale",
            "online"
        ],
        default:"retail",
    },


    gstNumber:{
        type:String,
        default:"",
    },


    address:{
        type:String,
        default:"",
    },


    city:{
        type:String,
        default:"",
    },


    state:{
        type:String,
        default:"",
    },


    pincode:{
        type:String,
        default:"",
    },


    creditLimit:{
        type:Number,
        default:0,
    },


    outstandingAmount:{
        type:Number,
        default:0,
    },


    loyaltyPoints:{
        type:Number,
        default:0,
    },


    isActive:{
        type:Boolean,
        default:true,
    }

},
{
timestamps:true
});


module.exports =
mongoose.model(
"Customer",
customerSchema
);