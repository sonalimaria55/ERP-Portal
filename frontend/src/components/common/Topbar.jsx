// // import React from "react";
// // import {
// //   AppBar,
// //   Toolbar,
// //   IconButton,
// //   Avatar,
// //   Box,
// //   Typography,
// //   Menu,
// //   MenuItem,
// // } from "@mui/material";

// // import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
// // import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

// // const Topbar = () => {
// //   const [anchorEl, setAnchorEl] = React.useState(null);

// //   const openMenu = (event) => {
// //     setAnchorEl(event.currentTarget);
// //   };

// //   const closeMenu = () => {
// //     setAnchorEl(null);
// //   };

// //   const logout = () => {
// //     localStorage.clear();
// //     window.location.href = "/";
// //   };

// //   return (
// //     <AppBar position="static" elevation={0}>
// //       <Toolbar
// //         sx={{
// //           justifyContent: "flex-end",
// //           height: 72,
// //         }}
// //       >
// //         <Box
// //           onClick={openMenu}
// //           sx={{
// //             display: "flex",
// //             alignItems: "center",
// //             cursor: "pointer",
// //             mr: 3,
// //           }}
// //         >
// //           <Avatar
// //             sx={{
// //               bgcolor: "#D5E3D8",
// //               color: "#1E1E1E",
// //               width: 40,
// //               height: 40,
// //             }}
// //           >
// //             A
// //           </Avatar>

// //           <KeyboardArrowDownOutlinedIcon
// //             sx={{
// //               ml: 1,
// //               color: "#666",
// //             }}
// //           />
// //         </Box>

// //         <IconButton onClick={logout}>
// //           <LogoutOutlinedIcon />
// //         </IconButton>

// //         <Menu
// //           anchorEl={anchorEl}
// //           open={Boolean(anchorEl)}
// //           onClose={closeMenu}
// //         >
// //           <MenuItem disabled>
// //             <Typography variant="body2">
// //               My Profile
// //             </Typography>
// //           </MenuItem>

// //           <MenuItem onClick={logout}>
// //             Logout
// //           </MenuItem>
// //         </Menu>
// //       </Toolbar>
// //     </AppBar>
// //   );
// // };

// // export default Topbar;
// //----------------------------------------------------------------
// import React from "react";

// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Avatar,
//   Box,
//   Typography,
//   Menu,
//   MenuItem,
// } from "@mui/material";

// import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
// import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";


// const Topbar = () => {

//   const [anchorEl, setAnchorEl] = React.useState(null);


//   const openMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };


//   const closeMenu = () => {
//     setAnchorEl(null);
//   };


//   const logout = () => {
//     localStorage.clear();
//     window.location.href = "/";
//   };


//   return (

//     <AppBar
//       position="static"
//       elevation={0}
//       sx={{
//         bgcolor:"background.paper",
//         color:"text.primary",
//         borderBottom:"1px solid",
//         borderColor:"divider"
//       }}
//     >

//       <Toolbar
//         sx={{
//           justifyContent:"flex-end",
//           height:72
//         }}
//       >


//         {/* Profile */}

//         <Box
//           onClick={openMenu}
//           sx={{
//             display:"flex",
//             alignItems:"center",
//             cursor:"pointer",
//             mr:3
//           }}
//         >

//           <Avatar
//             sx={{
//               bgcolor:"primary.light",
//               color:"primary.contrastText",
//               width:40,
//               height:40
//             }}
//           >
//             A
//           </Avatar>


//           <KeyboardArrowDownOutlinedIcon
//             sx={{
//               ml:1,
//               color:"text.secondary"
//             }}
//           />


//         </Box>



//         {/* Logout */}

//         <IconButton
//           onClick={logout}
//           color="inherit"
//         >
//           <LogoutOutlinedIcon/>
//         </IconButton>



//         {/* Menu */}

//         <Menu
//           anchorEl={anchorEl}
//           open={Boolean(anchorEl)}
//           onClose={closeMenu}
//         >

//           <MenuItem disabled>

//             <Typography variant="body2">
//               My Profile
//             </Typography>

//           </MenuItem>


//           <MenuItem onClick={logout}>
//             Logout
//           </MenuItem>


//         </Menu>


//       </Toolbar>

//     </AppBar>

//   );

// };


// export default Topbar;


//----------------------------------------------------
import React from "react";

import { useSelector } from "react-redux";

import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Box,
  Typography,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";

import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const Topbar = () => {
  const { user } = useSelector((state) => state.auth);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const firstLetter =
    user?.name?.charAt(0).toUpperCase() || "U";

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "flex-end",
          height: 72,
        }}
      >
        <Box
          onClick={openMenu}
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            mr: 2,
          }}
        >
          <Avatar
            sx={{
              bgcolor: "primary.main",
              width: 40,
              height: 40,
            }}
          >
            {firstLetter}
          </Avatar>

          <Box sx={{ ml: 1.5 }}>
            <Typography
              variant="subtitle2"
              fontWeight={600}
            >
              {user?.name}
            </Typography>

            <Typography
              variant="caption"
              color="text.secondary"
            >
              {user?.role
                ?.replace(/_/g, " ")
                .replace(/\b\w/g, (c) => c.toUpperCase())}
            </Typography>
          </Box>

          <KeyboardArrowDownOutlinedIcon
            sx={{
              ml: 1,
              color: "text.secondary",
            }}
          />
        </Box>

        <IconButton onClick={logout}>
          <LogoutOutlinedIcon />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={closeMenu}
        >
          <Box sx={{ px: 2, py: 1 }}>
            <Typography fontWeight={600}>
              {user?.name}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              {user?.email}
            </Typography>

            <Typography
              variant="caption"
              color="primary"
            >
              {user?.role
                ?.replace(/_/g, " ")
                .replace(/\b\w/g, (c) => c.toUpperCase())}
            </Typography>
          </Box>

          <Divider />

          <MenuItem disabled>
            My Profile
          </MenuItem>

          <MenuItem disabled>
            Change Password
          </MenuItem>

          <Divider />

          <MenuItem onClick={logout}>
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;