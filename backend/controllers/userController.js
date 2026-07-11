// const User = require("../models/User");

// // Get All Users
// const getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find().select("-password");

//     res.status(200).json({
//       success: true,
//       count: users.length,
//       users,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // Get User By ID
// const getUserById = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id).select("-password");

//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       user,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };


// module.exports = {
//   getAllUsers,getUserById,};


// const User = require("../models/User");

// // ==============================
// // Create User
// // ==============================
// const createUser = async (req, res) => {
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

//     // HR cannot create Super Admin
//     if (
//       req.user.role === "hr_manager" &&
//       role === "super_admin"
//     ) {
//       return res.status(403).json({
//         success: false,
//         message: "HR Manager cannot create Super Admin.",
//       });
//     }

//     // Required fields
//     if (!name || !email || !phone || !password || !role) {
//       return res.status(400).json({
//         success: false,
//         message: "Please provide all required fields.",
//       });
//     }

//     // Check email
//     const emailExists = await User.findOne({ email });

//     if (emailExists) {
//       return res.status(400).json({
//         success: false,
//         message: "Email already exists.",
//       });
//     }

//     // Check phone
//     const phoneExists = await User.findOne({ phone });

//     if (phoneExists) {
//       return res.status(400).json({
//         success: false,
//         message: "Phone number already exists.",
//       });
//     }

//     // Role validations
//     // Role validations

//     switch (role) {


//       case "factory_admin":

//         if (!factory) {

//           return res.status(400).json({
//             success: false,
//             message: "Factory is required for Factory Admin.",
//           });

//         }

//         break;



//       case "branch_admin":

//       case "management_support":

//         if (!factory || !branch) {

//           return res.status(400).json({
//             success: false,
//             message: "Factory and Branch are required.",
//           });

//         }

//         break;



//       case "sales_person":

//         if (!factory || !branch || !counter) {

//           return res.status(400).json({
//             success: false,
//             message: "Factory, Branch and Counter are required for Sales Person.",
//           });

//         }

//         break;



//       case "super_admin":

//         break;



//       default:

//         return res.status(400).json({
//           success: false,
//           message: "Invalid role selected.",
//         });

//     }


//     // Create user
//     const user = await User.create({
//       name,
//       email,
//       phone,
//       password,
//       role,
//       factory: factory || null,
//       branch: branch || null,
//       counter: counter || null,
//     });

//     const createdUser = await User.findById(user._id)
//       .select("-password")
//       .populate("factory", "factoryName factoryCode")
//       .populate("branch", "branchName branchCode")
//       .populate("counter", "counterName counterCode");

//     res.status(201).json({
//       success: true,
//       message: "User created successfully.",
//       user: createdUser,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };





// // ==============================
// // Get All Users
// // ==============================
// const getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find()
//       .select("-password")
//       .populate("factory", "factoryName factoryCode")
//       .populate("branch", "branchName branchCode")
//       .populate("counter", "counterName counterCode")
//       .sort({ createdAt: -1 });

//     res.status(200).json({
//       success: true,
//       count: users.length,
//       users,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // ==============================
// // Get User By ID
// // ==============================
// const getUserById = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id)
//       .select("-password")
//       .populate("factory", "factoryName factoryCode")
//       .populate("branch", "branchName branchCode")
//       .populate("counter", "counterName counterCode");

//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found.",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       user,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// const updateUser = async (req, res) => {
//   try {

//     // Find existing user
//     const existingUser = await User.findById(req.params.id);

//     if (!existingUser) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found.",
//       });
//     }

    

//     if (
//       existingUser.role === "super_admin" &&
//       req.user.role !== "super_admin"
//     ) {

//       return res.status(403).json({
//         success: false,
//         message: "Only Super Admin can edit Super Admin.",
//       });

//     }
//     {
//       return res.status(403).json({
//         success: false,
//         message: "Cannot edit Super Admin.",
//       });
//     }

//     const user = await User.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       {
//         new: true,
//         runValidators: true,
//       }
//     )
//       .select("-password")
//       .populate("factory", "factoryName factoryCode")
//       .populate("branch", "branchName branchCode")
//       .populate("counter", "counterName counterCode");

//     res.status(200).json({
//       success: true,
//       message: "User updated successfully.",
//       user,
//     });

//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
// const updateUserStatus = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found.",
//       });
//     }


//     if (
//       user.role === "super_admin" &&
//       req.user.role !== "super_admin"
//     ) {

//       return res.status(403).json({
//         success: false,
//         message: "Only Super Admin can change Super Admin status.",
//       });

//     }
//     {
//       return res.status(403).json({
//         success: false,
//         message: "Only Super Admin can create another Super Admin.",
//       });
//     }
//     {
//       return res.status(403).json({
//         success: false,
//         message: "Cannot change Super Admin status.",
//       });
//     }
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found.",
//       });
//     }

//     user.isActive = !user.isActive;

//     await user.save();

//     res.status(200).json({
//       success: true,
//       message: `User ${user.isActive ? "activated" : "deactivated"
//         } successfully.`,
//       user,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
// const deleteUser = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);

//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found.",
//       });
//     }

// if(
//  user.role==="super_admin" &&
//  req.user.role!=="super_admin"
// ){

// return res.status(403).json({
// success:false,
// message:"Only Super Admin can change Super Admin status.",
// });

// }{
//       return res.status(403).json({
//         success: false,
//         message: "Cannot delete Super Admin.",
//       });
//     }

//     await user.deleteOne();

//     res.status(200).json({
//       success: true,
//       message: "User deleted successfully.",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// module.exports = {
//   createUser,
//   getAllUsers,
//   getUserById,
//   updateUser,
//   updateUserStatus,
//   deleteUser,
// };

//-----------------------
const User = require("../models/User");


// ==============================
// Create User
// ==============================
const createUser = async (req, res) => {

  try {

    const {
      name,
      email,
      phone,
      password,
      role,
      factory,
      branch,
      counter,
    } = req.body;

console.log("CREATE USER BODY:", req.body);

    // Required fields
    if (!name || !email || !phone || !password || !role) {

      return res.status(400).json({
        success:false,
        message:"Please provide all required fields.",
      });

    }



    // Only Super Admin can create Super Admin

    if(
      role === "super_admin" &&
      req.user.role !== "super_admin"
    ){

      return res.status(403).json({
        success:false,
        message:"Only Super Admin can create another Super Admin.",
      });

    }



    // Check email

    const emailExists =
      await User.findOne({email});


    if(emailExists){

      return res.status(400).json({
        success:false,
        message:"Email already exists.",
      });

    }



    // Check phone

    const phoneExists =
      await User.findOne({phone});


    if(phoneExists){

      return res.status(400).json({
        success:false,
        message:"Phone number already exists.",
      });

    }





    // Role validation

    switch(role){


      case "factory_admin":

        if(!factory){

          return res.status(400).json({
            success:false,
            message:"Factory is required for Factory Admin.",
          });

        }

        break;



      case "branch_admin":

      case "management_support":

        if(!factory || !branch){

          return res.status(400).json({
            success:false,
            message:"Factory and Branch are required.",
          });

        }

        break;



      case "sales_person":

        if(!factory || !branch || !counter){

          return res.status(400).json({
            success:false,
            message:"Factory, Branch and Counter are required for Sales Person.",
          });

        }

        break;



      case "super_admin":

        break;



      default:

        return res.status(400).json({
          success:false,
          message:"Invalid role selected.",
        });

    }




    const user = await User.create({

      name,
      email,
      phone,
      password,
      role,

      factory:factory || null,
      branch:branch || null,
      counter:counter || null,

    });




    const createdUser =
      await User.findById(user._id)

      .select("-password")

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




    res.status(201).json({

      success:true,
      message:"User created successfully.",
      user:createdUser,

    });



  } catch(error){

    res.status(500).json({

      success:false,
      message:error.message,

    });

  }

};




// ==============================
// Get All Users
// ==============================

const getAllUsers = async(req,res)=>{

try{


const users =
await User.find()

.select("-password")

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
)

.sort({
createdAt:-1
});



res.status(200).json({

success:true,
count:users.length,
users,

});


}catch(error){

res.status(500).json({

success:false,
message:error.message,

});

}

};




// ==============================
// Get User By ID
// ==============================

const getUserById = async(req,res)=>{

try{


const user =
await User.findById(req.params.id)

.select("-password")

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

return res.status(404).json({

success:false,
message:"User not found.",

});

}



res.status(200).json({

success:true,
user,

});


}catch(error){

res.status(500).json({

success:false,
message:error.message,

});

}

};





// ==============================
// Update User
// ==============================

const updateUser = async(req,res)=>{

try{


const existingUser =
await User.findById(req.params.id);



if(!existingUser){

return res.status(404).json({

success:false,
message:"User not found.",

});

}




if(
existingUser.role==="super_admin" &&
req.user.role!=="super_admin"
){

return res.status(403).json({

success:false,
message:"Only Super Admin can edit Super Admin.",

});

}




const user =
await User.findByIdAndUpdate(

req.params.id,

req.body,

{
new:true,
runValidators:true,
}

)

.select("-password")

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



res.status(200).json({

success:true,
message:"User updated successfully.",
user,

});



}catch(error){

res.status(500).json({

success:false,
message:error.message,

});

}

};





// ==============================
// Update User Status
// ==============================

const updateUserStatus = async(req,res)=>{

try{


const user =
await User.findById(req.params.id);



if(!user){

return res.status(404).json({

success:false,
message:"User not found.",

});

}




if(
user.role==="super_admin" &&
req.user.role!=="super_admin"
){

return res.status(403).json({

success:false,
message:"Only Super Admin can change Super Admin status.",

});

}



user.isActive =
!user.isActive;



await user.save();



res.status(200).json({

success:true,

message:
`User ${user.isActive ? "activated":"deactivated"} successfully.`,

user,

});


}catch(error){

res.status(500).json({

success:false,
message:error.message,

});

}

};






// ==============================
// Delete User
// ==============================

const deleteUser = async(req,res)=>{

try{


const user =
await User.findById(req.params.id);



if(!user){

return res.status(404).json({

success:false,
message:"User not found.",

});

}




if(
user.role==="super_admin" &&
req.user.role!=="super_admin"
){

return res.status(403).json({

success:false,
message:"Only Super Admin can delete Super Admin.",

});

}



await user.deleteOne();



res.status(200).json({

success:true,
message:"User deleted successfully.",

});



}catch(error){

res.status(500).json({

success:false,
message:error.message,

});

}

};




module.exports = {

createUser,
getAllUsers,
getUserById,
updateUser,
updateUserStatus,
deleteUser,

};