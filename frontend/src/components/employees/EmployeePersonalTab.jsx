import React from "react";

import {
  Grid,
  TextField,
  MenuItem,
  Avatar,
  Button,
  Stack,
} from "@mui/material";
const EmployeePersonalTab = ({
  formData,
  handleChange,
  handlePhotoChange,
}) => {
  return (
    <Grid container spacing={2} sx={{ mt: 1 }}>
      <Grid size={{ xs: 12 }}>
  <Stack
    direction="row"
    spacing={2}
    alignItems="center"
  >
    <Avatar
      src={formData.photo || ""}
      sx={{
        width: 80,
        height: 80,
      }}
    />

    <Button
      component="label"
      variant="outlined"
    >
      Upload Photo

      <input
        hidden
        type="file"
        accept="image/*"
        onChange={handlePhotoChange}
      />
    </Button>
  </Stack>
</Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="Employee ID"
          name="employeeId"
          value={formData.employeeId || ""}
          InputProps={{
            readOnly: true,
          }}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="Employee Code"
          name="employeeCode"
          value={formData.employeeCode || ""}
          InputProps={{
            readOnly: true,
          }}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          required
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          required
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          required
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          required
          label="Aadhaar Number"
          name="aadhaarNumber"
          value={formData.aadhaarNumber}
          onChange={handleChange}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          required
          label="PAN Number"
          name="panNumber"
          value={formData.panNumber}
          onChange={handleChange}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="UAN Number"
          name="uanNumber"
          value={formData.uanNumber}
          onChange={handleChange}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          type="date"
          label="Date of Birth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
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
          select
          fullWidth
          label="Gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </TextField>
      </Grid>

    </Grid>
  );
};

export default EmployeePersonalTab;