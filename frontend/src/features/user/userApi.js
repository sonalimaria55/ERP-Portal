import axiosInstance from "../../api/axiosInstance";

// Get All Users
export const getUsers = async () => {
  const response = await axiosInstance.get("/users");
  return response.data;
};

// Get User By Id
export const getUserById = async (id) => {
  const response = await axiosInstance.get(`/users/${id}`);
  return response.data;
};

// Create User
export const createUser = async (data) => {
  const response = await axiosInstance.post("/users", data);
  return response.data;
};

// Update User
export const updateUser = async (id, data) => {
  const response = await axiosInstance.put(`/users/${id}`, data);
  return response.data;
};

// Activate / Deactivate User
export const updateUserStatus = async (id) => {
  const response = await axiosInstance.patch(`/users/${id}/status`);
  return response.data;
};

// Delete User
export const deleteUser = async (id) => {
  const response = await axiosInstance.delete(`/users/${id}`);
  return response.data;
};