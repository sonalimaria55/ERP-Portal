import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getBranches,
  getBranchesByFactory,
  getBranchById,
  createBranch,
  updateBranch,
  deleteBranch,
} from "./branchApi";

// Get All Branches
export const fetchBranches = createAsyncThunk(
  "branch/fetchBranches",
  async (_, thunkAPI) => {
    try {
      return await getBranches();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
        "Failed to fetch branches"
      );
    }
  }
);

// Get Branches By Factory
export const fetchBranchesByFactory = createAsyncThunk(
  "branch/fetchBranchesByFactory",
  async (factoryId, thunkAPI) => {
    try {
      return await getBranchesByFactory(factoryId);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
        "Failed to fetch branches"
      );
    }
  }
);

// Get Branch By Id
export const fetchBranchById = createAsyncThunk(
  "branch/fetchBranchById",
  async (id, thunkAPI) => {
    try {
      return await getBranchById(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
        "Failed to fetch branch"
      );
    }
  }
);

// Create Branch
export const createNewBranch = createAsyncThunk(
  "branch/createNewBranch",
  async (data, thunkAPI) => {
    try {
      const response = await createBranch(data);

      thunkAPI.dispatch(fetchBranches());

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
        "Failed to create branch"
      );
    }
  }
);

// Update Branch
export const updateExistingBranch = createAsyncThunk(
  "branch/updateExistingBranch",
  async ({ id, data }, thunkAPI) => {
    try {
      const response = await updateBranch(id, data);

      thunkAPI.dispatch(fetchBranches());

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
        "Failed to update branch"
      );
    }
  }
);

// Delete Branch
export const removeBranch = createAsyncThunk(
  "branch/removeBranch",
  async (id, thunkAPI) => {
    try {
      await deleteBranch(id);

      thunkAPI.dispatch(fetchBranches());

      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
        "Failed to delete branch"
      );
    }
  }
);