import React, { useEffect, useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Tabs,
  Tab,
  Box,
} from "@mui/material";


const initialForm = {
  name:"",
  sku:"",
  category:"",
  price:"",
  stock:"",
};



const ProductDialog = ({
  open,
  onClose,
  onSave,
  product,
}) => {


  const [tab,setTab] = useState(0);

  const [form,setForm] = useState(initialForm);



  useEffect(()=>{

    if(product){

      setForm({
        name:product.name || "",
        sku:product.sku || "",
        category:product.category || "",
        price:product.price || "",
        stock:product.stock || "",
      });

    }
    else{

      setForm(initialForm);

    }

  },[product,open]);




  const handleChange = (e)=>{

    setForm({
      ...form,
      [e.target.name]:e.target.value
    });

  };




  const handleSubmit = ()=>{

    onSave(form);

  };



  return (

    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
    >


      <DialogTitle>

        {product ? "Edit Product" : "Add Product"}

      </DialogTitle>



      <Tabs
        value={tab}
        onChange={(e,value)=>setTab(value)}
        sx={{
          px:3
        }}
      >

        <Tab label="Basic"/>

        <Tab label="Pricing"/>

        <Tab label="Inventory"/>

        <Tab label="Images"/>


      </Tabs>




      <DialogContent>


        <Box mt={2}>


          {tab === 0 && (

            <Box>

              <input
                placeholder="Product Name"
                name="name"
                value={form.name}
                onChange={handleChange}
              />


              <input
                placeholder="SKU"
                name="sku"
                value={form.sku}
                onChange={handleChange}
              />


            </Box>

          )}



          {tab === 1 && (

            <input
              placeholder="Price"
              name="price"
              value={form.price}
              onChange={handleChange}
            />

          )}



          {tab === 2 && (

            <input
              placeholder="Stock"
              name="stock"
              value={form.stock}
              onChange={handleChange}
            />

          )}



          {tab === 3 && (

            <Box>
              Image Upload Coming...
            </Box>

          )}


        </Box>


      </DialogContent>




      <DialogActions>

        <Button
          onClick={onClose}
        >
          Cancel
        </Button>


        <Button
          variant="contained"
          onClick={handleSubmit}
        >
          Save
        </Button>


      </DialogActions>



    </Dialog>

  );

};


export default ProductDialog;