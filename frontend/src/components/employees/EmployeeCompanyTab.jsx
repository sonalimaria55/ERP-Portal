import React from "react";

import {
  Grid,
  TextField,
  MenuItem,
} from "@mui/material";

const EmployeeCompanyTab = ({
  formData,
  handleChange,
  factories = [],
  branches = [],
}) => {
  return (
    <Grid container spacing={2} sx={{ mt: 1 }}>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          select
          fullWidth
          required
          label="Factory"
          name="factory"
          value={formData.factory || ""}
          onChange={handleChange}
        >
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

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          select
          fullWidth
          required
          label="Branch"
          name="branch"
          value={formData.branch || ""}
          onChange={handleChange}
        >
          {branches.map((branch) => (
            <MenuItem
              key={branch._id}
              value={branch._id}
            >
              {branch.branchName}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          type="date"
          label="Joining Date"
          name="joiningDate"
          value={formData.joiningDate || ""}
          onChange={handleChange}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="Department"
          name="department"
          value={formData.department || ""}
          onChange={handleChange}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="Designation"
          name="designation"
          value={formData.designation || ""}
          onChange={handleChange}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          select
          fullWidth
          label="Status"
          name="status"
          value={formData.status || "Active"}
          onChange={handleChange}
        >
          <MenuItem value="Active">
            Active
          </MenuItem>

          <MenuItem value="Inactive">
            Inactive
          </MenuItem>
        </TextField>
      </Grid>

    </Grid>
  );
};

export default EmployeeCompanyTab;