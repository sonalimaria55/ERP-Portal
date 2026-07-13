// import { createSlice } from "@reduxjs/toolkit";

// import {
//   fetchFactories,
//   fetchFactoryById,
//   createNewFactory,
//   updateExistingFactory,
//   removeFactory,
// } from "./factoryThunk";

// const initialState = {
//   factories: [],
//   factory: null,
//   loading: false,
//   error: null,
// };

// const factorySlice = createSlice({
//   name: "factory",

//   initialState,

//   reducers: {
//     clearSelectedFactory: (state) => {
//       state.factory = null;
//     },
//   },

//   extraReducers: (builder) => {
//     builder

//       // ==========================
//       // Fetch Factories
//       // ==========================
//       .addCase(fetchFactories.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })

//       .addCase(fetchFactories.fulfilled, (state, action) => {
//         state.loading = false;
//         state.factories = action.payload.factories;
//       })

//       .addCase(fetchFactories.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       // ==========================
//       // Fetch Factory By Id
//       // ==========================
//       .addCase(fetchFactoryById.pending, (state) => {
//         state.loading = true;
//       })

//       .addCase(fetchFactoryById.fulfilled, (state, action) => {
//         state.loading = false;
//         state.factory = action.payload.factory;
//       })

//       .addCase(fetchFactoryById.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       // ==========================
//       // Create Factory
//       // ==========================
//       .addCase(createNewFactory.pending, (state) => {
//         state.loading = true;
//       })

//       .addCase(createNewFactory.fulfilled, (state) => {
//         state.loading = false;
//       })

//       .addCase(createNewFactory.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       // ==========================
//       // Update Factory
//       // ==========================
//       .addCase(updateExistingFactory.pending, (state) => {
//         state.loading = true;
//       })

//       .addCase(updateExistingFactory.fulfilled, (state) => {
//         state.loading = false;
//       })

//       .addCase(updateExistingFactory.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       // ==========================
//       // Delete Factory
//       // ==========================
//       .addCase(removeFactory.pending, (state) => {
//         state.loading = true;
//       })

//       .addCase(removeFactory.fulfilled, (state) => {
//         state.loading = false;
//       })

//       .addCase(removeFactory.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const {
//   clearSelectedFactory,
// } = factorySlice.actions;

// export default factorySlice.reducer;



// //future enhancement
// // state.factories = state.factories.filter(
// //   f => f._id !== action.payload
// // );

//---------------------------------------------------------------------------------

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// import {
//   getFactories,
//   getFactoryById,
//   createFactory,
//   updateFactory,
//   deleteFactory,
// } from "./factoryApi";


// // Fetch All Factories
// export const fetchFactories = createAsyncThunk(
//   "factory/fetchFactories",
//   async (_, thunkAPI) => {
//     try {
//       const response = await getFactories();
//       return response;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error.response?.data?.message || "Failed to fetch factories"
//       );
//     }
//   }
// );


// // Fetch Single Factory
// export const fetchFactoryById = createAsyncThunk(
//   "factory/fetchFactoryById",
//   async (id, thunkAPI) => {
//     try {
//       const response = await getFactoryById(id);
//       return response;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error.response?.data?.message || "Failed to fetch factory"
//       );
//     }
//   }
// );


// // Add Factory
// export const addFactory = createAsyncThunk(
//   "factory/addFactory",
//   async (data, thunkAPI) => {
//     try {
//       const response = await createFactory(data);
//       return response;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error.response?.data?.message || "Failed to create factory"
//       );
//     }
//   }
// );


// // Update Factory
// export const editFactory = createAsyncThunk(
//   "factory/editFactory",
//   async ({ id, data }, thunkAPI) => {
//     try {
//       const response = await updateFactory(id, data);
//       return response;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error.response?.data?.message || "Failed to update factory"
//       );
//     }
//   }
// );


// // Delete Factory
// export const removeFactory = createAsyncThunk(
//   "factory/removeFactory",
//   async (id, thunkAPI) => {
//     try {
//       await deleteFactory(id);
//       return id;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error.response?.data?.message || "Failed to delete factory"
//       );
//     }
//   }
// );



// const initialState = {
//   factories: [],
//   factory: null,
//   loading: false,
//   error: null,
// };


// const factorySlice = createSlice({
//   name: "factory",
//   initialState,

//   reducers: {},


//   extraReducers: (builder) => {

//     builder

//     // GET ALL
//     .addCase(fetchFactories.pending, (state) => {
//       state.loading = true;
//     })

//   .addCase(fetchFactories.fulfilled, (state, action) => {
//   state.loading = false;
//   state.factories = action.payload.factories;
// })

//     .addCase(fetchFactories.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     })


//     // CREATE
//     .addCase(addFactory.fulfilled, (state, action) => {
//       state.factories.push(action.payload);
//     })


//     // UPDATE
//     .addCase(editFactory.fulfilled, (state, action) => {
//       const index = state.factories.findIndex(
//         (item) => item._id === action.payload._id
//       );

//       if(index !== -1){
//         state.factories[index] = action.payload;
//       }
//     })


//     // DELETE
//     .addCase(removeFactory.fulfilled, (state, action) => {
//       state.factories = state.factories.filter(
//         (item)=> item._id !== action.payload
//       );
//     });

//   },
// });


// export default factorySlice.reducer;


//---------------------------------------------------
import { createSlice } from "@reduxjs/toolkit";

import {
  fetchFactories,
  fetchFactoryById,
  createNewFactory,
  updateExistingFactory,
  removeFactory,
} from "./factoryThunk";

const initialState = {
  factories: [],
  factory: null,
  loading: false,
  error: null,
};

const factorySlice = createSlice({
  name: "factory",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      // FETCH ALL
      .addCase(fetchFactories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchFactories.fulfilled, (state, action) => {
        state.loading = false;

        state.factories =
          action.payload.factories ||
          action.payload.data ||
          action.payload;
      })

      .addCase(fetchFactories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // FETCH ONE
      .addCase(fetchFactoryById.fulfilled, (state, action) => {
        state.factory = action.payload;
      })

      // CREATE
      .addCase(createNewFactory.fulfilled, (state, action) => {
        state.factories.push(action.payload);
      })

      // UPDATE
      .addCase(updateExistingFactory.fulfilled, (state, action) => {
        const index = state.factories.findIndex(
          (factory) => factory._id === action.payload._id
        );

        if (index !== -1) {
          state.factories[index] = action.payload;
        }
      })

      // DELETE
      .addCase(removeFactory.fulfilled, (state, action) => {
        state.factories = state.factories.filter(
          (factory) => factory._id !== action.payload
        );
      });
  },
});

export default factorySlice.reducer;