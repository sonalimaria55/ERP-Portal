const express = require("express");

const { getAllUsers ,getUserById} = require("../controllers/userController");

const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

// Only Super Admin can view all users
router.get("/", protect, authorize("super_admin"), getAllUsers);


router.get("/:id", protect, authorize("super_admin"), getUserById);


module.exports = router;