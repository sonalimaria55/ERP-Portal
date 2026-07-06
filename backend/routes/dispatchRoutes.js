

const express = require("express");
const router = express.Router();

const {
  createDispatch,
  updateDispatchStatus,
} = require("../controllers/dispatchController");

const { protect } = require("../middleware/authMiddleware");

// Create Dispatch
router.post("/", protect, createDispatch);

// Update Dispatch Status
router.put("/:id/status", protect, updateDispatchStatus);

module.exports = router;