import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Box,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";

import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const Topbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <AppBar position="static" elevation={0}>
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
            mr: 3,
          }}
        >
          <Avatar
            sx={{
              bgcolor: "#D5E3D8",
              color: "#1E1E1E",
              width: 40,
              height: 40,
            }}
          >
            A
          </Avatar>

          <KeyboardArrowDownOutlinedIcon
            sx={{
              ml: 1,
              color: "#666",
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
          <MenuItem disabled>
            <Typography variant="body2">
              My Profile
            </Typography>
          </MenuItem>

          <MenuItem onClick={logout}>
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;