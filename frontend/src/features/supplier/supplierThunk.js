import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getSuppliers,
  getSupplierById,
  createSupplier,
  updateSupplier,
  deleteSupplier,
} from "./supplierApi";



export const fetchSuppliers = createAsyncThunk(
  "supplier/fetchSuppliers",
  async (_, thunkAPI) => {
    try {
      const response = await getSuppliers();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);



export const fetchSupplierById = createAsyncThunk(
  "supplier/fetchSupplierById",
  async (id, thunkAPI) => {
    try {
      const response = await getSupplierById(id);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);



export const addSupplier = createAsyncThunk(
  "supplier/addSupplier",
  async (supplierData, thunkAPI) => {
    try {
      const response = await createSupplier(supplierData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);



export const editSupplier = createAsyncThunk(
  "supplier/editSupplier",
  async ({ id, supplierData }, thunkAPI) => {
    try {
      const response = await updateSupplier(id, supplierData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);



export const removeSupplier = createAsyncThunk(
  "supplier/removeSupplier",
  async (id, thunkAPI) => {
    try {
      await deleteSupplier(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);