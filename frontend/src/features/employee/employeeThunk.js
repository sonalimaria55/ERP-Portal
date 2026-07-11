import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  updateEmployeeStatus,
  resetEmployeePassword,
} from "./employeeApi";


// Get All Employees
export const fetchEmployees = createAsyncThunk(
  "employee/fetchEmployees",
  async (_, thunkAPI) => {
    try {
      const res = await getEmployees();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);


// Get Employee By Id
export const fetchEmployeeById = createAsyncThunk(
  "employee/fetchEmployeeById",
  async (id, thunkAPI) => {
    try {
      const res = await getEmployeeById(id);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);


// Create Employee
export const createNewEmployee = createAsyncThunk(
  "employee/createNewEmployee",
  async (employeeData, thunkAPI) => {
    try {
      const res = await createEmployee(employeeData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);


// Update Employee
export const updateExistingEmployee = createAsyncThunk(
  "employee/updateExistingEmployee",
  async ({ id, employeeData }, thunkAPI) => {
    try {
      const res = await updateEmployee(id, employeeData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);


// Delete Employee
export const removeEmployee = createAsyncThunk(
  "employee/removeEmployee",
  async (id, thunkAPI) => {
    try {
      await deleteEmployee(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);


// Activate / Deactivate Employee
export const toggleEmployeeStatus = createAsyncThunk(
  "employee/toggleEmployeeStatus",
  async ({ id, isActive }, thunkAPI) => {
    try {
      const res = await updateEmployeeStatus(id, isActive);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);


// Reset Password
export const resetPassword = createAsyncThunk(
  "employee/resetPassword",
  async ({ id, password }, thunkAPI) => {
    try {
      const res = await resetEmployeePassword(id, password);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);