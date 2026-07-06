import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";

import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import SearchBar from "../SearchBar";

const AppLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "#F8F7F4",
      }}
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Top Navigation */}
        <Topbar />

        {/* Page Content */}
        <Container
          maxWidth={false}
          sx={{
            py: 4,
            px: 5,
          }}
        >
          {/* Search Row */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 4,
            }}
          >
            <SearchBar />

            {/* We'll add Branch Selector here later */}
          </Box>

          {/* Dynamic Pages */}
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};

export default AppLayout;