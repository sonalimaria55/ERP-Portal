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



router.post(
  "/",
  protect,
  authorize(  "super_admin",
    "factory_admin",
    "management_support"),
  createFactory
);

router.get(
  "/",
  protect,
  authorize(  "super_admin",
    "factory_admin",
    "management_support"),
  getAllFactories
);

router.get(
  "/:id",
  protect,
  authorize(  "super_admin",
    "factory_admin",
    "management_support"),
  getFactoryById
);

router.put(
  "/:id",
  protect,
  authorize(  "super_admin",
    "factory_admin",
    "management_support"),
  updateFactory
);

router.delete(
  "/:id",
  protect,
  authorize(  "super_admin",
    "factory_admin",
    "management_support"),
  deleteFactory
);

module.exports = router;