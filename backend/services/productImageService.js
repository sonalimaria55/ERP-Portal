const cloudinary = require("../config/cloudinary");

/**
 * Upload Product Image
 */
const uploadProductImage = async (file) => {
  if (!file) {
    throw new Error("Image file is required");
  }

  const base64 = `data:${file.mimetype};base64,${file.buffer.toString(
    "base64"
  )}`;

  const result = await cloudinary.uploader.upload(base64, {
    folder: "erp/products",
    resource_type: "image",
  });

  return {
    url: result.secure_url,
    publicId: result.public_id,
  };
};

/**
 * Delete Product Image
 */
const deleteProductImage = async (publicId) => {
  if (!publicId) {
    return;
  }

  await cloudinary.uploader.destroy(publicId);
};

module.exports = {
  uploadProductImage,
  deleteProductImage,
};