// import React from "react";

// import {
//   Paper,
//   Grid,
//   TextField,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Button,
// } from "@mui/material";

// import AddIcon from "@mui/icons-material/Add";

// const ProductToolbar = ({
//   search,
//   setSearch,
//   category,
//   setCategory,
//   status,
//   setStatus,
//   categories,
//   onAdd,
// }) => {
//   return (
//     <Paper
//       elevation={2}
//       sx={{
//         p: 3,
//         mb: 3,
//         borderRadius: 3,
//       }}
//     >
//       <Grid container spacing={2} alignItems="center">
//         {/* Search */}
//         <Grid size={{ xs: 12, md: 4 }}>
//           <TextField
//             fullWidth
//             label="Search Product"
//             placeholder="Name / SKU / Barcode"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//         </Grid>

//         {/* Category */}
//         <Grid size={{ xs: 12, md: 3 }}>
//           <FormControl fullWidth>
//             <InputLabel>Category</InputLabel>

//             <Select
//               value={category}
//               label="Category"
//               onChange={(e) => setCategory(e.target.value)}
//             >
//               <MenuItem value="">
//                 All Categories
//               </MenuItem>

//               {categories.map((item) => (
//                 <MenuItem
//                   key={item._id}
//                   value={item._id}
//                 >
//                   {item.categoryName}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Grid>

//         {/* Status */}
//         <Grid size={{ xs: 12, md: 2 }}>
//           <FormControl fullWidth>
//             <InputLabel>Status</InputLabel>

//             <Select
//               value={status}
//               label="Status"
//               onChange={(e) => setStatus(e.target.value)}
//             >
//               <MenuItem value="">
//                 All
//               </MenuItem>

//               <MenuItem value="true">
//                 Active
//               </MenuItem>

//               <MenuItem value="false">
//                 Inactive
//               </MenuItem>
//             </Select>
//           </FormControl>
//         </Grid>

//         {/* Add Button */}
//         <Grid
//           size={{ xs: 12, md: 3 }}
//           sx={{
//             display: "flex",
//             justifyContent: {
//               xs: "stretch",
//               md: "flex-end",
//             },
//           }}
//         >
//           <Button
//             fullWidth
//             variant="contained"
//             startIcon={<AddIcon />}
//             onClick={onAdd}
//             sx={{
//               height: 56,
//             }}
//           >
//             Add Product
//           </Button>
//         </Grid>
//       </Grid>
//     </Paper>
//   );
// };

// export default ProductToolbar;
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

import { useDispatch } from "react-redux";
import { fetchProducts } from "../../features/products/productSlice";

const ProductToolbar = ({ onAdd }) => {
    const dispatch = useDispatch();

    const [search, setSearch] = useState("");

    const handleRefresh = () => {
        dispatch(fetchProducts());
    };

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
                    onClick={handleRefresh}
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