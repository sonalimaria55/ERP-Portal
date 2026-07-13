import React from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

const SupplierDeleteDialog = ({
  open,
  supplier,
  onClose,
  onConfirm,
}) => {

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
    >
      <DialogTitle>
        Delete Supplier
      </DialogTitle>

      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete
          <strong>
            {" "}
            {supplier?.supplierName}
          </strong>
          ?
          <br />
          <br />
          This action cannot be undone.
        </DialogContentText>
      </DialogContent>

      <DialogActions>

        <Button
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button
          color="error"
          variant="contained"
          onClick={() => onConfirm(supplier)}
        >
          Delete
        </Button>

      </DialogActions>
    </Dialog>
  );
};

export default SupplierDeleteDialog;