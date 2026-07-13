// import React from "react";

// import {
//   Box,
//   Button,
//   TextField,
//   InputAdornment,
//   IconButton,
// } from "@mui/material";

// import AddIcon from "@mui/icons-material/Add";
// import SearchIcon from "@mui/icons-material/Search";
// import RefreshIcon from "@mui/icons-material/Refresh";

// const FactoryToolbar = ({
//   search,
//   setSearch,
//   onAdd,
//   onRefresh,
// }) => {
//   return (
//     <Box
//       display="flex"
//       justifyContent="space-between"
//       alignItems="center"
//       mb={3}
//       gap={2}
//       flexWrap="wrap"
//     >
//       <TextField
//         placeholder="Search factory..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         size="small"
//         sx={{ width: 320 }}
//         InputProps={{
//           startAdornment: (
//             <InputAdornment position="start">
//               <SearchIcon />
//             </InputAdornment>
//           ),
//         }}
//       />

//       <Box display="flex" gap={1}>
//         <IconButton
//           onClick={onRefresh}
//           sx={{
//             border: "1px solid #ddd",
//           }}
//         >
//           <RefreshIcon />
//         </IconButton>

//         <Button
//           variant="contained"
//           startIcon={<AddIcon />}
//           onClick={onAdd}
//           sx={{
//             bgcolor: "#D5E3D8",
//             color: "#000",
//             "&:hover": {
//               bgcolor: "#C7D7CB",
//             },
//           }}
//         >
//           Add Factory
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default FactoryToolbar;


import React, { useEffect, useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Grid,
} from "@mui/material";


const initialState = {
  factoryName: "",
  factoryCode: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
};


const FactoryDialog = ({
  open,
  onClose,
  onSubmit,
  selectedFactory,
}) => {

  const [formData, setFormData] = useState(initialState);


  useEffect(() => {

    if(selectedFactory){

      setFormData({
        factoryName: selectedFactory.factoryName || "",
        factoryCode: selectedFactory.factoryCode || "",
        phone: selectedFactory.phone || "",
        email: selectedFactory.email || "",
        address: selectedFactory.address || "",
        city: selectedFactory.city || "",
        state: selectedFactory.state || "",
        pincode: selectedFactory.pincode || "",
      });

    } else {

      setFormData(initialState);

    }

  }, [selectedFactory, open]);



  const handleChange = (e)=>{

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };



  const handleSubmit = ()=>{

    onSubmit(formData);

  };



  return (

    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >

      <DialogTitle>
        {selectedFactory
          ? "Edit Factory"
          : "Add Factory"}
      </DialogTitle>


      <DialogContent>

        <Grid
          container
          spacing={2}
          sx={{mt:1}}
        >

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Factory Name"
              name="factoryName"
              value={formData.factoryName}
              onChange={handleChange}
            />
          </Grid>


          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Factory Code"
              name="factoryCode"
              value={formData.factoryCode}
              onChange={handleChange}
              disabled={!!selectedFactory}
            />
          </Grid>


          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </Grid>


          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>


          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </Grid>


          <Grid item xs={4}>
            <TextField
              fullWidth
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </Grid>


          <Grid item xs={4}>
            <TextField
              fullWidth
              label="State"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
          </Grid>


          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
            />
          </Grid>


        </Grid>


      </DialogContent>


      <DialogActions>

        <Button onClick={onClose}>
          Cancel
        </Button>


        <Button
          variant="contained"
          onClick={handleSubmit}
        >
          {selectedFactory
            ? "Update"
            : "Create"}
        </Button>

      </DialogActions>


    </Dialog>

  );
};


export default FactoryDialog;