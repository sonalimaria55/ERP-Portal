import { createSlice } from "@reduxjs/toolkit";

import {
  fetchUsers,
  fetchUserById,
  createNewUser,
  updateExistingUser,
  toggleUserStatus,
  removeUser,
} from "./userThunk";

const initialState = {
  users: [],
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearSelectedUser: (state) => {
      state.user = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // =============================
      // Fetch Users
      // =============================
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
       state.users = action.payload;
      })

      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // =============================
      // Fetch User By Id
      // =============================
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = false;
       
        state.user = action.payload;
      })

      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // =============================
      // Create User
      // =============================
      .addCase(createNewUser.pending, (state) => {
        state.loading = true;
      })

      .addCase(createNewUser.fulfilled, (state) => {
        state.loading = false;
      })

      .addCase(createNewUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // =============================
      // Update User
      // =============================
      .addCase(updateExistingUser.pending, (state) => {
        state.loading = true;
      })

      .addCase(updateExistingUser.fulfilled, (state) => {
        state.loading = false;
      })

      .addCase(updateExistingUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // =============================
      // Toggle Status
      // =============================
      .addCase(toggleUserStatus.pending, (state) => {
        state.loading = true;
      })

      .addCase(toggleUserStatus.fulfilled, (state) => {
        state.loading = false;
      })

      .addCase(toggleUserStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // =============================
      // Delete User
      // =============================
      .addCase(removeUser.pending, (state) => {
        state.loading = true;
      })

      .addCase(removeUser.fulfilled, (state) => {
        state.loading = false;
      })

      .addCase(removeUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSelectedUser } = userSlice.actions;

export default userSlice.reducer;