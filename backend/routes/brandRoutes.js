const express = require("express");

const router = express.Router();

const {
  createBrand,
  getBrands,
  getBrandById,
  updateBrand,
  deleteBrand,
} = require("../controllers/brandController");


const { protect } = require("../middleware/authMiddleware");
const authorize = require("../middleware/authorize");


// Get all brands
router.get(
  "/",
  protect,
  getBrands
);


// Get brand by id
router.get(
  "/:id",
  protect,
  getBrandById
);


// Create brand
router.post(
  "/",
  protect,
  authorize(
    "super_admin",
    "management_support"
  ),
  createBrand
);


// Update brand
router.put(
  "/:id",
  protect,
  authorize(
    "super_admin",
    "management_support"
  ),
  updateBrand
);


// Delete brand
router.delete(
  "/:id",
  protect,
  authorize(
    "super_admin",
    "management_support"
  ),
  deleteBrand
);


module.exports = router;