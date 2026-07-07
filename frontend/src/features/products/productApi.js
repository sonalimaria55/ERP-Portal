import api from "../../api/axiosInstance";

// Get Products
export const getProducts = async (
  page = 1,
  limit = 10,
  search = "",
  category = "",
  status = ""
) => {

  const response = await api.get("/products", {
    params: {
      page,
      limit,
      search,
      category,
      status,
    },
  });

  return response.data;
};

// Create Product
export const createProduct = async (productData) => {

  const response = await api.post(
    "/products",
    productData
  );

  return response.data;
};

// Update Product
export const updateProduct = async (
  id,
  productData
) => {

  const response = await api.put(
    `/products/${id}`,
    productData
  );

  return response.data;
};

// Delete Product
export const deleteProduct = async (id) => {

  const response = await api.delete(
    `/products/${id}`
  );

  return response.data;
};