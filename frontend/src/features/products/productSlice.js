import {
    createSlice,
    createAsyncThunk,
} from "@reduxjs/toolkit";

import {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    adjustProductStock,
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
    } = {}) => {

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
    async ({
        id,
        productData,
    }) => {

        return await updateProduct(
            id,
            productData
        );

    }
);





// adjust Stock
export const adjustStock = createAsyncThunk(
    "product/adjustStock",
    async ({ id, data }) => {
        return await adjustProductStock(id, data);
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

        pagination: {
            page: 1,
            limit: 10,
            total: 0,
            totalPages: 0,
        },

        loading: false,

        error: null,

    },


    reducers: {


        clearProductError: (state) => {

            state.error = null;

        },


    },


    extraReducers: (builder) => {


        builder


            // =====================
            // FETCH PRODUCTS
            // =====================

            .addCase(fetchProducts.pending, (state) => { state.loading = true; state.error = null; })


            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;

                state.products = action.payload.data.products;


                state.pagination = action.payload.data.pagination;

            }
            )


            .addCase(
                fetchProducts.rejected,
                (state, action) => {

                    state.loading = false;


                    state.error =
                        action.error.message;

                }
            )

            // // =====================
            // // ADJUST STOCK
            // // =====================

            // .addCase(
            //     adjustStock.pending,
            //     (state) => {
            //         state.loading = true;
            //     }
            // )

            // .addCase(
            //     adjustStock.fulfilled,
            //     (state, action) => {
            //         state.loading = false;

            //         const updatedProduct = action.payload.data;

            //         const index = state.products.findIndex(
            //             (item) => item._id === updatedProduct._id
            //         );

            //         if (index !== -1) {
            //             state.products[index] = updatedProduct;
            //         }
            //     }
            // )

            // .addCase(
            //     adjustStock.rejected,
            //     (state, action) => {
            //         state.loading = false;
            //         state.error = action.error.message;
            //     }
            // )





            // =====================
            // CREATE PRODUCT
            // =====================

            .addCase(
                addProduct.pending,
                (state) => {

                    state.loading = true;

                }
            )


            .addCase(
                addProduct.fulfilled,
                (state, action) => {

                    state.loading = false;


                    state.products.unshift(
                        action.payload.data
                    );

                }
            )


            .addCase(
                addProduct.rejected,
                (state, action) => {

                    state.loading = false;


                    state.error =
                        action.error.message;

                }
            )



            // =====================
            // UPDATE PRODUCT
            // =====================

            .addCase(
                editProduct.pending,
                (state) => {

                    state.loading = true;

                }
            )


            .addCase(
                editProduct.fulfilled,
                (state, action) => {

                    state.loading = false;


                    const updatedProduct =
                        action.payload.data;


                    const index =
                        state.products.findIndex(
                            (item) =>
                                item._id === updatedProduct._id
                        );


                    if (index !== -1) {

                        state.products[index] =
                            updatedProduct;

                    }

                }
            )


            .addCase(
                editProduct.rejected,
                (state, action) => {

                    state.loading = false;


                    state.error =
                        action.error.message;

                }
            )

            // =====================
            // ADJUST STOCK
            // =====================
            .addCase(
                adjustStock.pending,
                (state) => {
                    state.loading = true;
                }
            )

            .addCase(
                adjustStock.fulfilled,
                (state, action) => {
                    state.loading = false;

                    const updated = action.payload.data;

                    const index = state.products.findIndex(
                        (p) => p._id === updated._id
                    );

                    if (index !== -1) {
                        state.products[index] = updated;
                    }
                }
            )

            .addCase(
                adjustStock.rejected,
                (state, action) => {
                    state.loading = false;
                    state.error = action.error.message;
                }
            )


            // =====================
            // DELETE PRODUCT
            // =====================

            .addCase(
                removeProduct.pending,
                (state) => {

                    state.loading = true;

                }
            )


            .addCase(
                removeProduct.fulfilled,
                (state, action) => {

                    state.loading = false;


                    state.products =
                        state.products.filter(
                            (item) =>
                                item._id !== action.payload
                        );

                }
            )


            .addCase(
                removeProduct.rejected,
                (state, action) => {

                    state.loading = false;


                    state.error =
                        action.error.message;

                }
            );


    },


});


export const {
    clearProductError,
} = productSlice.actions;








export default productSlice.reducer;
