const brandService = require("../services/brandService");


// Create Brand
const createBrand = async (req, res) => {
  try {

    const brand = await brandService.createBrand(
      req.body,
      req.user._id
    );

    res.status(201).json({
      success: true,
      message: "Brand created successfully",
      data: brand,
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message,
    });

  }
};


// Get All Brands
const getBrands = async (req, res) => {
  try {

    const brands = await brandService.getBrands();

    res.status(200).json({
      success: true,
      data: brands,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// Get Single Brand
const getBrandById = async (req, res) => {
  try {

    const brand = await brandService.getBrandById(
      req.params.id
    );

    if (!brand) {
      return res.status(404).json({
        success: false,
        message: "Brand not found",
      });
    }

    res.status(200).json({
      success: true,
      data: brand,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// Update Brand
const updateBrand = async (req, res) => {
  try {

    const brand = await brandService.updateBrand(
      req.params.id,
      req.body,
      req.user._id
    );

    res.status(200).json({
      success: true,
      message: "Brand updated successfully",
      data: brand,
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message,
    });

  }
};


// Delete Brand
const deleteBrand = async (req, res) => {
  try {

    await brandService.deleteBrand(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message: "Brand deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


module.exports = {
  createBrand,
  getBrands,
  getBrandById,
  updateBrand,
  deleteBrand,
};