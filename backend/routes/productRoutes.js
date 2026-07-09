const express = require("express");

const router = express.Router();

const productController = require("../controllers/productController");
const upload = require("../middleware/multer");

const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

// Create Product
router.post(
  "/",
  protect,
  authorize("super_admin", "branch_admin"),
  upload.single("image"),
  productController.createProduct
);

// Get All Products
router.get(
  "/",
  protect,
  productController.getAllProducts
);

// Upload Product Image
router.post(
  "/:id/images",
  protect,
  authorize("super_admin", "branch_admin"),
  upload.single("image"),
  productController.uploadImage
);

// Delete Product Image
router.delete(
  "/:id/images/:imageId",
  protect,
  authorize("super_admin", "branch_admin"),
  productController.deleteImage
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




// Adjust Product Stock
router.patch(
  "/:id/adjust-stock",
  protect,
  authorize("super_admin", "branch_admin"),
  productController.adjustStock
);


// Delete Product
router.delete(
  "/:id",
  protect,
 authorize("super_admin", "branch_admin"),
  productController.deleteProduct
);

module.exports = router;