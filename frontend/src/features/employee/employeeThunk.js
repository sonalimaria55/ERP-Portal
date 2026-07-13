// import { createAsyncThunk } from "@reduxjs/toolkit";

// import {
//   getEmployees,
//   getEmployeeById,
//   createEmployee,
//   updateEmployee,
//   deleteEmployee,
//   updateEmployeeStatus,
//   resetEmployeePassword,
// } from "./employeeApi";


// // Get All Employees
// export const fetchEmployees = createAsyncThunk(
//   "employee/fetchEmployees",
//   async (_, thunkAPI) => {
//     try {
//       const res = await getEmployees();
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error.response?.data?.message || error.message
//       );
//     }
//   }
// );


// // Get Employee By Id
// export const fetchEmployeeById = createAsyncThunk(
//   "employee/fetchEmployeeById",
//   async (id, thunkAPI) => {
//     try {
//       const res = await getEmployeeById(id);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error.response?.data?.message || error.message
//       );
//     }
//   }
// );


// // Create Employee
// export const createNewEmployee = createAsyncThunk(
//   "employee/createNewEmployee",
//   async (employeeData, thunkAPI) => {
//     try {
//       const res = await createEmployee(employeeData);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error.response?.data?.message || error.message
//       );
//     }
//   }
// );


// // Update Employee
// export const updateExistingEmployee = createAsyncThunk(
//   "employee/updateExistingEmployee",
//   async ({ id, employeeData }, thunkAPI) => {
//     try {
//       const res = await updateEmployee(id, employeeData);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error.response?.data?.message || error.message
//       );
//     }
//   }
// );


// // Delete Employee
// export const removeEmployee = createAsyncThunk(
//   "employee/removeEmployee",
//   async (id, thunkAPI) => {
//     try {
//       await deleteEmployee(id);
//       return id;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error.response?.data?.message || error.message
//       );
//     }
//   }
// );


// // Activate / Deactivate Employee
// export const toggleEmployeeStatus = createAsyncThunk(
//   "employee/toggleEmployeeStatus",
//   async ({ id, isActive }, thunkAPI) => {
//     try {
//       const res = await updateEmployeeStatus(id, isActive);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error.response?.data?.message || error.message
//       );
//     }
//   }
// );


// // Reset Password
// export const resetPassword = createAsyncThunk(
//   "employee/resetPassword",
//   async ({ id, password }, thunkAPI) => {
//     try {
//       const res = await resetEmployeePassword(id, password);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error.response?.data?.message || error.message
//       );
//     }
//   }
// );

import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getEmployees,
  getEmployeeById,
  searchEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  updateEmployeeStatus,
  resetEmployeePassword,
} from "./employeeApi";

// ==========================================
// Get All Employees
// ==========================================
export const fetchEmployees = createAsyncThunk(
  "employee/fetchEmployees",
  async (_, thunkAPI) => {
    try {
      const response = await getEmployees();
      return response.data.employees;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

// ==========================================
// Get Employee By ID
// ==========================================
export const fetchEmployeeById = createAsyncThunk(
  "employee/fetchEmployeeById",
  async (id, thunkAPI) => {
    try {
      const response = await getEmployeeById(id);
      return response.data.employee;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

// ==========================================
// Search Employees
// ==========================================
export const searchEmployee = createAsyncThunk(
  "employee/searchEmployee",
  async (keyword, thunkAPI) => {
    try {
      const response = await searchEmployees(keyword);
      return response.data.employees;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

// ==========================================
// Create Employee
// ==========================================
export const addEmployee = createAsyncThunk(
  "employee/addEmployee",
  async (employeeData, thunkAPI) => {
    try {
      const response = await createEmployee(employeeData);
      return response.data.employee;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

// ==========================================
// Update Employee
// ==========================================
export const editEmployee = createAsyncThunk(
  "employee/editEmployee",
  async ({ id, employeeData }, thunkAPI) => {
    try {
      const response = await updateEmployee(id, employeeData);
      return response.data.employee;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

// ==========================================
// Delete Employee
// ==========================================
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

// ==========================================
// Update Employee Status
// ==========================================
export const changeEmployeeStatus = createAsyncThunk(
  "employee/changeEmployeeStatus",
  async ({ id, isActive }, thunkAPI) => {
    try {
      const response = await updateEmployeeStatus(id, isActive);
      return response.data.employee;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

// ==========================================
// Reset Employee Password
// ==========================================
export const resetPassword = createAsyncThunk(
  "employee/resetPassword",
  async ({ id, password }, thunkAPI) => {
    try {
      const response = await resetEmployeePassword(id, password);
      return response.data.employee;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);