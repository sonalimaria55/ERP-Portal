// // import React from "react";
// // import { Box, Typography } from "@mui/material";

// // const PageHeader = ({
// //   title,
// //   subtitle,
// // }) => {
// //   return (
// //     <Box sx={{ mb: 4 }}>
// //       <Typography
// //         variant="h4"
// //         sx={{
// //           fontWeight: 600,
// //         }}
// //       >
// //         {title}
// //       </Typography>

// //       <Typography
// //         sx={{
// //           color: "#777",
// //           mt: 1,
// //         }}
// //       >
// //         {subtitle}
// //       </Typography>
// //     </Box>
// //   );
// // };

// // export default PageHeader;

// //==============================================================

// // import React from "react";
// // import { Box, Typography } from "@mui/material";

// // const PageHeader = ({ title, subtitle }) => {
// //   return (
// //     <Box mb={4}>
// //       <Typography
// //         variant="h4"
// //         sx={{
// //           fontWeight:700,
// //         }}
// //       >
// //         {title}
// //       </Typography>

// //       <Typography
// //         color="text.secondary"
// //       >
// //         {subtitle}
// //       </Typography>
// //     </Box>
// //   );
// // };

// // export default PageHeader;
// //----------------------------------------------------------------

// import React from "react";
// import { Box, Typography } from "@mui/material";

// const PageHeader = ({ title, subtitle }) => {
//   return (
//     <Box sx={{ mb: 4 }}>
//       <Typography
//         variant="h4"
//         sx={{
//           fontWeight: 700,
//         }}
//       >
//         {title}
//       </Typography>

//       <Typography
//         color="text.secondary"
//       >
//         {subtitle}
//       </Typography>
//     </Box>
//   );
// };

// export default PageHeader;
import React from "react";
import {
  Box,
  Typography,
} from "@mui/material";

const PageHeader = ({
  title,
  subtitle,
  action,
}) => {
  return (
    <Box
      sx={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        mb:4,
      }}
    >

      <Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight:700,
            color:"#1E1E1E",
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            mt:1,
            color:"#8A8A8A",
          }}
        >
          {subtitle}
        </Typography>
      </Box>


      {action}

    </Box>
  );
};

export default PageHeader;