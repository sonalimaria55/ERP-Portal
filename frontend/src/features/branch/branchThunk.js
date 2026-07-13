import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getBranches,
  getBranchById,
  getBranchesByFactory,
  createBranch,
  updateBranch,
  deleteBranch,
} from "./branchApi";



// Fetch All Branches
export const fetchBranches = createAsyncThunk(
  "branch/fetchBranches",
  async (_, thunkAPI) => {

    try {

      const response = await getBranches();

      return response.branches;

    } catch (error) {

      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
        error.message
      );

    }

  }
);




// Fetch Branch By Id
export const fetchBranchById = createAsyncThunk(
  "branch/fetchBranchById",
  async (id, thunkAPI) => {

    try {

      const response = await getBranchById(id);

      return response.branch;

    } catch (error) {

      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
        error.message
      );

    }

  }
);




// Fetch Branches By Factory
export const fetchBranchesByFactory = createAsyncThunk(
  "branch/fetchBranchesByFactory",
  async (factoryId, thunkAPI) => {

    try {

      const response =
        await getBranchesByFactory(factoryId);

      return response.branches;

    } catch (error) {

      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
        error.message
      );

    }

  }
);





// Add Branch
export const addBranch = createAsyncThunk(
  "branch/addBranch",
  async (branchData, thunkAPI) => {

    try {

      const response =
        await createBranch(branchData);

      return response.branch;

    } catch (error) {

      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
        error.message
      );

    }

  }
);





// Edit Branch
export const editBranch = createAsyncThunk(
  "branch/editBranch",
  async (
    { id, branchData },
    thunkAPI
  ) => {

    try {

      const response =
        await updateBranch(
          id,
          branchData
        );

      return response.branch;


    } catch (error) {

      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
        error.message
      );

    }

  }
);





// Remove Branch
export const removeBranch = createAsyncThunk(
  "branch/removeBranch",
  async (id, thunkAPI) => {

    try {

      await deleteBranch(id);

      return id;


    } catch (error) {

      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
        error.message
      );

    }

  }
);