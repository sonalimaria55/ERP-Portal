// // import React from "react";
// // import { useSelector } from "react-redux";
// // import { Box, List, ListItem, ListItemText } from "@mui/material";
// // import { Link } from "react-router-dom";

// // const Sidebar = () => {
// //   const user = useSelector((state) => state.auth.user);

// //   return (
// //     <Box sx={{ width: 220, height: "100vh", bgcolor: "#f4f4f4", p: 2 }}>

// //       <h3>ERP Menu</h3>

// //       <List>

// //         <ListItem button component={Link} to="/app">
// //           <ListItemText primary="Dashboard" />
// //         </ListItem>

// //         {(user?.role === "admin") && (
// //           <>
// //             <ListItem button component={Link} to="/app/users">
// //               <ListItemText primary="Users" />
// //             </ListItem>

// //             <ListItem button component={Link} to="/app/branches">
// //               <ListItemText primary="Branches" />
// //             </ListItem>
// //           </>
// //         )}

// //         {(user?.role === "admin" || user?.role === "branch_admin") && (
// //           <ListItem button component={Link} to="/app/inventory">
// //             <ListItemText primary="Inventory" />
// //           </ListItem>
// //         )}

// //         <ListItem button component={Link} to="/app/sales">
// //           <ListItemText primary="Sales" />
// //         </ListItem>

// //       </List>
// //     </Box>
// //   );
// // };

// // export default Sidebar;

// // import React from "react";
// // import {
// //   Box,
// //   List,
// //   ListItemButton,
// //   ListItemIcon,
// //   ListItemText,
// //   Typography,
// //   Divider,
// // } from "@mui/material";
// // import { Link } from "react-router-dom";
// // import { useLocation } from "react-router-dom";
// // import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
// // import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
// // import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
// // import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
// // import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
// // import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
// // import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
// // import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
// // import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
// // import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

// // const menu = [
// //   {
// //     title: "Overview",
// //     items: [
// //       {
// //         name: "Dashboard",
// //         path: "/app",
// //         icon: <DashboardOutlinedIcon />,
// //       },
// //     ],
// //   },

// //   {
// //     title: "Operations",
// //     items: [
// //       {
// //         name: "Inventory",
// //          path: "/app/inventory",
// //         icon: <Inventory2OutlinedIcon />,
// //       },
// //       {
// //         name: "Categories",
// //          path: "/app/categories",
// //         icon: <CategoryOutlinedIcon />,
// //       },
// //       {
// //         name: "Products",
// //         path:"/app/products",
// //         icon: <ShoppingBagOutlinedIcon />,
// //       },
// //       {
// //         name: "Dispatch",
// //         path:"/app/dispatch",
// //         icon: <LocalShippingOutlinedIcon />,
// //       },
// //       {
// //         name: "Sales",
// //         path:"/app/sales",
// //         icon: <PointOfSaleOutlinedIcon />,
// //       },
// //     ],
// //   },

// //   {
// //     title: "Management",
// //     items: [
// //       {
// //         name: "Users",
// //         path:"/app/users",
// //         icon: <PeopleOutlineOutlinedIcon />,
// //       },
// //       {
// //         name: "Branches",

// //         path:"/app/branches",
// //         icon: <StoreOutlinedIcon />,
// //       },
// //       {
// //         name: "Reports",

// //         path:"/app/reports",
// //         icon: <AssessmentOutlinedIcon />,
// //       },
// //       {
// //         name: "Settings",
// //         path:"/app/settings",
// //         icon: <SettingsOutlinedIcon />,
// //       },
// //     ],
// //   },
// // ];

// // const Sidebar = () => {
// //   return (
// //     <Box
// //       sx={{
// //         width: 280,
// //         minHeight: "100vh",
// //         bgcolor: "#FFFFFF",
// //         borderRight: "1px solid #ECECEC",
// //         px: 3,
// //         py: 4,
// //       }}
// //     >
// //       <Typography
// //         variant="h5"
// //         sx={{
// //           fontWeight: 700,
// //           mb: 5,
// //         }}
// //       >
// //         ERP
// //       </Typography>

// //       {menu.map((section) => (
// //         <Box key={section.title} sx={{ mb: 4 }}>
// //           <Typography
// //             sx={{
// //               fontSize: 12,
// //               color: "#8A8A8A",
// //               textTransform: "uppercase",
// //               letterSpacing: 1,
// //               mb: 1.5,
// //             }}
// //           >
// //             {section.title}
// //           </Typography>

// //           <List disablePadding>
// //             {section.items.map((item) => (
// //               <ListItemButton
// //                 key={item.name}
// //                 sx={{
// //                   borderRadius: 3,
// //                   mb: 1,

// //                   "&:hover": {
// //                     bgcolor: "#D5E3D8",
// //                   },
// //                 }}
// //               >
// //                 <ListItemIcon
// //                   sx={{
// //                     color: "#555",
// //                     minWidth: 40,
// //                   }}
// //                 >
// //                   {item.icon}
// //                 </ListItemIcon>

// //                 <ListItemText primary={item.name} />
// //               </ListItemButton>
// //             ))}
// //           </List>

// //           <Divider sx={{ mt: 2 }} />

// // const location = useLocation();

// // <ListItemButton
// //   component={Link}
// //   to={item.path}
// //   selected={location.pathname === item.path}
// // ></ListItemButton>

// //         </Box>
// //       ))}
// //     </Box>

// //   );
// // };

// // export default Sidebar;

//-------------------------------------------
// import React from "react";
// import {
//   Box,
//   List,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Typography,
//   Divider,
// } from "@mui/material";

// import { Link, useLocation } from "react-router-dom";

// import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
// import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
// import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
// import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
// import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
// import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
// import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
// import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
// import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

// const menu = [
//   {
//     title: "Overview",
//     items: [
//       {
//         name: "Dashboard",
//         path: "/app",
//         icon: <DashboardOutlinedIcon />,
//       },
//     ],
//   },
//   {
//     title: "Operations",
//     items: [
//       {
//         name: "Inventory",
//         path: "/app/inventory",
//         icon: <Inventory2OutlinedIcon />,
//       },
//       {
//         name: "Categories",
//         path: "/app/categories",
//         icon: <CategoryOutlinedIcon />,
//       },
//       {
//         name: "Products",
//         path: "/app/products",
//         icon: <ShoppingBagOutlinedIcon />,
//       },
//       {
//         name: "Dispatch",
//         path: "/app/dispatch",
//         icon: <LocalShippingOutlinedIcon />,
//       },
//       {
//         name: "Sales",
//         path: "/app/sales",
//         icon: <PointOfSaleOutlinedIcon />,
//       },
//     ],
//   },
//   {
//     title: "Management",
//     items: [
//       {
//         name: "Users",
//         path: "/app/users",
//         icon: <PeopleOutlineOutlinedIcon />,
//       },
//       {
//         name: "Branches",
//         path: "/app/branches",
//         icon: <StoreOutlinedIcon />,
//       },
//       {
//         name: "Reports",
//         path: "/app/reports",
//         icon: <AssessmentOutlinedIcon />,
//       },
//       {
//         name: "Settings",
//         path: "/app/settings",
//         icon: <SettingsOutlinedIcon />,
//       },
//     ],
//   },
// ];

// const Sidebar = () => {
//   const location = useLocation();

//   return (
//     <Box
//       sx={{
//         width: 280,
//         minHeight: "100vh",
//         bgcolor: "#FFFFFF",
//         borderRight: "1px solid #ECECEC",
//         px: 3,
//         py: 4,
//       }}
//     >
//       <Typography
//         variant="h5"
//         sx={{
//           fontWeight: 700,
//           mb: 5,
//         }}
//       >
//         ERP
//       </Typography>

//       {menu.map((section) => (
//         <Box key={section.title} sx={{ mb: 4 }}>
//           <Typography
//             sx={{
//               fontSize: 12,
//               color: "#8A8A8A",
//               textTransform: "uppercase",
//               letterSpacing: 1,
//               mb: 1.5,
//             }}
//           >
//             {section.title}
//           </Typography>

//           <List disablePadding>
//             {section.items.map((item) => (
//               <ListItemButton
//                 key={item.name}
//                 component={Link}
//                 to={item.path}
//                 selected={location.pathname === item.path}
//                 sx={{
//                   borderRadius: 3,
//                   mb: 1,

//                   "&.Mui-selected": {
//                     bgcolor: "#D5E3D8",
//                     fontWeight: 600,
//                   },

//                   "&.Mui-selected:hover": {
//                     bgcolor: "#D5E3D8",
//                   },

//                   "&:hover": {
//                     bgcolor: "#EEF5F0",
//                   },
//                 }}
//               >
//                 <ListItemIcon
//                   sx={{
//                     color: location.pathname === item.path ? "#4A5A50" : "#555",
//                     minWidth: 40,
//                   }}
//                 >
//                   {item.icon}
//                 </ListItemIcon>

//                 <ListItemText primary={item.name} />
//               </ListItemButton>
//             ))}
//           </List>

//           <Divider sx={{ mt: 2 }} />
//         </Box>
//       ))}
//     </Box>
//   );
// };

// export default Sidebar;



//-----------------------------------
import React from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";

import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FactoryOutlinedIcon from "@mui/icons-material/FactoryOutlined";
const menu = [

  {
    title: "Overview",
    items: [
      {
        name: "Dashboard",
        path: "/app",
        icon: <DashboardOutlinedIcon />,
        roles: [
          "super_admin",
          "factory_admin",
          "branch_admin",
          "warehouse_manager",
          "purchase_manager",
          "sales_person",
          "online_manager",
          "accounts_manager",
          "delivery_manager",
          "customer_support",
        ],
      },
    ],
  },


  {
    title: "Operations",
    items: [

      {
        name: "Inventory",
        path: "/app/inventory",
        icon: <Inventory2OutlinedIcon />,
        roles: [
          "super_admin",
          "factory_admin",
          "branch_admin",
          "warehouse_manager",
        ],
      },


      {
        name: "Categories",
        path: "/app/categories",
        icon: <CategoryOutlinedIcon />,
        roles: [
          "super_admin",
          "factory_admin",
          "branch_admin",
        ],
      },


      {
        name: "Products",
        path: "/app/products",
        icon: <ShoppingBagOutlinedIcon />,
        roles: [
          "super_admin",
          "factory_admin",
          "branch_admin",
          "sales_person",
          "warehouse_manager",
          "online_manager",
        ],
      },


      {
        name: "Dispatch",
        path: "/app/dispatch",
        icon: <LocalShippingOutlinedIcon />,
        roles: [
          "super_admin",
          "branch_admin",
          "warehouse_manager",
          "delivery_manager",
        ],
      },


      {
        name: "Sales",
        path: "/app/sales",
        icon: <PointOfSaleOutlinedIcon />,
        roles: [
          "super_admin",
          "branch_admin",
          "sales_person",
          "online_manager",
        ],
      },

    ],
  },


  {
    title: "Management",
    items: [

      {
        name: "Users",
        path: "/app/users",
        icon: <PeopleOutlineOutlinedIcon />,
        roles: [
          "super_admin",
          "factory_admin",
          "branch_admin",
        ],
      },

      {
        name: "Factories",
        path: "/app/factories",
        icon: <FactoryOutlinedIcon />,
        roles: [
          "super_admin",
        ],
      },


      {
        name: "Branches",
        path: "/app/branches",
        icon: <StoreOutlinedIcon />,
        roles: [
          "super_admin",
          "factory_admin",
        ],
      },


      {
        name: "Reports",
        path: "/app/reports",
        icon: <AssessmentOutlinedIcon />,
        roles: [
          "super_admin",
          "factory_admin",
          "branch_admin",
          "accounts_manager",
        ],
      },


      {
        name: "Settings",
        path: "/app/settings",
        icon: <SettingsOutlinedIcon />,
        roles: [
          "super_admin",
        ],
      },

    ],
  },

];

const Sidebar = () => {

  const location = useLocation();

  const user = useSelector(
    (state) => state.auth.user
  );


  const role = user?.role;


  return (
    <Box
      sx={{
        width: 280,
        minHeight: "100vh",
        bgcolor: "#FFFFFF",
        borderRight: "1px solid #ECECEC",
        px: 3,
        py: 4,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          mb: 5,
        }}
      >
        ERP
      </Typography>

      {menu.map((section) => (

        <Box key={section.title} sx={{ mb: 4 }}>

          <Typography
            sx={{
              fontSize: 12,
              color: "#8A8A8A",
              textTransform: "uppercase",
              letterSpacing: 1,
              mb: 1.5,
            }}
          >
            {section.title}
          </Typography>


          <List disablePadding>

            {section.items
              .filter((item) => item.roles.includes(role))
              .map((item) => (

                <ListItemButton
                  key={item.name}
                  component={Link}
                  to={item.path}
                  selected={
                    location.pathname === item.path
                  }
                  sx={{

                    borderRadius: 3,

                    mb: 1,


                    "&.Mui-selected": {
                      bgcolor: "#D5E3D8",
                      fontWeight: 600,
                    },


                    "&.Mui-selected:hover": {
                      bgcolor: "#D5E3D8",
                    },


                    "&:hover": {
                      bgcolor: "#EEF5F0",
                    },

                  }}
                >


                  <ListItemIcon

                    sx={{

                      color:
                        location.pathname === item.path
                          ? "#4A5A50"
                          : "#555",

                      minWidth: 40,

                    }}

                  >

                    {item.icon}

                  </ListItemIcon>



                  <ListItemText

                    primary={item.name}

                  />


                </ListItemButton>


              ))}


          </List>


          <Divider sx={{ mt: 2 }} />


        </Box>

      ))}
    </Box>
  );
};

export default Sidebar;