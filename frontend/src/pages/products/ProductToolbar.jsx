import React from "react";

import {
  Box,
  TextField,
  Button,
  IconButton,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RefreshIcon from "@mui/icons-material/Refresh";


const ProductToolbar = ({
  onAdd,
  search,
  setSearch,
  onRefresh,
}) => {


  return (

    <Box
      sx={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        mb:3,
        gap:2,

        flexDirection:{
          xs:"column",
          sm:"row"
        }
      }}
    >


      {/* Search */}

      <TextField

        placeholder="Search products..."

        value={search}

        onChange={(e)=>setSearch(e.target.value)}

        size="small"

        sx={{
          width:{
            xs:"100%",
            sm:350
          },

          bgcolor:"#FFFFFF",

          borderRadius:2
        }}

      />



      {/* Actions */}

      <Box
        sx={{
          display:"flex",
          gap:1
        }}
      >

        <IconButton
          onClick={onRefresh}
          sx={{
            border:"1px solid #ECECEC",
            borderRadius:2
          }}
        >
          <RefreshIcon/>
        </IconButton>



        <Button

          variant="contained"

          startIcon={<AddIcon/>}

          onClick={onAdd}

          sx={{
            borderRadius:2,
            textTransform:"none"
          }}

        >
          Add Product

        </Button>


      </Box>


    </Box>

  );

};


export default ProductToolbar;