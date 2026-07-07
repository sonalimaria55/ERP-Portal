import React from "react";
import {
  Grid,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";

const categories = [
  "Electronics",
  "Groceries",
  "Clothing",
  "Furniture",
  "Stationery",
];

const brands = [
  "Apple",
  "Samsung",
  "Nike",
  "HP",
  "Dell",
];

const units = [
  "Piece",
  "Kg",
  "Gram",
  "Liter",
  "Box",
];

const statusOptions = [
  "Active",
  "Inactive",
];

export default function ProductBasicTab({ formData, onChange }) {
  return (
    <Grid container spacing={2}>
      {/* Product Name */}
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          required
          label="Product Name"
          value={formData.name}
          onChange={(e) => onChange("name", e.target.value)}
        />
      </Grid>

      {/* SKU */}
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          required
          label="SKU"
          value={formData.sku}
          onChange={(e) => onChange("sku", e.target.value)}
        />
      </Grid>

      {/* Barcode */}
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="Barcode"
          value={formData.barcode}
          onChange={(e) => onChange("barcode", e.target.value)}
        />
      </Grid>

      {/* Category */}
      <Grid size={{ xs: 12, md: 6 }}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category}
            label="Category"
            onChange={(e) => onChange("category", e.target.value)}
          >
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      {/* Brand */}
      <Grid size={{ xs: 12, md: 6 }}>
        <FormControl fullWidth>
          <InputLabel>Brand</InputLabel>
          <Select
            value={formData.brand}
            label="Brand"
            onChange={(e) => onChange("brand", e.target.value)}
          >
            {brands.map((brand) => (
              <MenuItem key={brand} value={brand}>
                {brand}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      {/* Unit */}
      <Grid size={{ xs: 12, md: 6 }}>
        <FormControl fullWidth>
          <InputLabel>Unit</InputLabel>
          <Select
            value={formData.unit}
            label="Unit"
            onChange={(e) => onChange("unit", e.target.value)}
          >
            {units.map((unit) => (
              <MenuItem key={unit} value={unit}>
                {unit}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      {/* Status */}
      <Grid size={{ xs: 12, md: 6 }}>
        <FormControl fullWidth>
          <InputLabel>Status</InputLabel>
          <Select
            value={formData.status}
            label="Status"
            onChange={(e) => onChange("status", e.target.value)}
          >
            {statusOptions.map((status) => (
              <MenuItem key={status} value={status}>
                {status}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      {/* Description */}
      <Grid size={{ xs: 12 }}>
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Description"
          value={formData.description}
          onChange={(e) => onChange("description", e.target.value)}
        />
      </Grid>
    </Grid>
  );
}