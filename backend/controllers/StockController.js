const Product = require("../models/Product");
const StockHistory = require("../models/StockHistory");

// Adjust Stock
const adjustStock = async (req, res) => {
  try {
    const { productId } = req.params;
    const { quantity, remarks } = req.body;

    if (!quantity || quantity === 0) {
      return res.status(400).json({
        success: false,
        message: "Quantity is required.",
      });
    }

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    const newStock = product.currentStock + Number(quantity);

    if (newStock < 0) {
      return res.status(400).json({
        success: false,
        message: "Insufficient stock.",
      });
    }

    product.currentStock = newStock;
    await product.save();

    await StockHistory.create({
      product: product._id,
      quantity: Number(quantity),
      remarks,
      updatedBy: req.user.id, // From auth middleware
    });

    res.status(200).json({
      success: true,
      message: "Stock updated successfully.",
      currentStock: product.currentStock,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to update stock.",
    });
  }
};

// Get Stock History
const getStockHistory = async (req, res) => {
  try {
    const { productId } = req.params;

    const history = await StockHistory.find({
      product: productId,
    })
      .populate("updatedBy", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      history,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch stock history.",
    });
  }
};

module.exports = {
  adjustStock,
  getStockHistory,
};