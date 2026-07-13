// const express = require("express");

// const router = express.Router();

// const {
//   createPurchase,
//   getAllPurchases,
//   getPurchaseById,
//   updatePurchase,
//   receivePurchase,
//   deletePurchase,
// } = require("../controllers/purchaseController");

// const { protect } = require("../middleware/authMiddleware");
// const authorize = require("../middleware/authorize");

// // Get All Purchases
// router.get(
//   "/",
//   protect,
//   getAllPurchases
// );

// // Get Purchase By Id
// router.get(
//   "/:id",
//   protect,
//   getPurchaseById
// );

// // Create Purchase
// router.post(
//   "/",
//   protect,
//   authorize(
//     "super_admin",
//     "management_support"
//   ),
//   createPurchase
// );

// // Update Purchase
// router.put(
//   "/:id",
//   protect,
//   authorize(
//     "super_admin",
//     "management_support"
//   ),
//   updatePurchase
// );

// // Receive Purchase
// router.patch(
//   "/:id/receive",
//   protect,
//   authorize(
//     "super_admin",
//     "management_support",
//     "factory_admin"
//   ),
//   receivePurchase
// );

// // Delete Purchase
// router.delete(
//   "/:id",
//   protect,
//   authorize(
//     "super_admin",
//     "management_support"
//   ),
//   deletePurchase
// );

// module.exports = router;
// Create Purchase


const express = require("express");

const router = express.Router();


const {
  createPurchase,
  getAllPurchases,
  getPurchaseById,
  updatePurchase,
  receivePurchase,
  deletePurchase,
} = require("../controllers/purchaseController");


const { protect } = require("../middleware/authMiddleware");

const authorize = require("../middleware/authorize");



// Get All Purchases
router.get(
  "/",
  protect,
  getAllPurchases
);



// Get Purchase By Id
router.get(
  "/:id",
  protect,
  getPurchaseById
);



// Create Purchase
router.post(
  "/",
  protect,
  authorize(
    "super_admin",
    "factory_admin",
    "management_support"
  ),
  createPurchase
);



// Update Purchase
router.put(
  "/:id",
  protect,
  authorize(
    "super_admin",
    "factory_admin",
    "management_support"
  ),
  updatePurchase
);



// Receive Purchase
router.patch(
  "/:id/receive",
  protect,
  authorize(
    "super_admin",
    "factory_admin",
    "management_support"
  ),
  receivePurchase
);



// Delete Purchase
router.delete(
  "/:id",
  protect,
  authorize(
    "super_admin",
    "management_support"
  ),
  deletePurchase
);



module.exports = router;