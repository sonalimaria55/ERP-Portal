// const express = require("express");

// const {
//   createBranch,
//   getAllBranches,
//   getBranchById,
//   getBranchesByFactory,
//   updateBranch,
//   deleteBranch,
// } = require("../controllers/branchController");

// const {
//   protect,
//   authorize,
// } = require("../middleware/authMiddleware");

// const router = express.Router();

// // Super Admin Only
// router.post("/", protect, authorize("super_admin"), createBranch);

// // Logged-in Users
// router.get("/", protect, getAllBranches);
// router.get(
//   "/factory/:factoryId",
//   protect,
//   getBranchesByFactory
// );
// router.get("/:id", protect, getBranchById);

// // Super Admin Only
// router.put("/:id", protect, authorize("super_admin"), updateBranch);
// router.delete("/:id", protect, authorize("super_admin"), deleteBranch);


// //some extra routes





// module.exports = router;
//-----------------------------------------------------------------------------------------------------------------------------------------------

const express = require("express");

const {
  createBranch,
  getAllBranches,
  getBranchById,
  getBranchesByFactory,
  updateBranch,
  deleteBranch,
} = require("../controllers/branchController");

const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");


const router = express.Router();


// Create Branch
router.post(
  "/",
  protect,
  authorize(
    "super_admin",
    "factory_admin"
  ),
  createBranch
);


// Get All Branches
router.get("/",protect,getAllBranches);


// Get Factory Branches
router.get(
  "/factory/:factoryId",
  protect,
  getBranchesByFactory
);


// Get Single Branch
router.get(
  "/:id",
  protect,
  getBranchById
);


// Update Branch
router.put(
  "/:id",
  protect,
  authorize(
    "super_admin",
    "factory_admin"
  ),
  updateBranch
);


// Delete Branch
router.delete(
  "/:id",
  protect,
  authorize(
    "super_admin"
  ),
  deleteBranch
);


module.exports = router;
//-------------------------------------------------------------------------------------------------------

// // Assign Branch Manager
// router.put(
//  "/:id/assign-manager",
//  protect,
//  authorize("super_admin","factory_admin"),
//  assignBranchManager
// );


// // Activate / Deactivate Branch
// router.put(
//  "/:id/status",
//  protect,
//  authorize("super_admin"),
//  updateBranchStatus
// );


// // Branch Dashboard
// router.get(
//  "/:id/dashboard",
//  protect,
//  authorize(
//    "super_admin",
//    "factory_admin",
//    "branch_admin"
//  ),
//  getBranchDashboard
// );