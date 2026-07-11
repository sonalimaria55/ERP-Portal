// const express = require("express");

// const router = express.Router();

// const {
//   createCounter,
//   getAllCounters,
//   getCounterById,
//   getCountersByBranch,
//   updateCounter,
//   deleteCounter,
// } = require("../controllers/counterController");

// const {
//   protect,
//   authorize,
// } = require("../middleware/authMiddleware");

// // Super Admin & Factory Admin can manage counters

// router.post(
//   "/",
//   protect,
//   authorize("super_admin", "factory_admin"),
//   createCounter
// );

// router.get(
//   "/",
//   protect,
//   authorize("super_admin", "factory_admin", "branch_admin"),
//   getAllCounters
// );



// router.get(
//   "/:id",
//   protect,
//   authorize("super_admin", "factory_admin", "branch_admin"),
//   getCounterById
// );

// router.put(
//   "/:id",
//   protect,
//   authorize("super_admin", "factory_admin"),
//   updateCounter
// );

// router.delete(
//   "/:id",
//   protect,
//   authorize("super_admin", "factory_admin"),
//   deleteCounter
// );


// router.get("/branch/:branchId",protect,getCountersByBranch
// );


// module.exports = router;

const express = require("express");

const router = express.Router();

const {
  createCounter,
  getAllCounters,
  getCounterById,
  getCountersByBranch,
  updateCounter,
  deleteCounter,
} = require("../controllers/counterController");

const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

// Create Counter
router.post(
  "/",
  protect,
  authorize("super_admin", "factory_admin"),
  createCounter
);

// Get All Counters
router.get(
  "/",
  protect,
  authorize("super_admin", "factory_admin", "branch_admin"),
  getAllCounters
);

// Get Counters By Branch
router.get(
  "/branch/:branchId",
  protect,
  getCountersByBranch
);

// Get Counter By Id
router.get(
  "/:id",
  protect,
  authorize("super_admin", "factory_admin", "branch_admin"),
  getCounterById
);

// Update Counter
router.put(
  "/:id",
  protect,
  authorize("super_admin", "factory_admin"),
  updateCounter
);

// Delete Counter
router.delete(
  "/:id",
  protect,
  authorize("super_admin", "factory_admin"),
  deleteCounter
);

module.exports = router;