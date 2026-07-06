const express = require("express");

const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

const router = express.Router();

// Super Admin
router.post("/", protect, authorize("super_admin"), createProduct);
router.put("/:id", protect, authorize("super_admin"), updateProduct);
router.delete("/:id", protect, authorize("super_admin"), deleteProduct);

// Logged In Users
router.get("/", protect, getAllProducts);
router.get("/:id", protect, getProductById);

module.exports = router;