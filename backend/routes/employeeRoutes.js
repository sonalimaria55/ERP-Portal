// const express = require("express");

// const {
//   createEmployee,
//   getEmployees,
//   getEmployeeById,
//   updateEmployee,
//   deleteEmployee,
//   searchEmployees,
// } = require("../controllers/employeeController");

// const {
//   protect,
//   authorize,
// } = require("../middleware/authMiddleware");

// const router = express.Router();



// // Search

// router.get(
//   "/search",
//   protect,
//   authorize(
//     "super_admin",
//     "management_support"
//   ),
//   searchEmployees
// );



// // Get All Employees

// router.get(
//   "/",
//   protect,
//   authorize(
//     "super_admin",
//     "management_support"
//   ),
//   getEmployees
// );



// // Get Single Employee

// router.get(
//   "/:id",
//   protect,
//   authorize(
//     "super_admin",
//     "management_support"
//   ),
//   getEmployeeById
// );



// // Create Employee

// router.post(
//   "/",
//   protect,
//   authorize(
//     "super_admin",
//     "management_support"
//   ),
//   createEmployee
// );



// // Update Employee

// router.put(
//   "/:id",
//   protect,
//   authorize(
//     "super_admin",
//     "management_support"
//   ),
//   updateEmployee
// );



// // Delete Employee

// router.delete(
//   "/:id",
//   protect,
//   authorize(
//     "super_admin",
//     "management_support"
//   ),
//   deleteEmployee
// );

// module.exports = router;
const express = require("express");

const router = express.Router();

const {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  searchEmployees,
} = require("../controllers/employeeController");

const { protect, authorize } = require("../middleware/authMiddleware");

// ======================================
// Employee Routes
// ======================================

// Create Employee
router.post(
  "/",
  protect,
  authorize("super_admin", "management_support"),
  createEmployee
);

// Get All Employees
router.get(
  "/",
  protect,
  getEmployees
);

// Search Employees
router.get(
  "/search",
  protect,
  searchEmployees
);

// Get Employee By ID
router.get(
  "/:id",
  protect,
  getEmployeeById
);

// Update Employee
router.put(
  "/:id",
  protect,
  authorize("super_admin", "management_support"),
  updateEmployee
);

// Delete Employee
router.delete(
  "/:id",
  protect,
  authorize("super_admin", "management_support"),
  deleteEmployee
);

module.exports = router;