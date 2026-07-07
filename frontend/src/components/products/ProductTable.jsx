// import React from "react";

// import {
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Chip,
//   IconButton,
//   Typography,
//   CircularProgress,
//   Box,
// } from "@mui/material";

// import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
// import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

// const ProductTable = ({
//   products = [],
//   loading = false,
//   onEdit,
//   onDelete,
// }) => {
//   if (loading) {
//     return (
//       <Box
//         sx={{
//           py: 8,
//           display: "flex",
//           justifyContent: "center",
//         }}
//       >
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <TableContainer
//       component={Paper}
//       sx={{
//         borderRadius: 3,
//       }}
//     >
//       <Table>

//         <TableHead>
//           <TableRow>

//             <TableCell>
//               <strong>Product</strong>
//             </TableCell>

//             <TableCell>
//               <strong>SKU</strong>
//             </TableCell>

//             <TableCell>
//               <strong>Category</strong>
//             </TableCell>

//             <TableCell align="right">
//               <strong>Factory Stock</strong>
//             </TableCell>

//             <TableCell align="right">
//               <strong>Purchase Price</strong>
//             </TableCell>

//             <TableCell align="right">
//               <strong>Selling Price</strong>
//             </TableCell>

//             <TableCell align="center">
//               <strong>Status</strong>
//             </TableCell>

//             <TableCell align="center">
//               <strong>Actions</strong>
//             </TableCell>

//           </TableRow>
//         </TableHead>

//         <TableBody>

//           {products.length === 0 ? (
//             <TableRow>

//               <TableCell
//                 colSpan={8}
//                 align="center"
//               >
//                 <Typography
//                   sx={{
//                     py: 4,
//                   }}
//                 >
//                   No Products Found
//                 </Typography>
//               </TableCell>

//             </TableRow>
//           ) : (
//             products.map((product) => (

//               <TableRow
//                 hover
//                 key={product._id}
//               >

//                 <TableCell>
//                   {product.productName}
//                 </TableCell>

//                 <TableCell>
//                   {product.sku}
//                 </TableCell>

//                 <TableCell>
//                   {product.category?.categoryName}
//                 </TableCell>

//                 <TableCell align="right">
//                   {product.factoryStock}
//                 </TableCell>

//                 <TableCell align="right">
//                   ₹{product.purchasePrice}
//                 </TableCell>

//                 <TableCell align="right">
//                   ₹{product.sellingPrice}
//                 </TableCell>

//                 <TableCell align="center">

//                   <Chip
//                     label={
//                       product.isActive
//                         ? "Active"
//                         : "Inactive"
//                     }
//                     color={
//                       product.isActive
//                         ? "success"
//                         : "error"
//                     }
//                     size="small"
//                   />

//                 </TableCell>

//                 <TableCell align="center">

//                   <IconButton
//                     color="primary"
//                     onClick={() => onEdit(product)}
//                   >
//                     <EditOutlinedIcon />
//                   </IconButton>

//                   <IconButton
//                     color="error"
//                     onClick={() => onDelete(product)}
//                   >
//                     <DeleteOutlineOutlinedIcon />
//                   </IconButton>

//                 </TableCell>

//               </TableRow>

//             ))
//           )}

//         </TableBody>

//       </Table>
//     </TableContainer>
//   );
// };

// export default ProductTable;
import React, { useState } from "react";
import {
  Box,
  Chip,
  IconButton,
  Tooltip,
} from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { useSelector } from "react-redux";

import ProductDeleteDialog from "./ProductDeleteDialog";

const ProductTable = ({ onEdit }) => {
  const { products = [], loading } = useSelector(
    (state) => state.product
  );

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDeleteClick = (product) => {
    setSelectedProduct(product);
    setDeleteOpen(true);
  };

  const handleCloseDelete = () => {
    setDeleteOpen(false);
    setSelectedProduct(null);
  };

  const columns = [
    {
      field: "image",
      headerName: "Image",
      width: 90,
      sortable: false,
      renderCell: (params) => (
        <Box
          component="img"
          src={
            params.row.image ||
            "https://via.placeholder.com/40"
          }
          alt={params.row.name}
          sx={{
            width: 40,
            height: 40,
            borderRadius: 1,
            objectFit: "cover",
            mt: 0.5,
          }}
        />
      ),
    },
    {
      field: "sku",
      headerName: "SKU",
      width: 130,
    },
    {
      field: "name",
      headerName: "Product",
      flex: 1,
      minWidth: 200,
    },
    {
      field: "category",
      headerName: "Category",
      width: 150,
    },
    {
      field: "brand",
      headerName: "Brand",
      width: 150,
    },
    {
      field: "price",
      headerName: "Price",
      width: 120,
      renderCell: (params) => `₹${params.value}`,
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 110,
    },
    {
      field: "status",
      headerName: "Status",
      width: 140,
      renderCell: (params) => (
        <Chip
          size="small"
          label={params.value}
          color={
            params.value === "Active"
              ? "success"
              : "default"
          }
        />
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 130,
      sortable: false,
      renderCell: (params) => (
        <>
          <Tooltip title="Edit">
            <IconButton
              color="primary"
              onClick={() => onEdit(params.row)}
            >
              <EditIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Delete">
            <IconButton
              color="error"
              onClick={() =>
                handleDeleteClick(params.row)
              }
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </>
      ),
    },
  ];

  return (
    <>
      <Box
        sx={{
          height: 600,
          width: "100%",
        }}
      >
        <DataGrid
          rows={products}
          columns={columns}
          loading={loading}
          pageSizeOptions={[10, 25, 50]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          getRowId={(row) => row._id}
          disableRowSelectionOnClick
        />
      </Box>

      <ProductDeleteDialog
        open={deleteOpen}
        onClose={handleCloseDelete}
        product={selectedProduct}
      />
    </>
  );
};

export default ProductTable;