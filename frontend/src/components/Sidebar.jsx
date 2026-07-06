// import React from "react";
// import { useSelector } from "react-redux";
// import { Box, List, ListItem, ListItemText } from "@mui/material";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   const user = useSelector((state) => state.auth.user);

//   return (
//     <Box sx={{ width: 220, height: "100vh", bgcolor: "#f4f4f4", p: 2 }}>

//       <h3>ERP Menu</h3>

//       <List>

//         <ListItem button component={Link} to="/app">
//           <ListItemText primary="Dashboard" />
//         </ListItem>

//         {(user?.role === "admin") && (
//           <>
//             <ListItem button component={Link} to="/app/users">
//               <ListItemText primary="Users" />
//             </ListItem>

//             <ListItem button component={Link} to="/app/branches">
//               <ListItemText primary="Branches" />
//             </ListItem>
//           </>
//         )}

//         {(user?.role === "admin" || user?.role === "branch_admin") && (
//           <ListItem button component={Link} to="/app/inventory">
//             <ListItemText primary="Inventory" />
//           </ListItem>
//         )}

//         <ListItem button component={Link} to="/app/sales">
//           <ListItemText primary="Sales" />
//         </ListItem>

//       </List>
//     </Box>
//   );
// };

// export default Sidebar;

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

const menu = [
  {
    title: "Overview",
    items: [
      {
        name: "Dashboard",
        icon: <DashboardOutlinedIcon />,
      },
    ],
  },

  {
    title: "Operations",
    items: [
      {
        name: "Inventory",
        icon: <Inventory2OutlinedIcon />,
      },
      {
        name: "Categories",
        icon: <CategoryOutlinedIcon />,
      },
      {
        name: "Products",
        icon: <ShoppingBagOutlinedIcon />,
      },
      {
        name: "Dispatch",
        icon: <LocalShippingOutlinedIcon />,
      },
      {
        name: "Sales",
        icon: <PointOfSaleOutlinedIcon />,
      },
    ],
  },

  {
    title: "Management",
    items: [
      {
        name: "Users",
        icon: <PeopleOutlineOutlinedIcon />,
      },
      {
        name: "Branches",
        icon: <StoreOutlinedIcon />,
      },
      {
        name: "Reports",
        icon: <AssessmentOutlinedIcon />,
      },
      {
        name: "Settings",
        icon: <SettingsOutlinedIcon />,
      },
    ],
  },
];

const Sidebar = () => {
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
            {section.items.map((item) => (
              <ListItemButton
                key={item.name}
                sx={{
                  borderRadius: 3,
                  mb: 1,

                  "&:hover": {
                    bgcolor: "#D5E3D8",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: "#555",
                    minWidth: 40,
                  }}
                >
                  {item.icon}
                </ListItemIcon>

                <ListItemText primary={item.name} />
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