import React from "react";

import {
  Box,
  Button,
  TextField,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

const SupplierToolbar = ({
  search = "",
  onSearchChange = () => {},
  onAddSupplier = () => {},
}) => {
  return (
    <Box
      sx={{
        mb: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
      }}
    >
      <TextField
        size="small"
        placeholder="Search suppliers..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        sx={{
          width: 350,
        }}
      />

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={onAddSupplier}
      >
        Add Supplier
      </Button>
    </Box>
  );
};

export default SupplierToolbar;