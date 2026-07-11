import { createSlice } from "@reduxjs/toolkit";

import {
  fetchCounters,
  fetchCounterById,
  fetchCountersByBranch,
  createNewCounter,
  updateExistingCounter,
  removeCounter,
} from "./counterThunk";

const initialState = {
  counters: [],
  counter: null,
  loading: false,
  error: null,
};

const counterSlice = createSlice({
  name: "counter",

  initialState,

  reducers: {
    clearSelectedCounter: (state) => {
      state.counter = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // ==========================
      // Fetch All Counters
      // ==========================
      .addCase(fetchCounters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchCounters.fulfilled, (state, action) => {
        state.loading = false;
        state.counters = action.payload.counters;
      })

      .addCase(fetchCounters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ==========================
      // Fetch Counter By Id
      // ==========================
      .addCase(fetchCounterById.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchCounterById.fulfilled, (state, action) => {
        state.loading = false;
        state.counter = action.payload.counter;
      })

      .addCase(fetchCounterById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ==========================
      // Fetch Counters By Branch
      // ==========================
      .addCase(fetchCountersByBranch.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchCountersByBranch.fulfilled, (state, action) => {
        state.loading = false;
        state.counters = action.payload.counters;
      })

      .addCase(fetchCountersByBranch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ==========================
      // Create Counter
      // ==========================
      .addCase(createNewCounter.pending, (state) => {
        state.loading = true;
      })

      .addCase(createNewCounter.fulfilled, (state) => {
        state.loading = false;
      })

      .addCase(createNewCounter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ==========================
      // Update Counter
      // ==========================
      .addCase(updateExistingCounter.pending, (state) => {
        state.loading = true;
      })

      .addCase(updateExistingCounter.fulfilled, (state) => {
        state.loading = false;
      })

      .addCase(updateExistingCounter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ==========================
      // Delete Counter
      // ==========================
      .addCase(removeCounter.pending, (state) => {
        state.loading = true;
      })

      .addCase(removeCounter.fulfilled, (state) => {
        state.loading = false;
      })

      .addCase(removeCounter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  clearSelectedCounter,
} = counterSlice.actions;

export default counterSlice.reducer;