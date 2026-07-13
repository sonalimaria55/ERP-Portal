import axiosInstance from "../../api/axiosInstance";

export const getSuppliers = async () => {
  const response = await axiosInstance.get("/suppliers");
  return response.data;
};

export const getSupplierById = async (id) => {
  const response = await axiosInstance.get(`/suppliers/${id}`);
  return response.data;
};

export const createSupplier = async (data) => {
  const response = await axiosInstance.post("/suppliers", data);
  return response.data;
};

export const updateSupplier = async (id, data) => {
  const response = await axiosInstance.put(`/suppliers/${id}`, data);
  return response.data;
};

export const deleteSupplier = async (id) => {
  const response = await axiosInstance.delete(`/suppliers/${id}`);
  return response.data;
};