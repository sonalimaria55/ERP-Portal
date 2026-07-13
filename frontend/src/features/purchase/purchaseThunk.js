import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    getPurchases,
    getPurchaseById,
    createPurchase,
    updatePurchase,
    receivePurchase,
    deletePurchase,
} from "./purchaseApi";


// Fetch All Purchases
export const fetchPurchases = createAsyncThunk(
    "purchase/fetchPurchases",
    async (_, thunkAPI) => {

        try {

            const response =
                await getPurchases();

            return response.data;

        } catch (error) {

            return thunkAPI.rejectWithValue(
                error.response?.data?.message ||
                error.message
            );

        }
    }
);


// Fetch Purchase By Id
export const fetchPurchaseById = createAsyncThunk(
    "purchase/fetchPurchaseById",
    async (id, thunkAPI) => {

        try {

            const response =
                await getPurchaseById(id);

            return response.data;

        } catch (error) {

            return thunkAPI.rejectWithValue(
                error.response?.data?.message ||
                error.message
            );

        }
    }
);


// Create Purchase
export const addPurchase = createAsyncThunk(
    "purchase/createPurchase",
    async (data, thunkAPI) => {

        try {

            const response =
                await createPurchase(data);

            return response.data;

        } catch (error) {

            return thunkAPI.rejectWithValue(
                error.response?.data?.message ||
                error.message
            );

        }
    }
);


// Update Purchase
export const editPurchase = createAsyncThunk(
    "purchase/updatePurchase",
    async (
        { id, data },
        thunkAPI
    ) => {

        try {

            const response =
                await updatePurchase(
                    id,
                    data
                );

            return response.data;

        } catch (error) {

            return thunkAPI.rejectWithValue(
                error.response?.data?.message ||
                error.message
            );

        }
    }
);


// Receive Purchase
export const receivePurchaseGoods =
createAsyncThunk(
    "purchase/receivePurchase",
    async (id, thunkAPI) => {

        try {

            const response =
                await receivePurchase(id);

            return response.data;

        } catch (error) {

            return thunkAPI.rejectWithValue(
                error.response?.data?.message ||
                error.message
            );

        }
    }
);


// Delete Purchase
export const removePurchase =
createAsyncThunk(
    "purchase/deletePurchase",
    async (id, thunkAPI) => {

        try {

            const response =
                await deletePurchase(id);

            return {
                id,
                ...response
            };

        } catch (error) {

            return thunkAPI.rejectWithValue(
                error.response?.data?.message ||
                error.message
            );

        }
    }
);