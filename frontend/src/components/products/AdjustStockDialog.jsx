import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

const AdjustStockDialog = ({
  open,
  onClose,
  onSave,
  product,
}) => {
  const [quantity, setQuantity] = useState("");
  const [remarks, setRemarks] = useState("");

  useEffect(() => {
    if (open) {
      setQuantity("");
      setRemarks("");
    }
  }, [open]);

  const handleSubmit = () => {
    const qty = Number(quantity);

    if (!qty) {
      alert("Please enter a valid quantity.");
      return;
    }

    onSave({
      quantity: qty,
      remarks,
    });
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
    >
      <DialogTitle>Adjust Stock</DialogTitle>

      <DialogContent>
        <TextField
          fullWidth
          margin="normal"
          label="Product"
          value={product?.productName || ""}
          disabled
        />

        <TextField
          fullWidth
          margin="normal"
          label="Current Stock"
          value={product?.currentStock ?? 0}
          disabled
        />

        <TextField
          fullWidth
          margin="normal"
          label="Quantity (+/-)"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          helperText="Positive = Add Stock, Negative = Remove Stock"
        />

        <TextField
          fullWidth
          margin="normal"
          label="Remarks"
          multiline
          rows={3}
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleSubmit}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AdjustStockDialog;