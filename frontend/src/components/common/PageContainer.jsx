import React from "react";
import { Box } from "@mui/material";

const PageContainer = ({ children }) => {
  return (
    <Box
      sx={{
        py: 3,
        px: {
          xs: 2,
          md: 5,
        },
      }}
    >
      {children}
    </Box>
  );
};

export default PageContainer;

// const PageContainer = ({ children }) => {
//   return (
//     <Box sx={{ p: 3 }}>
//       {children}
//     </Box>
//   );
// };

// export default PageContainer;