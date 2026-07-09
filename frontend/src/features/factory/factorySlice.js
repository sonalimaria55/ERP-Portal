import { createSlice } from "@reduxjs/toolkit";

import {
  fetchFactories,
  fetchFactoryById,
  createNewFactory,
  updateExistingFactory,
  removeFactory,
} from "./factoryThunk";

const initialState = {
  factories: [],
  factory: null,
  loading: false,
  error: null,
};

const factorySlice = createSlice({
  name: "factory",

  initialState,

  reducers: {
    clearSelectedFactory: (state) => {
      state.factory = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // ==========================
      // Fetch Factories
      // ==========================
      .addCase(fetchFactories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchFactories.fulfilled, (state, action) => {
        state.loading = false;
        state.factories = action.payload.factories;
      })

      .addCase(fetchFactories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ==========================
      // Fetch Factory By Id
      // ==========================
      .addCase(fetchFactoryById.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchFactoryById.fulfilled, (state, action) => {
        state.loading = false;
        state.factory = action.payload.factory;
      })

      .addCase(fetchFactoryById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ==========================
      // Create Factory
      // ==========================
      .addCase(createNewFactory.pending, (state) => {
        state.loading = true;
      })

      .addCase(createNewFactory.fulfilled, (state) => {
        state.loading = false;
      })

      .addCase(createNewFactory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ==========================
      // Update Factory
      // ==========================
      .addCase(updateExistingFactory.pending, (state) => {
        state.loading = true;
      })

      .addCase(updateExistingFactory.fulfilled, (state) => {
        state.loading = false;
      })

      .addCase(updateExistingFactory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ==========================
      // Delete Factory
      // ==========================
      .addCase(removeFactory.pending, (state) => {
        state.loading = true;
      })

      .addCase(removeFactory.fulfilled, (state) => {
        state.loading = false;
      })

      .addCase(removeFactory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  clearSelectedFactory,
} = factorySlice.actions;

export default factorySlice.reducer;