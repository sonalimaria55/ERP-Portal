import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  updateUserStatus,
  deleteUser,
} from "./userApi";


// Get All Users
export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async (_, thunkAPI) => {
    try {
      return await getUsers();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
        "Failed to fetch users"
      );
    }
  }
);


// Get User By Id
export const fetchUserById = createAsyncThunk(
  "user/fetchUserById",
  async (id, thunkAPI) => {
    try {
      return await getUserById(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
        "Failed to fetch user"
      );
    }
  }
);


// Create User
export const createNewUser = createAsyncThunk(
  "user/createNewUser",
  async (data, thunkAPI) => {
    try {

      const response = await createUser(data);

      thunkAPI.dispatch(fetchUsers());

      return response;

    } catch (error) {

      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
        "Failed to create user"
      );

    }
  }
);


// Update User
export const updateExistingUser = createAsyncThunk(
  "user/updateExistingUser",
  async ({ id, data }, thunkAPI) => {
    try {

      const response = await updateUser(id, data);

      thunkAPI.dispatch(fetchUsers());

      return response;

    } catch (error) {

      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
        "Failed to update user"
      );

    }
  }
);


// Toggle Status
export const toggleUserStatus = createAsyncThunk(
  "user/toggleUserStatus",
  async (id, thunkAPI) => {
    try {

      const response = await updateUserStatus(id);

      thunkAPI.dispatch(fetchUsers());

      return response;

    } catch (error) {

      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
        "Failed to update status"
      );

    }
  }
);


// Delete User
export const removeUser = createAsyncThunk(
  "user/removeUser",
  async (id, thunkAPI) => {
    try {

      await deleteUser(id);

      thunkAPI.dispatch(fetchUsers());

      return id;

    } catch (error) {

      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
        "Failed to delete user"
      );

    }
  }
);