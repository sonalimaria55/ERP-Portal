import axiosInstance from "../../api/axiosInstance";

// Get All Factories
export const getFactories = async () => {
  const response = await axiosInstance.get("/factories");
  return response.data;
};

// Get Factory By Id
export const getFactoryById = async (id) => {
  const response = await axiosInstance.get(`/factories/${id}`);
  return response.data;
};

// Create Factory
export const createFactory = async (data) => {
  const response = await axiosInstance.post("/factories", data);
  return response.data;
};

// Update Factory
export const updateFactory = async (id, data) => {
  const response = await axiosInstance.put(`/factories/${id}`, data);
  return response.data;
};

// Delete Factory
export const deleteFactory = async (id) => {
  const response = await axiosInstance.delete(`/factories/${id}`);
  return response.data;
};