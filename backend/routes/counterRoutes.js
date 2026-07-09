const express = require("express");

const router = express.Router();

const {
  createCounter,
  getAllCounters,
  getCounterById,
  updateCounter,
  deleteCounter,
} = require("../controllers/counterController");

const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

// Super Admin & Factory Admin can manage counters

router.post(
  "/",
  protect,
  authorize("super_admin", "factory_admin"),
  createCounter
);

router.get(
  "/",
  protect,
  authorize("super_admin", "factory_admin", "branch_admin"),
  getAllCounters
);

router.get(
  "/:id",
  protect,
  authorize("super_admin", "factory_admin", "branch_admin"),
  getCounterById
);

router.put(
  "/:id",
  protect,
  authorize("super_admin", "factory_admin"),
  updateCounter
);

router.delete(
  "/:id",
  protect,
  authorize("super_admin", "factory_admin"),
  deleteCounter
);

module.exports = router;