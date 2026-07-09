
import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import dashboardReducer from "../features/dashboard/dashboardSlice";
import categoryReducer from "../features/category/categorySlice";
import productReducer from "../features/products/productSlice";

import userReducer from "../features/user/userSlice";
import factoryReducer from "../features/factory/factorySlice";

export const store = configureStore({

    reducer: {

        auth: authReducer,

        dashboard: dashboardReducer,
        category: categoryReducer,
        product: productReducer,
           user: userReducer,
              factory: factoryReducer,

    },

});


// reducer: {
//   auth: authReducer,
//   dashboard: dashboardReducer,

//   category: categoryReducer,
//   product: productReducer,

//   factory: factoryReducer,
//   branch: branchReducer,
//   counter: counterReducer,

//   user: userReducer,

//   inventory: inventoryReducer,
//   dispatch: dispatchReducer,
// }
