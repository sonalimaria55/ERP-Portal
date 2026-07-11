// const User = require("../models/User");
// const jwt = require("jsonwebtoken");

// // Generate JWT
// const generateToken = (
//   id,
//   role,
//   factory,
//   branch,
//   counter
// ) => {
//   return jwt.sign(
//     {
//       id,
//       role,
//       factory,
//       branch,
//       counter,
//     },
//     process.env.JWT_SECRET,
//     {
//       expiresIn: "7d",
//     }
//   );
// };

// // Register User
// const registerUser = async (req, res) => {
//   try {
//     const {
//       name,
//       email,
//       phone,
//       password,
//       role,
//       factory,
//       branch,
//       counter,
//     } = req.body;

//     // Check existing email
//     const emailExists = await User.findOne({ email });

//     if (emailExists) {
//       return res.status(400).json({
//         success: false,
//         message: "Email already exists",
//       });
//     }

//     // Check existing phone
//     const phoneExists = await User.findOne({ phone });

//     if (phoneExists) {
//       return res.status(400).json({
//         success: false,
//         message: "Phone number already exists",
//       });
//     }

//     const user = await User.create({
//       name,
//       email,
//       phone,
//       password,
//       role,
//       factory,
//       branch,
//       counter,
//     });

//     res.status(201).json({
//       success: true,
//       message: "User registered successfully",
//       token: generateToken(
//         user._id,
//         user.role,
//         user.factory,
//         user.branch,
//         user.counter
//       ),
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         phone: user.phone,
//         role: user.role,
//         factory: user.factory,
//         branch: user.branch,
//         counter: user.counter,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // Login User
// const loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email })
//       .select("+password")
//       .populate("factory", "factoryName factoryCode")
//       .populate("branch", "branchName branchCode")
//       .populate("counter", "counterName counterCode");

//     if (!user) {
//       return res.status(401).json({
//         success: false,
//         message: "Invalid email or password",
//       });
//     }

//     const isMatch = await user.comparePassword(password);

//     if (!isMatch) {
//       return res.status(401).json({
//         success: false,
//         message: "Invalid email or password",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Login successful",
//       token: generateToken(
//         user._id,
//         user.role,
//         user.factory?._id,
//         user.branch?._id,
//         user.counter?._id
//       ),
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         phone: user.phone,
//         role: user.role,
//         factory: user.factory,
//         branch: user.branch,
//         counter: user.counter,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // Get Logged In User
// const getProfile = async (req, res) => {
//   res.status(200).json({
//     success: true,
//     user: req.user,
//   });
// };

// // Change Password
// const changePassword = async (req, res) => {
//   try {
//     const { currentPassword, newPassword } = req.body;

//     const user = await User.findById(req.user._id).select("+password");

//     const isMatch = await user.comparePassword(currentPassword);

//     if (!isMatch) {
//       return res.status(400).json({
//         success: false,
//         message: "Current password is incorrect",
//       });
//     }

//     user.password = newPassword;

//     await user.save();

//     res.status(200).json({
//       success: true,
//       message: "Password changed successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// module.exports = {
//   registerUser,
//   loginUser,
//   getProfile,
//   changePassword,
// };

//---------------------------------------------------
const User = require("../models/User");
const jwt = require("jsonwebtoken");


// Generate JWT

const generateToken = (
  id,
  role,
  factory,
  branch,
  counter
) => {

  return jwt.sign(
    {
      id,
      role,
      factory,
      branch,
      counter,
    },

    process.env.JWT_SECRET,

    {
      expiresIn:"7d",
    }
  );

};




// Register User

const registerUser = async(req,res)=>{

try{


const {
  name,
  email,
  phone,
  password,
  role,
  factory,
  branch,
  counter,
}=req.body;



const emailExists =
await User.findOne({
  email:email.toLowerCase()
});


if(emailExists){

return res.status(400).json({

success:false,

message:"Email already exists"

});

}




const phoneExists =
await User.findOne({
 phone
});


if(phoneExists){

return res.status(400).json({

success:false,

message:"Phone number already exists"

});

}





const user = await User.create({

name,

email:email.toLowerCase(),

phone,

password,

role,

factory,

branch,

counter,

});





res.status(201).json({

success:true,

message:"User registered successfully",


user:{

id:user._id,

name:user.name,

email:user.email,

phone:user.phone,

role:user.role,

}

});



}
catch(error){

res.status(500).json({

success:false,

message:error.message

});

}


};









// Login User

const loginUser = async(req,res)=>{


try{


const {
email,
password
}=req.body;



const user =
await User.findOne({

email:email.toLowerCase()

})

.select("+password")

.populate(
"factory",
"factoryName factoryCode"
)

.populate(
"branch",
"branchName branchCode"
)

.populate(
"counter",
"counterName counterCode"
);






if(!user){

return res.status(401).json({

success:false,

message:"Invalid email or password"

});

}





if(!user.isActive){

return res.status(403).json({

success:false,

message:"Account inactive"

});

}





const isMatch =
await user.comparePassword(password);




if(!isMatch){

return res.status(401).json({

success:false,

message:"Invalid email or password"

});

}






user.lastLogin = new Date();

await user.save();






res.status(200).json({

success:true,

message:"Login successful",



token:generateToken(

user._id,

user.role,

user.factory?._id,

user.branch?._id,

user.counter?._id

),



user:{

id:user._id,

name:user.name,

email:user.email,

phone:user.phone,

role:user.role,

factory:user.factory,

branch:user.branch,

counter:user.counter,

}


});



}
catch(error){

res.status(500).json({

success:false,

message:error.message

});

}


};








// Get Logged In User

const getProfile = async(req,res)=>{


res.status(200).json({

success:true,

user:req.user

});


};







// Change Password

const changePassword = async(req,res)=>{


try{


const {
currentPassword,
newPassword
}=req.body;



const user =
await User.findById(req.user._id)
.select("+password");



const isMatch =
await user.comparePassword(
currentPassword
);



if(!isMatch){

return res.status(400).json({

success:false,

message:"Current password is incorrect"

});

}




user.password = newPassword;


await user.save();




res.status(200).json({

success:true,

message:"Password changed successfully"

});


}
catch(error){

res.status(500).json({

success:false,

message:error.message

});

}


};






module.exports = {

registerUser,

loginUser,

getProfile,

changePassword,

};