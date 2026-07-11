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

// Super Admin Only
router.post("/", protect, authorize("super_admin"), createBranch);

// Logged-in Users
router.get("/", protect, getAllBranches);
router.get(
  "/factory/:factoryId",
  protect,
  getBranchesByFactory
);
router.get("/:id", protect, getBranchById);

// Super Admin Only
router.put("/:id", protect, authorize("super_admin"), updateBranch);
router.delete("/:id", protect, authorize("super_admin"), deleteBranch);


//some extra routes





module.exports = router;