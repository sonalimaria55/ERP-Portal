const express = require("express");

const {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");

const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

const router = express.Router();

// Super Admin Only
router.post("/", protect, authorize("super_admin"), createCategory);
router.put("/:id", protect, authorize("super_admin"), updateCategory);
router.delete("/:id", protect, authorize("super_admin"), deleteCategory);

// Logged-in Users
router.get("/", protect, getAllCategories);
router.get("/:id", protect, getCategoryById);

module.exports = router;