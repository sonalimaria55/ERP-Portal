// const express = require("express");

// const { getAllUsers ,getUserById} = require("../controllers/userController");

// const { protect, authorize } = require("../middleware/authMiddleware");

// const router = express.Router();

// // Only Super Admin can view all users
// router.get("/", protect, authorize("super_admin"), getAllUsers);


// router.get("/:id", protect, authorize("super_admin"), getUserById);


// module.exports = router;


const express = require("express");

const router = express.Router();

const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  updateUserStatus,
  deleteUser,
} = require("../controllers/userController");

const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

// Only Super Admin can manage users

router.post(
  "/",
  protect,
  authorize("super_admin"),
  createUser
);

router.get(
  "/",
  protect,
  authorize("super_admin"),
  getAllUsers
);

router.get(
  "/:id",
  protect,
  authorize("super_admin"),
  getUserById
);

router.put(
  "/:id",
  protect,
  authorize("super_admin"),
  updateUser
);

router.patch(
  "/:id/status",
  protect,
  authorize("super_admin"),
  updateUserStatus
);

router.delete(
  "/:id",
  protect,
  authorize("super_admin"),
  deleteUser
);

module.exports = router;