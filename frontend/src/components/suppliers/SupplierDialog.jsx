import React, { useEffect, useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  TextField,
} from "@mui/material";

const initialState = {
  supplierName: "",
  contactPerson: "",
  phone: "",
  email: "",
  gstNumber: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
  paymentTerms: "",
  openingBalance: 0,
  creditLimit: 0,
};

const SupplierDialog = ({
  open,
  onClose,
  onSave,
  supplier = null,
}) => {

  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (supplier) {
      setFormData({
        supplierName: supplier.supplierName || "",
        contactPerson: supplier.contactPerson || "",
        phone: supplier.phone || "",
        email: supplier.email || "",
        gstNumber: supplier.gstNumber || "",
        address: supplier.address || "",
        city: supplier.city || "",
        state: supplier.state || "",
        pincode: supplier.pincode || "",
        paymentTerms: supplier.paymentTerms || "",
        openingBalance: supplier.openingBalance || 0,
        creditLimit: supplier.creditLimit || 0,
      });
    } else {
      setFormData(initialState);
    }
  }, [supplier]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
    >
      <DialogTitle>
        {supplier ? "Edit Supplier" : "Add Supplier"}
      </DialogTitle>

      <DialogContent>
        <Grid container spacing={2} sx={{ mt: 1 }}>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Supplier Name"
              name="supplierName"
              value={formData.supplierName}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Contact Person"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="GST Number"
              name="gstNumber"
              value={formData.gstNumber}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Payment Terms"
              name="paymentTerms"
              value={formData.paymentTerms}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={3}
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

          <Grid item xs={6}>
            <TextField
              fullWidth
              type="number"
              label="Opening Balance"
              name="openingBalance"
              value={formData.openingBalance}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              type="number"
              label="Credit Limit"
              name="creditLimit"
              value={formData.creditLimit}
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
          {supplier ? "Update" : "Save"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SupplierDialog;