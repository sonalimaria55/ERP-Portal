const Brand = require("../models/Brand");


// Generate Brand ID
const generateBrandId = async () => {
  const lastBrand = await Brand.findOne()
    .sort({ createdAt: -1 });

  if (!lastBrand) {
    return "BRD000001";
  }

  const lastNumber = parseInt(
    lastBrand.brandId.replace("BRD", "")
  );

  const nextNumber = lastNumber + 1;

  return `BRD${String(nextNumber).padStart(6, "0")}`;
};


// Create Brand
const createBrand = async (data, userId) => {

  const brandId = await generateBrandId();

  const brand = await Brand.create({
    ...data,
    brandId,
    createdBy: userId,
  });

  return brand;
};


// Get All Brands
const getBrands = async () => {

  return await Brand.find()
    .populate("createdBy", "name email")
    .populate("updatedBy", "name email")
    .sort({ createdAt: -1 });

};


// Get Brand By ID
const getBrandById = async (id) => {

  return await Brand.findById(id)
    .populate("createdBy", "name email")
    .populate("updatedBy", "name email");

};


// Update Brand
const updateBrand = async (
  id,
  data,
  userId
) => {

  return await Brand.findByIdAndUpdate(
    id,
    {
      ...data,
      updatedBy: userId,
    },
    {
      new: true,
    }
  );

};


// Delete Brand
const deleteBrand = async (id) => {

  return await Brand.findByIdAndDelete(id);

};


module.exports = {
  createBrand,
  getBrands,
  getBrandById,
  updateBrand,
  deleteBrand,
};