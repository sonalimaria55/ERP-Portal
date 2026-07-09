import React from "react";

import {
  Box,
  Button,
  CircularProgress,
} from "@mui/material";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import DataTable from "../common/DataTable";


const ProductTable = ({
  products,
  loading,
  onEdit,
}) => {


  const columns = [
    {
      field:"name",
      header:"Product Name",
    },
    {
      field:"sku",
      header:"SKU",
    },
    {
      field:"category",
      header:"Category",
    },
    {
      field:"price",
      header:"Price",
    },
    {
      field:"stock",
      header:"Stock",
    },
  ];



  if (loading) {

    return (

      <Box
        sx={{
          display:"flex",
          justifyContent:"center",
          py:5
        }}
      >
        <CircularProgress />

      </Box>

    );

  }



  return (

    <DataTable

      columns={columns}

      rows={products}

      renderActions={(product)=>(

        <Button

          size="small"

          startIcon={<EditOutlinedIcon/>}

          onClick={()=>onEdit(product)}

          sx={{
            textTransform:"none"
          }}

        >
          Edit

        </Button>

      )}

    />

  );

};


export default ProductTable;