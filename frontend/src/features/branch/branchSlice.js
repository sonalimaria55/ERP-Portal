import { createSlice } from "@reduxjs/toolkit";

import {
  fetchBranches,
  fetchBranchById,
  fetchBranchesByFactory,
  addBranch,
  editBranch,
  removeBranch,
} from "./branchThunk";



const initialState = {

  branches: [],

  selectedBranch: null,

  loading: false,

  error: null,

};



const branchSlice = createSlice({

  name: "branch",

  initialState,


  reducers: {


    clearSelectedBranch: (state) => {

      state.selectedBranch = null;

    },


    clearBranchError: (state) => {

      state.error = null;

    },


  },


  extraReducers: (builder) => {


    builder


    // Fetch All
    .addCase(
      fetchBranches.pending,
      (state) => {

        state.loading = true;

      }
    )


    .addCase(
      fetchBranches.fulfilled,
      (state, action) => {

        state.loading = false;

        state.branches = action.payload;

      }
    )


    .addCase(
      fetchBranches.rejected,
      (state, action) => {

        state.loading = false;

        state.error = action.payload;

      }
    )





    // Fetch By Id
    .addCase(
      fetchBranchById.fulfilled,
      (state, action) => {

        state.selectedBranch =
          action.payload;

      }
    )





    // Fetch By Factory
    .addCase(
      fetchBranchesByFactory.fulfilled,
      (state, action) => {

        state.branches =
          action.payload;

      }
    )





    // Create
    .addCase(
      addBranch.fulfilled,
      (state, action) => {

        state.branches.push(
          action.payload
        );

      }
    )





    // Update
    .addCase(
      editBranch.fulfilled,
      (state, action) => {


        const index =
          state.branches.findIndex(
            (branch) =>
              branch._id === action.payload._id
          );


        if(index !== -1){

          state.branches[index] =
            action.payload;

        }


      }
    )





    // Delete
    .addCase(
      removeBranch.fulfilled,
      (state, action) => {

        state.branches =
          state.branches.filter(
            (branch) =>
              branch._id !== action.payload
          );

      }
    );


  },


});



export const {
  clearSelectedBranch,
  clearBranchError,
} = branchSlice.actions;



export default branchSlice.reducer;