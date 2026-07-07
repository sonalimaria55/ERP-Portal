import React from "react";
import { Paper, Typography, Box } from "@mui/material";

const InventoryStatus = () => {
  return (
    <Paper
      sx={{
        p:3,
        borderRadius:3,
      }}
    >
      <Typography variant="h6">
        Inventory Status
      </Typography>

      <Box mt={2}>
        <Typography>
          Total Products: 0
        </Typography>

        <Typography>
          Low Stock Items: 0
        </Typography>
      </Box>

    </Paper>
  );
};

export default InventoryStatus;