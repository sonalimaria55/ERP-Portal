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

    // Required fields
    if (!name || !email || !phone || !password || !role) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields.",
      });
    }

    // Check email
    const emailExists = await User.findOne({ email });

    if (emailExists) {
      return res.status(400).json({
        success: false,
        message: "Email already exists.",
      });
    }

    // Check phone
    const phoneExists = await User.findOne({ phone });

    if (phoneExists) {
      return res.status(400).json({
        success: false,
        message: "Phone number already exists.",
      });
    }

    // Role validations
    switch (role) {
      case "factory_admin":
        if (!factory) {
          return res.status(400).json({
            success: false,
            message: "Factory is required.",
          });
        }
        break;

      case "branch_admin":
      case "warehouse_manager":
      case "purchase_manager":
      case "online_manager":
      case "accounts_manager":
      case "delivery_manager":
      case "customer_support":
        if (!factory || !branch) {
          return res.status(400).json({
            success: false,
            message: "Factory and Branch are required.",
          });
        }
        break;

      case "sales_person":
        if (!factory || !branch || !counter) {
          return res.status(400).json({
            success: false,
            message: "Factory, Branch and Counter are required.",
          });
        }
        break;

      case "super_admin":
      default:
        break;
    }

    // Create user
    const user = await User.create({
      name,
      email,
      phone,
      password,
      role,
      factory: factory || null,
      branch: branch || null,
      counter: counter || null,
    });

    const createdUser = await User.findById(user._id)
      .select("-password")
      .populate("factory", "factoryName factoryCode")
      .populate("branch", "branchName branchCode")
      .populate("counter", "counterName counterCode");

    res.status(201).json({
      success: true,
      message: "User created successfully.",
      user: createdUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Get All Users
// ==============================
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
      .select("-password")
      .populate("factory", "factoryName factoryCode")
      .populate("branch", "branchName branchCode")
      .populate("counter", "counterName counterCode")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: users.length,
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Get User By ID
// ==============================
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .select("-password")
      .populate("factory", "factoryName factoryCode")
      .populate("branch", "branchName branchCode")
      .populate("counter", "counterName counterCode");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    )
      .select("-password")
      .populate("factory", "factoryName factoryCode")
      .populate("branch", "branchName branchCode")
      .populate("counter", "counterName counterCode");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "User updated successfully.",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const updateUserStatus = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    user.isActive = !user.isActive;

    await user.save();

    res.status(200).json({
      success: true,
      message: `User ${
        user.isActive ? "activated" : "deactivated"
      } successfully.`,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    await user.deleteOne();

    res.status(200).json({
      success: true,
      message: "User deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
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