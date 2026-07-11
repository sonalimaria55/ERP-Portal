const Counter = require("../models/Counter");
const Factory = require("../models/Factory");
const Branch = require("../models/Branch");

// Create Counter
const createCounter = async (req, res) => {
  try {
    const {
      counterName,
      counterCode,
      factory,
      branch,
    } = req.body;

    // Check Factory
    const factoryExists = await Factory.findById(factory);

    if (!factoryExists) {
      return res.status(404).json({
        success: false,
        message: "Factory not found",
      });
    }

    // Check Branch
    const branchExists = await Branch.findById(branch);

    if (!branchExists) {
      return res.status(404).json({
        success: false,
        message: "Branch not found",
      });
    }

    // Check Duplicate Counter Code
    const existingCounter = await Counter.findOne({
      counterCode,
    });

    if (existingCounter) {
      return res.status(400).json({
        success: false,
        message: "Counter code already exists",
      });
    }

    const counter = await Counter.create({
      counterName,
      counterCode,
      factory,
      branch,
    });

    res.status(201).json({
      success: true,
      message: "Counter created successfully",
      counter,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Counters
const getAllCounters = async (req, res) => {
  try {
    const counters = await Counter.find()
      .populate("factory", "factoryName factoryCode")
      .populate("branch", "branchName branchCode");

    res.status(200).json({
      success: true,
      count: counters.length,
      counters,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Counters By Branch
const getCountersByBranch = async (req, res) => {
  try {
    const counters = await Counter.find({
      branch: req.params.branchId,
      isActive: true,
    })
      .populate("factory", "factoryName factoryCode")
      .populate("branch", "branchName branchCode")
      .sort({ counterName: 1 });

    res.status(200).json({
      success: true,
      count: counters.length,
      counters,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// Get Counter By ID
const getCounterById = async (req, res) => {
  try {
    const counter = await Counter.findById(req.params.id)
      .populate("factory", "factoryName factoryCode")
      .populate("branch", "branchName branchCode");

    if (!counter) {
      return res.status(404).json({
        success: false,
        message: "Counter not found",
      });
    }

    res.status(200).json({
      success: true,
      counter,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Counter
const updateCounter = async (req, res) => {
  try {
    const counter = await Counter.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!counter) {
      return res.status(404).json({
        success: false,
        message: "Counter not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Counter updated successfully",
      counter,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Counter
const deleteCounter = async (req, res) => {
  try {
    const counter = await Counter.findById(req.params.id);

    if (!counter) {
      return res.status(404).json({
        success: false,
        message: "Counter not found",
      });
    }

    await counter.deleteOne();

    res.status(200).json({
      success: true,
      message: "Counter deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createCounter,
  getAllCounters,
  getCountersByBranch,
  getCounterById,
  updateCounter,
  deleteCounter,
};