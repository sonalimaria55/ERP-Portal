import React from "react";
import { Grid, TextField, MenuItem, FormControlLabel, Switch } from "@mui/material";

const gstRates = [0, 5, 12, 18, 28];

export default function ProductTaxTab({ formData, handleChange }) {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="HSN / SAC Code"
          name="hsnCode"
          value={formData.hsnCode || ""}
          onChange={handleChange}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          select
          fullWidth
          label="GST Rate (%)"
          name="gstRate"
          value={formData.gstRate || ""}
          onChange={handleChange}
        >
          {gstRates.map((rate) => (
            <MenuItem key={rate} value={rate}>
              {rate}%
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          select
          fullWidth
          label="Tax Type"
          name="taxType"
          value={formData.taxType || ""}
          onChange={handleChange}
        >
          <MenuItem value="GST">GST</MenuItem>
          <MenuItem value="IGST">IGST</MenuItem>
          <MenuItem value="CGST_SGST">CGST + SGST</MenuItem>
          <MenuItem value="Exempt">Tax Exempt</MenuItem>
        </TextField>
      </Grid>

      <Grid size={{ xs: 12 }}>
        <FormControlLabel
          control={
            <Switch
              checked={formData.taxIncluded || false}
              onChange={(e) =>
                handleChange({
                  target: {
                    name: "taxIncluded",
                    value: e.target.checked,
                  },
                })
              }
            />
          }
          label="Price Includes Tax"
        />
      </Grid>
    </Grid>
  );
}