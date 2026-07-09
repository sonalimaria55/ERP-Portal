const express = require("express");

const router = express.Router();

const stockTransactionController = require("../controllers/stockTransactionController");

const {
  protect,
} = require("../middleware/authMiddleware");

// Get Product Stock History
router.get(
  "/product/:productId",
  protect,
  stockTransactionController.getProductTransactions
);

module.exports = router;