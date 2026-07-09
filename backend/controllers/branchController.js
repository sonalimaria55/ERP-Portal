// const Branch = require("../models/Branch");
// const Factory = require("../models/Factory");
// // Create Branch
// const createBranch = async (req, res) => {
//   try {
//     const {
//        factory,
//       branchName,
//       branchCode,
//       manager,
//       email,
//       phone,
//       address,

//       city,
//       state,
//       pincode,
//     } = req.body;


// // Check Factory
// const factoryExists = await Factory.findById(factory);

// if (!factoryExists) {
//   return res.status(404).json({
//     success: false,
//     message: "Factory not found",
//   });
// }


//     // Check if branch code already exists
//     const existingBranch = await Branch.findOne({
//       $or: [{ branchName }, { branchCode }],
//     });

//     if (existingBranch) {
//       return res.status(400).json({
//         success: false,
//         message: "Branch name or code already exists",
//       });
//     }

//     const branch = await Branch.create({
//       branchName,
//       branchCode,
//       manager,
//       email,
//       phone,
//       address,
//       city,
//       state,
//       pincode,
//     });

//     res.status(201).json({
//       success: true,
//       message: "Branch created successfully",
//       branch,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // Get All Branches
// const getAllBranches = async (req, res) => {
//   try {
//     const branches = await Branch.find().populate(
//       "manager",
//       "name email phone"
//     );

//     res.status(200).json({
//       success: true,
//       count: branches.length,
//       branches,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // Get Single Branch
// const getBranchById = async (req, res) => {
//   try {
//     const branch = await Branch.findById(req.params.id).populate(
//       "manager",
//       "name email phone"
//     );

//     if (!branch) {
//       return res.status(404).json({
//         success: false,
//         message: "Branch not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       branch,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // Update Branch
// const updateBranch = async (req, res) => {
//   try {
//     const branch = await Branch.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       {
//         new: true,
//         runValidators: true,
//       }
//     );

//     if (!branch) {
//       return res.status(404).json({
//         success: false,
//         message: "Branch not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Branch updated successfully",
//       branch,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // Delete Branch
// const deleteBranch = async (req, res) => {
//   try {
//     const branch = await Branch.findById(req.params.id);

//     if (!branch) {
//       return res.status(404).json({
//         success: false,
//         message: "Branch not found",
//       });
//     }

//     await branch.deleteOne();

//     res.status(200).json({
//       success: true,
//       message: "Branch deleted successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// module.exports = {
//   createBranch,
//   getAllBranches,
//   getBranchById,
//   updateBranch,
//   deleteBranch,
// };
//------------------------
const Branch = require("../models/Branch");
const Factory = require("../models/Factory");
// Create Branch
const createBranch = async (req, res) => {
  try {
    const {
       factory,
      branchName,
      branchCode,
      manager,
      email,
      phone,
      address,

      city,
      state,
      pincode,
    } = req.body;


// Check Factory
const factoryExists = await Factory.findById(factory);

if (!factoryExists) {
  return res.status(404).json({
    success: false,
    message: "Factory not found",
  });
}


    // Check if branch code already exists
    const existingBranch = await Branch.findOne({
      $or: [{ branchName }, { branchCode }],
    });

    if (existingBranch) {
      return res.status(400).json({
        success: false,
        message: "Branch name or code already exists",
      });
    }

    const branch = await Branch.create({
      branchName,
      branchCode,
      manager,
      email,
      phone,
      address,
      city,
      state,
      pincode,
    });

    res.status(201).json({
      success: true,
      message: "Branch created successfully",
      branch,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Branches
const getAllBranches = async (req, res) => {
  try {
    const branches = await Branch.find().populate(
      "manager",
      "name email phone"
    );

    res.status(200).json({
      success: true,
      count: branches.length,
      branches,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Branch
const getBranchById = async (req, res) => {
  try {
    const branch = await Branch.findById(req.params.id).populate(
      "manager",
      "name email phone"
    );

    if (!branch) {
      return res.status(404).json({
        success: false,
        message: "Branch not found",
      });
    }

    res.status(200).json({
      success: true,
      branch,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Branch
const updateBranch = async (req, res) => {
  try {
    const branch = await Branch.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!branch) {
      return res.status(404).json({
        success: false,
        message: "Branch not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Branch updated successfully",
      branch,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Branch
const deleteBranch = async (req, res) => {
  try {
    const branch = await Branch.findById(req.params.id);

    if (!branch) {
      return res.status(404).json({
        success: false,
        message: "Branch not found",
      });
    }

    await branch.deleteOne();

    res.status(200).json({
      success: true,
      message: "Branch deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createBranch,
  getAllBranches,
  getBranchById,
  updateBranch,
  deleteBranch,
};