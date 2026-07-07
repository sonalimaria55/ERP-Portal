// import React from "react";
// import { useSelector } from "react-redux";

// const Dashboard = () => {
//   const user = useSelector((state) => state.auth.user);

//   return (
//     <div>
//       <h1>Dashboard</h1>

//       <h3>Welcome: {user?.name}</h3>
//       <p>Role: {user?.role}</p>

//       {/* ADMIN VIEW */}
//       {user?.role === "admin" && (
//         <div>
//           <h2>Admin Panel</h2>
//           <p>Manage everything</p>
//         </div>
//       )}

//       {/* BRANCH ADMIN VIEW */}
//       {user?.role === "branch_admin" && (
//         <div>
//           <h2>Branch Panel</h2>
//           <p>Manage branch operations</p>
//         </div>
//       )}

//       {/* SALES VIEW */}
//       {user?.role === "sales" && (
//         <div>
//           <h2>Sales Panel</h2>
//           <p>Only sales features</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;

//------------------------------------------------------------------------------------------------
// import React from "react";
// import { Grid } from "@mui/material";
// import { Box } from "@mui/material";
// import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
// import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
// import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
// import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";

// import PageHeader from "../common/PageHeader"
// import StatCard from "../ui/cards/StatCard"
// import RevenueChart from "./RevenueChart";
// import InventoryStatus from "./InventoryStatus";

// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { fetchDashboardStats } from "../../features/dashboard/dashboardSlice";

// const dispatch = useDispatch();

// const { stats, loading } = useSelector(
//   (state) => state.dashboard
// );


// useEffect(() => {

//   dispatch(fetchDashboardStats());

// }, [dispatch]);

// const Dashboard = () => {
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
//                           value={stats.totalProducts}
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
import { useDispatch, useSelector } from "react-redux";

import { Grid, Box } from "@mui/material";

import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";

import PageHeader from "../common/PageHeader";
import StatCard from "../ui/cards/StatCard";
import RevenueChart from "./RevenueChart";
import InventoryStatus from "./InventoryStatus";

import { fetchDashboardStats } from "../../features/dashboard/dashboardSlice";


const Dashboard = () => {

    const dispatch = useDispatch();

    const { stats, loading } = useSelector(
        (state) => state.dashboard
    );


    console.log("Dashboard Stats:", stats);


    useEffect(() => {
        dispatch(fetchDashboardStats());
    }, [dispatch]);



    return (
        <>
            <PageHeader
                title="Good Morning 👋"
                subtitle="Welcome back to your ERP dashboard"
            />


            <Grid container spacing={3}>


                <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                    <StatCard
                        title="Products"
                        value={stats.totalProducts || 0}
                        change="Live data"
                        icon={<ShoppingBagOutlinedIcon />}
                    />
                </Grid>


                <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                    <StatCard
                        title="Inventory"
                        value={stats.totalInventory || 0}
                        change="Live stock"
                        icon={<Inventory2OutlinedIcon />}
                    />
                </Grid>


                <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                    <StatCard
                        title="Low Stock"
                        value={stats.lowStockItems || 0}
                        change="Requires attention"
                        icon={<Inventory2OutlinedIcon />}
                    />
                </Grid>


                <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                    <StatCard
                        title="Branches"
                        value={stats.totalBranches || 0}
                        change="Active branches"
                        icon={<StoreOutlinedIcon />}
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