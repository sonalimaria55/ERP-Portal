import api from "../../api/axiosInstance";

// Get all employees
export const getEmployees = () =>
  api.get("/employees");

// Get single employee
export const getEmployeeById = (id) =>
  api.get(`/employees/${id}`);

// Create employee
export const createEmployee = (data) =>
  api.post("/employees", data);

// Update employee
export const updateEmployee = (id, data) =>
  api.put(`/employees/${id}`, data);

// Delete employee
export const deleteEmployee = (id) =>
  api.delete(`/employees/${id}`);

// Activate / Deactivate
export const updateEmployeeStatus = (id, isActive) =>
  api.patch(`/employees/${id}/status`, {
    isActive,
  });

// Reset Password
export const resetEmployeePassword = (id, password) =>
  api.patch(`/employees/${id}/reset-password`, {
    password,
  });