import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDashboardStats } from "./dashboardApi";


export const fetchDashboardStats =
createAsyncThunk(
    "dashboard/fetchStats",
    async()=>{

        return await getDashboardStats();

    }
);



const dashboardSlice = createSlice({

    name:"dashboard",

    initialState:{
        stats:{},
        loading:false,
        error:null
    },


    reducers:{},


    extraReducers:(builder)=>{

        builder

        .addCase(
            fetchDashboardStats.pending,
            (state)=>{
                state.loading=true;
            }
        )


        .addCase(
            fetchDashboardStats.fulfilled,
            (state,action)=>{

                state.loading=false;

                state.stats =
                action.payload.data;

            }
        )


        .addCase(
            fetchDashboardStats.rejected,
            (state,action)=>{

                state.loading=false;

                state.error =
                action.error.message;

            }
        );

    }

});


export default dashboardSlice.reducer;



// value="1,250"
// value={stats.totalProducts}
// value="18,430"
// value={stats.totalInventory}