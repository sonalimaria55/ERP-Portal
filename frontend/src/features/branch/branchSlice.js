import { createSlice } from "@reduxjs/toolkit";

import {
  fetchBranches,
  fetchBranchesByFactory,
  fetchBranchById,
  createNewBranch,
  updateExistingBranch,
  removeBranch,
} from "./branchThunk";

const initialState = {
  branches: [],
  branch: null,
  loading: false,
  error: null,
};

const branchSlice = createSlice({
  name: "branch",

  initialState,

  reducers: {
    clearSelectedBranch: (state) => {
      state.branch = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // ==========================
      // Fetch All Branches
      // ==========================
      .addCase(fetchBranches.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchBranches.fulfilled, (state, action) => {
        state.loading = false;
        state.branches = action.payload.branches;
      })

      .addCase(fetchBranches.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ==========================
      // Fetch Branches By Factory
      // ==========================
      .addCase(fetchBranchesByFactory.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchBranchesByFactory.fulfilled, (state, action) => {
        state.loading = false;
        state.branches = action.payload.branches;
      })

      .addCase(fetchBranchesByFactory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ==========================
      // Fetch Branch By Id
      // ==========================
      .addCase(fetchBranchById.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchBranchById.fulfilled, (state, action) => {
        state.loading = false;
        state.branch = action.payload.branch;
      })

      .addCase(fetchBranchById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ==========================
      // Create Branch
      // ==========================
      .addCase(createNewBranch.pending, (state) => {
        state.loading = true;
      })

      .addCase(createNewBranch.fulfilled, (state) => {
        state.loading = false;
      })

      .addCase(createNewBranch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ==========================
      // Update Branch
      // ==========================
      .addCase(updateExistingBranch.pending, (state) => {
        state.loading = true;
      })

      .addCase(updateExistingBranch.fulfilled, (state) => {
        state.loading = false;
      })

      .addCase(updateExistingBranch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ==========================
      // Delete Branch
      // ==========================
      .addCase(removeBranch.pending, (state) => {
        state.loading = true;
      })

      .addCase(removeBranch.fulfilled, (state) => {
        state.loading = false;
      })

      .addCase(removeBranch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  clearSelectedBranch,
} = branchSlice.actions;

export default branchSlice.reducer;

