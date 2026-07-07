import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Tabs,
  Tab,
  Box,
} from "@mui/material";

import ProductBasicTab from "./ProductBasicTab";
import ProductPricingTab from "./ProductPricingTab";
import ProductInventoryTab from "./ProductInventoryTab";
import ProductImageUpload from "./ProductImageUpload";

const initialForm = {
  name: "",
  sku: "",
  barcode: "",
  category: "",
  brand: "",
  unit: "",
  description: "",
  status: "Active",

  purchasePrice: "",
  sellingPrice: "",
  tax: "",
  discount: "",

  initialStock: "",
  reorderLevel: "",
  maximumStock: "",
  warehouse: "",
  trackInventory: true,
  allowNegativeStock: false,

  images: [],
};

export default function ProductDialog({
  open,
  onClose,
  onSave,
  product,
}) {
  const [tab, setTab] = useState(0);
  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {
    if (product) {
      setFormData({
        ...initialForm,
        ...product,
      });
    } else {
      setFormData(initialForm);
    }

    setTab(0);
  }, [product, open]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="lg"
    >
      <DialogTitle>
        {product ? "Edit Product" : "Add Product"}
      </DialogTitle>

      <DialogContent dividers>
        <Tabs
          value={tab}
          onChange={(e, newValue) => setTab(newValue)}
        >
          <Tab label="Basic" />
          <Tab label="Pricing" />
          <Tab label="Inventory" />
          <Tab label="Images" />
        </Tabs>

        <Box mt={3}>
          {tab === 0 && (
            <ProductBasicTab
              formData={formData}
              onChange={handleChange}
            />
          )}

          {tab === 1 && (
            <ProductPricingTab
              formData={formData}
              onChange={handleChange}
            />
          )}

          {tab === 2 && (
            <ProductInventoryTab
              formData={formData}
              onChange={handleChange}
            />
          )}

          {tab === 3 && (
            <ProductImageUpload
              formData={formData}
              onChange={handleChange}
            />
          )}
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleSave}
        >
          {product ? "Update Product" : "Save Product"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}