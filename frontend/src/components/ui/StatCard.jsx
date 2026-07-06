import React from "react";
import {
  Paper,
  Box,
  Typography,
} from "@mui/material";

const StatCard = ({
  title,
  value,
  change,
  icon,
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 5,
        border: "1px solid #ECECEC",
        transition: ".25s",

        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 12px 30px rgba(0,0,0,.08)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography
          sx={{
            color: "#777",
            fontSize: 15,
          }}
        >
          {title}
        </Typography>

        <Box
          sx={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            bgcolor: "#D5E3D8",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {icon}
        </Box>
      </Box>

      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
        }}
      >
        {value}
      </Typography>

      <Typography
        sx={{
          color: "#2E7D32",
          mt: 1,
          fontSize: 14,
        }}
      >
        {change}
      </Typography>
    </Paper>
  );
};

export default StatCard;