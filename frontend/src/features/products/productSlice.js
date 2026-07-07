import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./productApi";

// Fetch Products
export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async ({
    page = 1,
    limit = 10,
    search = "",
    category = "",
    status = "",
  }) => {

    return await getProducts(
      page,
      limit,
      search,
      category,
      status
    );

  }
);

// Create Product
export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (productData) => {

    return await createProduct(productData);

  }
);

// Update Product
export const editProduct = createAsyncThunk(
  "product/editProduct",
  async ({ id, productData }) => {

    return await updateProduct(
      id,
      productData
    );

  }
);

// Delete Product
export const removeProduct = createAsyncThunk(
  "product/removeProduct",
  async (id) => {

    await deleteProduct(id);

    return id;

  }
);

const productSlice = createSlice({

  name: "product",

  initialState: {

    products: [],

    pagination: {},

    loading: false,

    error: null,

  },

  reducers: {},

  extraReducers: (builder) => {

    builder

      .addCase(
        fetchProducts.pending,
        (state) => {

          state.loading = true;

        }
      )

      .addCase(
        fetchProducts.fulfilled,
        (state, action) => {

          state.loading = false;

          state.products =
            action.payload.data;

          state.pagination =
            action.payload.pagination;

        }
      )

      .addCase(
        fetchProducts.rejected,
        (state, action) => {

          state.loading = false;

          state.error =
            action.error.message;

        }
      );

  },

});

export default productSlice.reducer;