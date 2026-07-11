import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getCounters,
  getCounterById,
  getCountersByBranch,
  createCounter,
  updateCounter,
  deleteCounter,
} from "./counterApi";

// ==========================
// Get All Counters
// ==========================
export const fetchCounters = createAsyncThunk(
  "counter/fetchCounters",
  async (_, thunkAPI) => {
    try {
      const response = await getCounters();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

// ==========================
// Get Counter By Id
// ==========================
export const fetchCounterById = createAsyncThunk(
  "counter/fetchCounterById",
  async (id, thunkAPI) => {
    try {
      const response = await getCounterById(id);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

// ==========================
// Get Counters By Branch
// ==========================
export const fetchCountersByBranch = createAsyncThunk(
  "counter/fetchCountersByBranch",
  async (branchId, thunkAPI) => {
    try {
      const response = await getCountersByBranch(branchId);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

// ==========================
// Create Counter
// ==========================
export const createNewCounter = createAsyncThunk(
  "counter/createNewCounter",
  async (data, thunkAPI) => {
    try {
      const response = await createCounter(data);

      thunkAPI.dispatch(fetchCounters());

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

// ==========================
// Update Counter
// ==========================
export const updateExistingCounter = createAsyncThunk(
  "counter/updateExistingCounter",
  async ({ id, data }, thunkAPI) => {
    try {
      const response = await updateCounter(id, data);

      thunkAPI.dispatch(fetchCounters());

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

// ==========================
// Delete Counter
// ==========================
export const removeCounter = createAsyncThunk(
  "counter/removeCounter",
  async (id, thunkAPI) => {
    try {
      await deleteCounter(id);

      thunkAPI.dispatch(fetchCounters());

      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);