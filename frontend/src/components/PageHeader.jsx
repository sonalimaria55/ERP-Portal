import React from "react";
import { Box, Typography } from "@mui/material";

const PageHeader = ({
  title,
  subtitle,
}) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          color: "#777",
          mt: 1,
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default PageHeader;