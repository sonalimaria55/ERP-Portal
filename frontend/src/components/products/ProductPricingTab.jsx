import React, { useMemo } from "react";
import {
  Grid,
  TextField,
  InputAdornment,
} from "@mui/material";

export default function ProductPricingTab({ formData, onChange }) {
  const purchasePrice = Number(formData.purchasePrice) || 0;
  const sellingPrice = Number(formData.sellingPrice) || 0;

  const profit = sellingPrice - purchasePrice;

  const profitMargin = useMemo(() => {
    if (purchasePrice <= 0 || sellingPrice <= 0) return 0;

    return ((profit / purchasePrice) * 100).toFixed(2);
  }, [purchasePrice, sellingPrice, profit]);

  return (
    <Grid container spacing={2}>
      {/* Purchase Price */}
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          type="number"
          label="Purchase Price"
          value={formData.purchasePrice}
          onChange={(e) =>
            onChange("purchasePrice", e.target.value)
          }
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  ₹
                </InputAdornment>
              ),
            },
          }}
        />
      </Grid>

      {/* Selling Price */}
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          type="number"
          label="Selling Price"
          value={formData.sellingPrice}
          onChange={(e) =>
            onChange("sellingPrice", e.target.value)
          }
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  ₹
                </InputAdornment>
              ),
            },
          }}
        />
      </Grid>

      {/* Tax */}
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          type="number"
          label="Tax (%)"
          value={formData.tax}
          onChange={(e) => onChange("tax", e.target.value)}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  %
                </InputAdornment>
              ),
            },
          }}
        />
      </Grid>

      {/* Discount */}
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          type="number"
          label="Discount (%)"
          value={formData.discount}
          onChange={(e) =>
            onChange("discount", e.target.value)
          }
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  %
                </InputAdornment>
              ),
            },
          }}
        />
      </Grid>

      {/* Profit */}
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="Profit"
          value={`₹ ${profit.toFixed(2)}`}
          InputProps={{
            readOnly: true,
          }}
        />
      </Grid>

      {/* Profit Margin */}
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="Profit Margin"
          value={`${profitMargin}%`}
          InputProps={{
            readOnly: true,
          }}
        />
      </Grid>
    </Grid>
  );
}