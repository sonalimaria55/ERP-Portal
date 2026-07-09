const Factory = require("../models/Factory");

// Create Factory
const createFactory = async (req, res) => {
  try {
    const {
      factoryName,
      factoryCode,
      email,
      phone,
      address,
      city,
      state,
      country,
      pincode,
      manager,
    } = req.body;

    const existingFactory = await Factory.findOne({
      $or: [{ factoryName }, { factoryCode }],
    });

    if (existingFactory) {
      return res.status(400).json({
        success: false,
        message: "Factory name or code already exists",
      });
    }

    const factory = await Factory.create({
      factoryName,
      factoryCode,
      email,
      phone,
      address,
      city,
      state,
      country,
      pincode,
      manager,
      createdBy: req.user?._id,
    });

    res.status(201).json({
      success: true,
      message: "Factory created successfully",
      factory,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Factories
const getAllFactories = async (req, res) => {
  try {
    const factories = await Factory.find()
.populate("manager", "name email phone")
.populate("createdBy", "name")
.populate("updatedBy", "name")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: factories.length,
      factories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Factory By ID
const getFactoryById = async (req, res) => {
  try {
    const factory = await Factory.findById(req.params.id)
      .populate("manager", "name email phone");

    if (!factory) {
      return res.status(404).json({
        success: false,
        message: "Factory not found",
      });
    }

    res.status(200).json({
      success: true,
      factory,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Factory
const updateFactory = async (req, res) => {
  try {
    const existingFactory = await Factory.findOne({
  _id: { $ne: req.params.id },
  $or: [
    { factoryName: req.body.factoryName },
    { factoryCode: req.body.factoryCode },
  ],
});

if (existingFactory) {
  return res.status(400).json({
    success: false,
    message: "Factory name or code already exists",
  });
}
    const factory = await Factory.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        updatedBy: req.user?._id,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!factory) {
      return res.status(404).json({
        success: false,
        message: "Factory not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Factory updated successfully",
      factory,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Factory
const deleteFactory = async (req, res) => {
  try {
    const factory = await Factory.findById(req.params.id);

    if (!factory) {
      return res.status(404).json({
        success: false,
        message: "Factory not found",
      });
    }

    await factory.deleteOne();

    res.status(200).json({
      success: true,
      message: "Factory deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createFactory,
  getAllFactories,
  getFactoryById,
  updateFactory,
  deleteFactory,
};