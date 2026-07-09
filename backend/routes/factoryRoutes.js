const express = require("express");

const router = express.Router();

const {
  createFactory,
  getAllFactories,
  getFactoryById,
  updateFactory,
  deleteFactory,
} = require("../controllers/factoryController");

const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

// Only Super Admin can manage factories

router.post(
  "/",
  protect,
  authorize("super_admin"),
  createFactory
);

router.get(
  "/",
  protect,
  authorize("super_admin"),
  getAllFactories
);

router.get(
  "/:id",
  protect,
  authorize("super_admin"),
  getFactoryById
);

router.put(
  "/:id",
  protect,
  authorize("super_admin"),
  updateFactory
);

router.delete(
  "/:id",
  protect,
  authorize("super_admin"),
  deleteFactory
);

module.exports = router;