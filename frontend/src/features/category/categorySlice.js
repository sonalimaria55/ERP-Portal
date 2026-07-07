import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "./categoryApi";

// Fetch Categories
export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async ({ page = 1, limit = 10, search = "" }) => {
    return await getCategories(page, limit, search);
  }
);

// Create Category
export const addCategory = createAsyncThunk(
  "category/addCategory",
  async (categoryData) => {
    return await createCategory(categoryData);
  }
);

// Update Category
export const editCategory = createAsyncThunk(
  "category/editCategory",
  async ({ id, categoryData }) => {
    return await updateCategory(id, categoryData);
  }
);

// Delete Category
export const removeCategory = createAsyncThunk(
  "category/removeCategory",
  async (id) => {
    await deleteCategory(id);
    return id;
  }
);

const categorySlice = createSlice({
  name: "category",

  initialState: {
    categories: [],
    pagination: {},
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      // Fetch
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload.data;
        state.pagination = action.payload.pagination;
      })

      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;