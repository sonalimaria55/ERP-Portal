import React from "react";
import {
  Paper,
  InputBase,
  Box,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        alignItems: "center",
        borderRadius: 4,
        border: "1px solid #ECECEC",
        px: 2,
        py: 1,
        width: 450,
      }}
    >
      <SearchIcon
        sx={{
          color: "#777",
          mr: 1,
        }}
      />

      <InputBase
        placeholder="Search products, inventory, dispatch..."
        sx={{
          flex: 1,
        }}
      />
    </Paper>
  );
};

export default SearchBar;