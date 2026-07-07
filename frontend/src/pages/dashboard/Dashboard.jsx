// import React from "react";
// import { Grid } from "@mui/material";
// import { Box } from "@mui/material";
// import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
// import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
// import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
// import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
// import PageHeader from "../../components/common/PageHeader";
// import RevenueChart from "../../components/dashboard/RevenueChart";
// import StatCard from "../../components/ui/cards/StatCard";
// import InventoryStatus from "../../components/dashboard/InventoryStatus";


// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { fetchDashboardStats } from "../../features/dashboard/dashboardSlice";

// const Dashboard = () => {


//     const dispatch = useDispatch();


//     const { stats, loading } = useSelector(
//         (state) => state.dashboard
//     );


//     useEffect(() => {

//         dispatch(fetchDashboardStats());

//     }, [dispatch]);


//     console.log("Dashboard Stats:", stats);

//  console.log("Dashboard Stats:", stats);

//     return (
//         <>
//             <PageHeader
//                 title="Good Morning 👋"
//                 subtitle="Welcome back to your ERP dashboard"
//             />

//             <Grid container spacing={3}>
//                 <Grid size={{ xs: 12, md: 6, lg: 3 }}>
//                     <StatCard
//                         title="Products"
//                         value="1,250"
//                         change="+12 this week"
//                         icon={<ShoppingBagOutlinedIcon />}
//                     />
//                 </Grid>

//                 <Grid size={{ xs: 12, md: 6, lg: 3 }}>
//                     <StatCard
//                         title="Inventory"
//                         value="18,430"
//                         change="+320 items"
//                         icon={<Inventory2OutlinedIcon />}
//                     />
//                 </Grid>

//                 <Grid size={{ xs: 12, md: 6, lg: 3 }}>
//                     <StatCard
//                         title="Sales"
//                         value="₹12.5L"
//                         change="+18%"
//                         icon={<PointOfSaleOutlinedIcon />}
//                     />
//                 </Grid>

//                 <Grid size={{ xs: 12, md: 6, lg: 3 }}>
//                     <StatCard
//                         title="Branches"
//                         value="8"
//                         change="All Active"
//                         icon={<StoreOutlinedIcon />}
//                     />
//                 </Grid>
//             </Grid>

//             <Box mt={5}>
//                 <Grid container spacing={3}>
//                     <Grid size={{ xs: 12, lg: 8 }}>
//                         <RevenueChart />
//                     </Grid>

//                     <Grid size={{ xs: 12, lg: 4 }}>
//                         <InventoryStatus />
//                     </Grid>
//                 </Grid>
//             </Box>

//         </>
//     );
// };

// export default Dashboard;



import React, { useEffect } from "react";

import { Grid, Box } from "@mui/material";

import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";

import PageHeader from "../../components/common/PageHeader";
import RevenueChart from "../../components/dashboard/RevenueChart";
import InventoryStatus from "../../components/dashboard/InventoryStatus";
import StatCard from "../../components/ui/cards/StatCard";

import { useDispatch, useSelector } from "react-redux";
import { fetchDashboardStats } from "../../features/dashboard/dashboardSlice";


const Dashboard = () => {


    const dispatch = useDispatch();


    const { stats, loading } = useSelector(
        (state) => state.dashboard
    );


    useEffect(() => {

        dispatch(fetchDashboardStats());

    }, [dispatch]);


    console.log("Dashboard Stats:", stats);


    return (
        <>

            <PageHeader
                title="Good Morning 👋"
                subtitle="Welcome back to your ERP dashboard"
            />


            <Grid container spacing={3}>


                {/* Products */}
                <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                    <StatCard

                        title="Products"

                        value={
                            stats.totalProducts || 0
                        }

                        change="Live data"

                        icon={
                            <ShoppingBagOutlinedIcon />
                        }

                    />
                </Grid>



                {/* Inventory */}
                <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                    <StatCard

                        title="Inventory"

                        value={
                            stats.totalInventory || 0
                        }

                        change="Live stock"

                        icon={
                            <Inventory2OutlinedIcon />
                        }

                    />
                </Grid>



                {/* Sales */}
                <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                    <StatCard

                        title="Sales"

                        value="Coming Soon"

                        change="Sales module pending"

                        icon={
                            <PointOfSaleOutlinedIcon />
                        }

                    />
                </Grid>



                {/* Branches */}
                <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                    <StatCard

                        title="Branches"

                        value={
                            stats.totalBranches || 0
                        }

                        change="Active branches"

                        icon={
                            <StoreOutlinedIcon />
                        }

                    />
                </Grid>


            </Grid>



            <Box mt={5}>

                <Grid container spacing={3}>


                    <Grid size={{ xs: 12, lg: 8 }}>

                        <RevenueChart />

                    </Grid>



                    <Grid size={{ xs: 12, lg: 4 }}>

                        <InventoryStatus />

                    </Grid>


                </Grid>

            </Box>


        </>
    );
};


export default Dashboard;