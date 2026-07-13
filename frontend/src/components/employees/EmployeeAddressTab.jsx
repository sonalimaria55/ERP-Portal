import React from "react";

import {
  Grid,
  TextField,
} from "@mui/material";

const EmployeeAddressTab = ({
  formData,
  handleChange,
}) => {
  return (
    <Grid container spacing={2} sx={{ mt: 1 }}>

      <Grid size={{ xs: 12 }}>
        <TextField
          fullWidth
          multiline
          rows={3}
          label="Address"
          name="address"
          value={formData.address || ""}
          onChange={handleChange}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          fullWidth
          label="City"
          name="city"
          value={formData.city || ""}
          onChange={handleChange}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          fullWidth
          label="State"
          name="state"
          value={formData.state || ""}
          onChange={handleChange}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          fullWidth
          label="Pincode"
          name="pincode"
          value={formData.pincode || ""}
          onChange={handleChange}
        />
      </Grid>

    </Grid>
  );
};

export default EmployeeAddressTab;