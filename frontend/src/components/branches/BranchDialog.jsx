import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Grid,
  MenuItem,
} from "@mui/material";



const initialState = {
  branchName: "",
  branchCode: "",
  factory: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
};

const BranchDialog = ({
  open,
  onClose,
  onSubmit,
  selectedBranch,
  factories = [],
}) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (selectedBranch) {
      setFormData({
        branchName: selectedBranch.branchName || "",
        branchCode: selectedBranch.branchCode || "",
        factory:
          selectedBranch.factory?._id ||
          selectedBranch.factory ||
          "",
        email: selectedBranch.email || "",
        phone: selectedBranch.phone || "",
        address: selectedBranch.address || "",
        city: selectedBranch.city || "",
        state: selectedBranch.state || "",
        pincode: selectedBranch.pincode || "",
      });
    } else {
      setFormData(initialState);
    }
  }, [selectedBranch, open]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Submitting:", formData);
    onSubmit(formData);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        {selectedBranch ? "Edit Branch" : "Add Branch"}
      </DialogTitle>

      <DialogContent>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Branch Name"
              name="branchName"
              value={formData.branchName}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Branch Code"
              name="branchCode"
              value={formData.branchCode}
              disabled={!!selectedBranch}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              select
              fullWidth
              label="Factory"
              name="factory"
              value={formData.factory}
              onChange={handleChange}
            >
              <MenuItem value="">Select Factory</MenuItem>

              {factories.map((factory) => (
                <MenuItem
                  key={factory._id}
                  value={factory._id}
                >
                  {factory.factoryName}
                </MenuItem>
              ))}
            </TextField>
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

          <Grid item xs={6}>
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
          {selectedBranch ? "Update" : "Create"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BranchDialog;
