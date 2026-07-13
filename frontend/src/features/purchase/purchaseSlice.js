import { createSlice } from "@reduxjs/toolkit";

import {
    fetchPurchases,
    fetchPurchaseById,
    addPurchase,
    editPurchase,
    receivePurchaseGoods,
    removePurchase,
} from "./purchaseThunk";


const initialState = {

    purchases: [],

    selectedPurchase: null,

    loading: false,

    error: null,

};


const purchaseSlice = createSlice({

    name: "purchase",

    initialState,

    reducers: {

        clearSelectedPurchase: (state) => {

            state.selectedPurchase = null;

        },

        clearPurchaseError: (state) => {

            state.error = null;

        },

    },


    extraReducers: (builder) => {


        builder

        // =========================
        // GET ALL PURCHASES
        // =========================

        .addCase(
            fetchPurchases.pending,
            (state) => {

                state.loading = true;

            }
        )

        .addCase(
            fetchPurchases.fulfilled,
            (state, action) => {

                state.loading = false;

                state.purchases =
                    action.payload;

            }
        )

        .addCase(
            fetchPurchases.rejected,
            (state, action) => {

                state.loading = false;

                state.error =
                    action.payload;

            }
        )


        // =========================
        // GET PURCHASE BY ID
        // =========================

        .addCase(
            fetchPurchaseById.fulfilled,
            (state, action) => {

                state.selectedPurchase =
                    action.payload;

            }
        )


        // =========================
        // CREATE PURCHASE
        // =========================

        .addCase(
            addPurchase.fulfilled,
            (state, action) => {

                state.purchases.unshift(
                    action.payload
                );

            }
        )


        // =========================
        // UPDATE PURCHASE
        // =========================

        .addCase(
            editPurchase.fulfilled,
            (state, action) => {

                const index =
                    state.purchases.findIndex(
                        (item) =>
                            item._id ===
                            action.payload._id
                    );


                if (index !== -1) {

                    state.purchases[index] =
                        action.payload;

                }

            }
        )


        // =========================
        // RECEIVE PURCHASE
        // =========================

        .addCase(
            receivePurchaseGoods.fulfilled,
            (state, action) => {


                const index =
                    state.purchases.findIndex(
                        (item) =>
                            item._id ===
                            action.payload._id
                    );


                if(index !== -1){

                    state.purchases[index] =
                        action.payload;

                }


            }
        )


        // =========================
        // DELETE PURCHASE
        // =========================

        .addCase(
            removePurchase.fulfilled,
            (state, action) => {


                state.purchases =
                    state.purchases.filter(
                        (item) =>
                            item._id !==
                            action.payload.id
                    );


            }
        );


    },

});


export const {
    clearSelectedPurchase,
    clearPurchaseError,
} = purchaseSlice.actions;


export default purchaseSlice.reducer;