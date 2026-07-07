const express = require("express");

const router = express.Router();

const productController = require("../controllers/productController");

const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

// Create Product
router.post(
  "/",
  protect,
  authorize("super_admin", "branch_admin"),
  productController.createProduct
);

// Get All Products
router.get(
  "/",
  protect,
  productController.getAllProducts
);

// Get Product By Id
router.get(
  "/:id",
  protect,
  productController.getProductById
);

// Update Product
router.put(
  "/:id",
  protect,
  authorize("super_admin", "branch_admin"),
  productController.updateProduct
);

// Delete Product
router.delete(
  "/:id",
  protect,
  authorize("super_admin", "branch_admin"),
  
  productController.deleteProduct
);

module.exports = router;