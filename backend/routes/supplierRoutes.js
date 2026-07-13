// const express = require("express");

// const router = express.Router();


// const {
//     createSupplier,
//     getAllSuppliers,
//     getSupplierById,
//     updateSupplier,
//     deleteSupplier,
// } = require("../controllers/supplierController");


// const { protect } = require("../middleware/authMiddleware");

// const authorize = require("../middleware/authorize");



// // Get All Suppliers
// router.get(
//     "/",
//     protect,
//     getAllSuppliers
// );



// // Get Supplier By Id
// router.get(
//     "/:id",
//     protect,
//     getSupplierById
// );



// // Create Supplier
// router.post(
//     "/",
//     protect,
//     authorize(
//         "super_admin",
//         "factory_admin",
//         "management_support"
//     ),
//     createSupplier
// );



// // Update Supplier
// router.put(
//     "/:id",
//     protect,
//     authorize(
//         "super_admin",
//         "factory_admin",
//         "management_support"
//     ),
//     updateSupplier
// );



// // Delete Supplier
// router.delete(
//     "/:id",
//     protect,
//     authorize(
//         "super_admin",
//         "management_support"
//     ),
//     deleteSupplier
// );



// module.exports = router;
const express = require("express");

const router = express.Router();

const {
  createSupplier,
  getSuppliers,
  getSupplierById,
  updateSupplier,
  deleteSupplier,
} = require("../controllers/supplierController");

const { protect } = require("../middleware/authMiddleware");
const authorize = require("../middleware/authorize");


// Create Supplier
router.post(
  "/",
  protect,
  authorize(
    "super_admin",
    "management_support",
    "factory_admin"
  ),
  createSupplier
);


// Get All Suppliers
router.get(
  "/",
  protect,
  authorize(
    "super_admin",
    "management_support",
    "factory_admin"
  ),
  getSuppliers
);


// Get Supplier By ID
router.get(
  "/:id",
  protect,
  authorize(
    "super_admin",
    "management_support",
    "factory_admin"
  ),
  getSupplierById
);


// Update Supplier
router.put(
  "/:id",
  protect,
  authorize(
    "super_admin",
    "management_support",
    "factory_admin"
  ),
  updateSupplier
);


// Delete Supplier
router.delete(
  "/:id",
  protect,
  authorize(
    "super_admin",
    "management_support",
    "factory_admin"
  ),
  deleteSupplier
);

module.exports = router;