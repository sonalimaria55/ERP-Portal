const express = require("express");

const {
  createInventory,
  getAllInventory,
  getInventoryById,
  updateInventory,
  deleteInventory,
} = require("../controllers/inventoryController");

const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

const router = express.Router();

// Super Admin
router.post("/", protect, authorize("super_admin"), createInventory);
router.put("/:id", protect, authorize("super_admin"), updateInventory);
router.delete("/:id", protect, authorize("super_admin"), deleteInventory);

// Logged In Users
router.get("/", protect, getAllInventory);
router.get("/:id", protect, getInventoryById);

module.exports = router;