import { createSlice } from "@reduxjs/toolkit";

import {
  fetchEmployees,
  fetchEmployeeById,
  createNewEmployee,
  updateExistingEmployee,
  removeEmployee,
  toggleEmployeeStatus,
  resetPassword,
} from "./employeeThunk";

const initialState = {
  employees: [],
  employee: null,
  loading: false,
  error: null,
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    clearEmployee(state) {
      state.employee = null;
    },

    clearEmployeeError(state) {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // ===============================
      // Fetch Employees
      // ===============================
      .addCase(fetchEmployees.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.employees = action.payload.employees || [];
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ===============================
      // Fetch Employee By ID
      // ===============================
      .addCase(fetchEmployeeById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEmployeeById.fulfilled, (state, action) => {
        state.loading = false;
        state.employee = action.payload.employee;
      })
      .addCase(fetchEmployeeById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ===============================
      // Create Employee
      // ===============================
      .addCase(createNewEmployee.pending, (state) => {
        state.loading = true;
      })
      .addCase(createNewEmployee.fulfilled, (state, action) => {
        state.loading = false;
        state.employees.unshift(action.payload.employee);
      })
      .addCase(createNewEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ===============================
      // Update Employee
      // ===============================
      .addCase(updateExistingEmployee.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateExistingEmployee.fulfilled, (state, action) => {
        state.loading = false;

        const index = state.employees.findIndex(
          (emp) => emp._id === action.payload.employee._id
        );

        if (index !== -1) {
          state.employees[index] = action.payload.employee;
        }
      })
      .addCase(updateExistingEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ===============================
      // Delete Employee
      // ===============================
      .addCase(removeEmployee.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeEmployee.fulfilled, (state, action) => {
        state.loading = false;

        state.employees = state.employees.filter(
          (emp) => emp._id !== action.payload
        );
      })
      .addCase(removeEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ===============================
      // Activate / Deactivate
      // ===============================
      .addCase(toggleEmployeeStatus.fulfilled, (state, action) => {
        const index = state.employees.findIndex(
          (emp) => emp._id === action.payload.employee._id
        );

        if (index !== -1) {
          state.employees[index] = action.payload.employee;
        }
      })

      // ===============================
      // Reset Password
      // ===============================
      .addCase(resetPassword.fulfilled, (state) => {
        state.loading = false;
      });
  },
});

export const {
  clearEmployee,
  clearEmployeeError,
} = employeeSlice.actions;

export default employeeSlice.reducer;