import React from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";


const ProductDeleteDialog = ({
  open,
  onClose,
  onDelete,
  product,
}) => {

  return (
    <Dialog
      open={open}
      onClose={onClose}
    >

      <DialogTitle>
        Delete Product
      </DialogTitle>


      <DialogContent>
        Are you sure you want to delete{" "}
        <strong>
          {product?.productName}
        </strong>
        ?
      </DialogContent>


      <DialogActions>

        <Button onClick={onClose}>
          Cancel
        </Button>


        <Button
          color="error"
          onClick={onDelete}
        >
          Delete
        </Button>

      </DialogActions>

    </Dialog>
  );
};

export default ProductDeleteDialog;