import React from "react";
import {
  Grid,
  TextField,
  FormControlLabel,
  Switch,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const warehouses = [
  "Main Warehouse",
  "Warehouse A",
  "Warehouse B",
  "Warehouse C",
];

export default function ProductInventoryTab({ formData, onChange }) {
  return (
    <Grid container spacing={2}>
      {/* Initial Stock */}
      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          fullWidth
          type="number"
          label="Initial Stock"
          value={formData.initialStock}
          onChange={(e) =>
            onChange("initialStock", e.target.value)
          }
        />
      </Grid>

      {/* Reorder Level */}
      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          fullWidth
          type="number"
          label="Reorder Level"
          value={formData.reorderLevel}
          onChange={(e) =>
            onChange("reorderLevel", e.target.value)
          }
        />
      </Grid>

      {/* Maximum Stock */}
      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          fullWidth
          type="number"
          label="Maximum Stock"
          value={formData.maximumStock}
          onChange={(e) =>
            onChange("maximumStock", e.target.value)
          }
        />
      </Grid>

      {/* Warehouse */}
      <Grid size={{ xs: 12 }}>
        <FormControl fullWidth>
          <InputLabel>Warehouse</InputLabel>
          <Select
            value={formData.warehouse}
            label="Warehouse"
            onChange={(e) =>
              onChange("warehouse", e.target.value)
            }
          >
            {warehouses.map((warehouse) => (
              <MenuItem key={warehouse} value={warehouse}>
                {warehouse}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      {/* Track Inventory */}
      <Grid size={{ xs: 12 }}>
        <FormControlLabel
          control={
            <Switch
              checked={formData.trackInventory}
              onChange={(e) =>
                onChange("trackInventory", e.target.checked)
              }
            />
          }
          label="Track Inventory"
        />
      </Grid>

      {/* Allow Negative Stock */}
      <Grid size={{ xs: 12 }}>
        <FormControlLabel
          control={
            <Switch
              checked={formData.allowNegativeStock}
              onChange={(e) =>
                onChange("allowNegativeStock", e.target.checked)
              }
            />
          }
          label="Allow Negative Stock"
        />
      </Grid>
    </Grid>
  );
}