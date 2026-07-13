// import { createAsyncThunk } from "@reduxjs/toolkit";

// import {
//   getFactories,
//   getFactoryById,
//   createFactory,
//   updateFactory,
//   deleteFactory,
// } from "./factoryApi";



// // Get All Factories
// export const fetchFactories = createAsyncThunk(
//   "factory/fetchFactories",
//   async (_, thunkAPI) => {
//     try {
//       const response = await getFactories();

//       console.log("Factory Response:", response);

//       return response;
//     } catch (error) {
//       console.log("Factory Error:", error.response);

//       return thunkAPI.rejectWithValue(
//         error.response?.data?.message ||
//         "Failed to fetch factories"
//       );
//     }
//   }
// );



// // Get Factory By Id
// export const fetchFactoryById = createAsyncThunk(
//   "factory/fetchFactoryById",
//   async (id, thunkAPI) => {
//     try {
//       return await getFactoryById(id);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error.response?.data?.message ||
//           "Failed to fetch factory"
//       );
//     }
//   }
// );



// // Create Factory
// export const createNewFactory = createAsyncThunk(
//   "factory/createNewFactory",
//   async (data, thunkAPI) => {
//     try {
//       const response = await createFactory(data);

//       thunkAPI.dispatch(fetchFactories());

//       return response;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error.response?.data?.message ||
//           "Failed to create factory"
//       );
//     }
//   }
// );



// // Update Factory
// export const updateExistingFactory = createAsyncThunk(
//   "factory/updateExistingFactory",
//   async ({ id, data }, thunkAPI) => {
//     try {
//       const response = await updateFactory(id, data);

//       thunkAPI.dispatch(fetchFactories());

//       return response;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error.response?.data?.message ||
//           "Failed to update factory"
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

//       thunkAPI.dispatch(fetchFactories());

//       return id;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error.response?.data?.message ||
//           "Failed to delete factory"
//       );
//     }
//   }
// );


//-------------------------------------------------------------------
// import { createAsyncThunk } from "@reduxjs/toolkit";

// import {
//   getFactories,
//   getFactoryById,
//   createFactory,
//   updateFactory,
//   deleteFactory,
// } from "./factoryApi";



// // GET ALL

// export const fetchFactories = createAsyncThunk(
//   "factory/fetchFactories",
//   async (_, thunkAPI) => {
//     try {
//       const response = await getFactories();

//       console.log("Factory API Response:", response);

//       return response;
//     } catch (error) {
//       console.log(error.response);

//       return thunkAPI.rejectWithValue(
//         error.response?.data?.message || "Failed to fetch factories"
//       );
//     }
//   }
// );



// // GET BY ID

// export const fetchFactoryById = createAsyncThunk(
//   "factory/fetchFactoryById",
//   async(id,thunkAPI)=>{

//     try{

//       return await getFactoryById(id);

//     }
//     catch(error){

//       return thunkAPI.rejectWithValue(
//         error.response?.data?.message ||
//         "Failed to fetch factory"
//       );

//     }

//   }
// );



// // CREATE

// export const createNewFactory = createAsyncThunk(
//   "factory/createNewFactory",
//   async(data,thunkAPI)=>{

//     try{

//       return await createFactory(data);

//     }
//     catch(error){

//       return thunkAPI.rejectWithValue(
//         error.response?.data?.message ||
//         "Failed to create factory"
//       );

//     }

//   }
// );



// // UPDATE

// export const updateExistingFactory = createAsyncThunk(
//   "factory/updateExistingFactory",
//   async({id,data},thunkAPI)=>{

//     try{

//       return await updateFactory(id,data);

//     }
//     catch(error){

//       return thunkAPI.rejectWithValue(
//         error.response?.data?.message ||
//         "Failed to update factory"
//       );

//     }

//   }
// );



// // DELETE

// export const removeFactory = createAsyncThunk(
//   "factory/removeFactory",
//   async(id,thunkAPI)=>{

//     try{

//       await deleteFactory(id);

//       return id;

//     }
//     catch(error){

//       return thunkAPI.rejectWithValue(
//         error.response?.data?.message ||
//         "Failed to delete factory"
//       );

//     }

//   }
// );

//------------------
import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getFactories,
  getFactoryById,
  createFactory,
  updateFactory,
  deleteFactory,
} from "./factoryApi";


// GET ALL
export const fetchFactories = createAsyncThunk(
  "factory/fetchFactories",
  async (_, thunkAPI) => {
    try {
      return await getFactories();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch factories"
      );
    }
  }
);


// GET BY ID
export const fetchFactoryById = createAsyncThunk(
  "factory/fetchFactoryById",
  async (id, thunkAPI) => {
    try {
      return await getFactoryById(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch factory"
      );
    }
  }
);


// CREATE
export const createNewFactory = createAsyncThunk(
  "factory/createNewFactory",
  async (data, thunkAPI) => {
    try {
      return await createFactory(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to create factory"
      );
    }
  }
);


// UPDATE
export const updateExistingFactory = createAsyncThunk(
  "factory/updateExistingFactory",
  async ({ id, data }, thunkAPI) => {
    try {
      return await updateFactory(id, data);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to update factory"
      );
    }
  }
);


// DELETE
export const removeFactory = createAsyncThunk(
  "factory/removeFactory",
  async (id, thunkAPI) => {
    try {
      await deleteFactory(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to delete factory"
      );
    }
  }
);