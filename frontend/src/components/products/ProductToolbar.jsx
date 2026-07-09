import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";

const ProductToolbar = ({
  onAdd,
  search,
  setSearch,
  onRefresh,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
        mb: 3,
        flexWrap: "wrap",
      }}
    >
      <TextField
        size="small"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{
          minWidth: 300,
          maxWidth: 400,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <Box
        sx={{
          display: "flex",
          gap: 2,
        }}
      >
        <Button
          variant="outlined"
          startIcon={<RefreshIcon />}
          onClick={onRefresh}
        >
          Refresh
        </Button>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={onAdd}
          sx={{
            bgcolor: "#4F6F52",
            "&:hover": {
              bgcolor: "#3F5D42",
            },
          }}
        >
          Add Product
        </Button>
      </Box>
    </Box>
  );
};

export default ProductToolbar;