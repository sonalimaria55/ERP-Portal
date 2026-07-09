import React from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";

import UserForm from "./UserForm";

const UserDialog = ({
  open,
  onClose,
  user,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
    >
      <DialogTitle>
        {user ? "Edit User" : "Add User"}
      </DialogTitle>

      <DialogContent dividers>
        <UserForm
          user={user}
          onClose={onClose}
        />
      </DialogContent>
    </Dialog>
  );
};

export default UserDialog;