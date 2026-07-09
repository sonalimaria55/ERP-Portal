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


// Get Single Product
export const getProductById = async (id) => {

  const response = await api.get(
    `/products/${id}`
  );

  return response.data;
};


// Create Product
export const createProduct = async (productData) => {

  const response = await api.post(
    "/products",
    productData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
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
    productData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};


// Adjust Product Stock
export const adjustProductStock = async (
  id,
  data
) => {
  const response = await api.patch(
    `/products/${id}/adjust-stock`,
    data
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