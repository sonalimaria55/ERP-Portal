import React from "react";

import {
  Grid,
  TextField,
} from "@mui/material";

const EmployeeBankTab = ({
  formData,
  handleChange,
}) => {
  return (
    <Grid container spacing={2} sx={{ mt: 1 }}>

      <Grid size={{ xs: 12 }}>
        <TextField
          fullWidth
          label="Bank Name"
          name="bankName"
          value={formData.bankName || ""}
          onChange={handleChange}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="Account Number"
          name="accountNumber"
          value={formData.accountNumber || ""}
          onChange={handleChange}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="IFSC Code"
          name="ifscCode"
          value={formData.ifscCode || ""}
          onChange={handleChange}
        />
      </Grid>

    </Grid>
  );
};

export default EmployeeBankTab;