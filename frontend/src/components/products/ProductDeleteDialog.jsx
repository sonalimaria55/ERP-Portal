import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Typography,
  Box,
} from "@mui/material";

export default function ProductDeleteDialog({
  open,
  onClose,
  onConfirm,
  product,
  loading = false,
}) {
  return (
    <Dialog
      open={open}
      onClose={loading ? undefined : onClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>Delete Product</DialogTitle>

      <DialogContent>
        <DialogContentText sx={{ mb: 2 }}>
          Are you sure you want to delete this product?
        </DialogContentText>

        {product && (
          <Box
            sx={{
              p: 2,
              border: 1,
              borderColor: "divider",
              borderRadius: 1,
            }}
          >
            <Typography variant="subtitle2">
              Product Name
            </Typography>

            <Typography gutterBottom>
              {product.name}
            </Typography>

            <Typography variant="subtitle2">
              SKU
            </Typography>

            <Typography gutterBottom>
              {product.sku}
            </Typography>

            <Typography variant="subtitle2">
              Category
            </Typography>

            <Typography>
              {product.category}
            </Typography>
          </Box>
        )}
      </DialogContent>

      <DialogActions>
        <Button
          onClick={onClose}
          disabled={loading}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          color="error"
          onClick={onConfirm}
          disabled={loading}
        >
          {loading ? "Deleting..." : "Delete"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}