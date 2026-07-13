import { createSlice } from "@reduxjs/toolkit";

import {
  fetchSuppliers,
  fetchSupplierById,
  addSupplier,
  editSupplier,
  removeSupplier,
} from "./supplierThunk";

const initialState = {
  suppliers: [],
  supplier: null,
  loading: false,
  error: null,
};

const supplierSlice = createSlice({
  name: "supplier",
  initialState,

  reducers: {
    clearSupplier(state) {
      state.supplier = null;
    },

    clearSupplierError(state) {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // Fetch Suppliers
      .addCase(fetchSuppliers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSuppliers.fulfilled, (state, action) => {
        state.loading = false;
        state.suppliers = action.payload;
      })
      .addCase(fetchSuppliers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch Supplier By Id
      .addCase(fetchSupplierById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSupplierById.fulfilled, (state, action) => {
        state.loading = false;
        state.supplier = action.payload;
      })
      .addCase(fetchSupplierById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Add Supplier
      .addCase(addSupplier.pending, (state) => {
        state.loading = true;
      })
      .addCase(addSupplier.fulfilled, (state, action) => {
        state.loading = false;
        state.suppliers.unshift(action.payload);
      })
      .addCase(addSupplier.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update Supplier
      .addCase(editSupplier.pending, (state) => {
        state.loading = true;
      })
      .addCase(editSupplier.fulfilled, (state, action) => {
        state.loading = false;

        state.suppliers = state.suppliers.map((supplier) =>
          supplier._id === action.payload._id
            ? action.payload
            : supplier
        );

        state.supplier = action.payload;
      })
      .addCase(editSupplier.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete Supplier
      .addCase(removeSupplier.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeSupplier.fulfilled, (state, action) => {
        state.loading = false;

        state.suppliers = state.suppliers.filter(
          (supplier) => supplier._id !== action.payload
        );
      })
      .addCase(removeSupplier.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  clearSupplier,
  clearSupplierError,
} = supplierSlice.actions;

export default supplierSlice.reducer;