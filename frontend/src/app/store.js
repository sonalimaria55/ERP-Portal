
import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import dashboardReducer from "../features/dashboard/dashboardSlice";
import categoryReducer from "../features/category/categorySlice";
import productReducer from "../features/products/productSlice";


export const store = configureStore({

    reducer: {

        auth: authReducer,

        dashboard: dashboardReducer,
        category: categoryReducer,
        product: productReducer,

    },

});