// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: [true, "Name is required"],
//       trim: true,
//     },

//     email: {
//       type: String,
//       required: [true, "Email is required"],
//       unique: true,
//       lowercase: true,
//       trim: true,
//     },

//     phone: {
//       type: String,
//       required: [true, "Phone number is required"],
//       unique: true,
//       trim: true,
//     },

//     password: {
//       type: String,
//       required: [true, "Password is required"],
//       minlength: 6,
//       select: false,
//     },

//     // Factory
//     factory: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Factory",
//       default: null,
//     },

//     // Branch
//     branch: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Branch",
//       default: null,
//     },

//     // Counter
//     counter: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Counter",
//       default: null,
//     },

//     // User Role
//     role: {
//       type: String,
//       enum: [
//         "super_admin",
//         "factory_admin",
//         "branch_admin",
//         "sales_person",
//       ],
//       default: "sales_person",
//     },

//     isActive: {
//       type: Boolean,
//       default: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// // Hash password before saving
// userSchema.pre("save", async function () {
//   if (!this.isModified("password")) {
//     return;
//   }

//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });

// // Compare password
// userSchema.methods.comparePassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// module.exports = mongoose.model("User", userSchema);



//--------------------------------------------------------
// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: [true, "Name is required"],
//       trim: true,
//     },

//     email: {
//       type: String,
//       required: [true, "Email is required"],
//       unique: true,
//       lowercase: true,
//       trim: true,
//     },

//     phone: {
//       type: String,
//       required: [true, "Phone number is required"],
//       unique: true,
//       trim: true,
//     },

//     password: {
//       type: String,
//       required: [true, "Password is required"],
//       minlength: 6,
//       select: false,
//     },

//     // Factory
//     factory: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Factory",
//       default: null,
//     },

//     // Branch
//     branch: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Branch",
//       default: null,
//     },

//     // Counter
//     counter: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Counter",
//       default: null,
//     },

//     // User Role
//     role: {
//       type: String,
//       enum: [
//         "super_admin",
//         "hr_manager",
//         "factory_admin",
//         "branch_admin",
//         "warehouse_manager",
//         "purchase_manager",
//         "sales_person",
//         "online_manager",
//         "accounts_manager",
//         "delivery_manager",
//         "customer_support",
//       ],
//       default: "sales_person",
//     },

//     isActive: {
//       type: Boolean,
//       default: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// // Hash password before saving
// userSchema.pre("save", async function () {
//   if (!this.isModified("password")) return;

//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });

// // Compare password
// userSchema.methods.comparePassword = async function (enteredPassword) {
//   return bcrypt.compare(enteredPassword, this.password);
// };

// module.exports = mongoose.model("User", userSchema);

//----------------



//----------------------
// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");


// const userSchema = new mongoose.Schema(
// {
//     name:{
//         type:String,
//         required:true,
//     },

//     email:{
//         type:String,
//         required:true,
//         unique:true,
//     },

//     password:{
//         type:String,
//         required:true,
//     },

//     factory:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"Factory",
//         default:null,
//     },

//     branch:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"Branch",
//         default:null,
//     },

//     counter:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"Counter",
//         default:null,
//     },

//     role:{
//         type:String,
//         enum:[
//             "super_admin",
//             "factory_admin",
//             "branch_admin",
//             "warehouse_manager",
//             "purchase_manager",
//             "sales_person",
//             "online_manager",
//             "accounts_manager",
//             "delivery_manager",
//             "customer_support",
//         ],
//         default:"sales_person",
//     },

//     isActive:{
//         type:Boolean,
//         default:true,
//     }

// },
// {
//     timestamps:true
// });


// module.exports = mongoose.model(
//     "User",
//     userSchema
// );

//---------------------------
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const userSchema = new mongoose.Schema(
  {

    name: {
      type: String,
      required: true,
      trim: true,
    },


    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },


    phone: {
      type: String,
      trim: true,
      index: true,
    },


    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },


    // Future multi-location support

    factory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Factory",
      default: null,
    },


    branch: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch",
      default: null,
    },


    counter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Counter",
      default: null,
    },



    // Core ERP Roles

    role: {
      type: String,
      enum: [
        "super_admin",
        "factory_admin",
        "branch_admin",
        "sales_person",
        "management_support",
      ],
      default: "sales_person",
    },



    isActive: {
      type: Boolean,
      default: true,
    },



    lastLogin: {
      type: Date,
      default: null,
    },


  },

  {
    timestamps:true,
  }

);





// Hash Password

userSchema.pre(
  "save",
  async function(){

    if(!this.isModified("password")){
      return;
    }


    const salt =
      await bcrypt.genSalt(10);


    this.password =
      await bcrypt.hash(
        this.password,
        salt
      );


  }

);






// Compare Password

userSchema.methods.comparePassword =
async function(enteredPassword){

  return await bcrypt.compare(
    enteredPassword,
    this.password
  );

};






module.exports = mongoose.model(
  "User",
  userSchema
);