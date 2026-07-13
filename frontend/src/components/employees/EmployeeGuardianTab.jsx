import React from "react";

import {
  Grid,
  TextField,
} from "@mui/material";

const EmployeeGuardianTab = ({
  formData,
  handleChange,
}) => {
  return (
    <Grid container spacing={2} sx={{ mt: 1 }}>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="Guardian Name"
          name="guardianName"
          value={formData.guardianName || ""}
          onChange={handleChange}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="Relationship"
          name="guardianRelation"
          value={formData.guardianRelation || ""}
          onChange={handleChange}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="Guardian Phone"
          name="guardianPhone"
          value={formData.guardianPhone || ""}
          onChange={handleChange}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <TextField
          fullWidth
          multiline
          rows={3}
          label="Guardian Address"
          name="guardianAddress"
          value={formData.guardianAddress || ""}
          onChange={handleChange}
        />
      </Grid>

    </Grid>
  );
};

export default EmployeeGuardianTab;