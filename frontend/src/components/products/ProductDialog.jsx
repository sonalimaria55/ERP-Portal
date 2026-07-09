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
  // Basic Details
  productName: "",
  sku: "",
  barcode: "",
  category: "",
  brand: "",
  unit: "Piece",
  description: "",
  status: "Active",

  // Pricing
  purchasePrice: 0,
  sellingPrice: 0,
  gst: 18,
  discount: 0,

  // Inventory
  initialStock: 0,
  reorderLevel: 5,
  maximumStock: 0,
  warehouse: "",
  trackInventory: true,
  allowNegativeStock: false,

  // Images
  images: [],
};

export default function ProductDialog({
  open,
  onClose,
  onSave,
  product,
}) {
  const [tab, setTab] = useState(0);

  const [formData, setFormData] =
    useState(initialForm);

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
        {product
          ? "Edit Product"
          : "Add Product"}
      </DialogTitle>

      <DialogContent dividers>
        <Tabs
          value={tab}
          onChange={(e, value) =>
            setTab(value)
          }
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
          {product
            ? "Update Product"
            : "Save Product"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}