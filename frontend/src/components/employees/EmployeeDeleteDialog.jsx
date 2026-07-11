import React from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

const EmployeeDeleteDialog = ({
  open,
  onClose,
  onConfirm,
  employee,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
    >
      <DialogTitle>
        Delete Employee
      </DialogTitle>

      <DialogContent>

        <DialogContentText>

          Are you sure you want to delete

          <strong>
            {" "}
            {employee?.name}
          </strong>

          ?

          <br />

          This action cannot be undone.

        </DialogContentText>

      </DialogContent>

      <DialogActions>

        <Button onClick={onClose}>
          Cancel
        </Button>

        <Button
          color="error"
          variant="contained"
          onClick={onConfirm}
        >
          Delete
        </Button>

      </DialogActions>
    </Dialog>
  );
};

export default EmployeeDeleteDialog;