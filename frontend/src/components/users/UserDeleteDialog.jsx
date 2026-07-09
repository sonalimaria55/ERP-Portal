import React from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";


const UserDeleteDialog = ({
  open,
  onClose,
  user,
  onDelete,
}) => {

  return (
    <Dialog
      open={open}
      onClose={onClose}
    >

      <DialogTitle>
        Delete User
      </DialogTitle>


      <DialogContent>
        Are you sure you want to delete {user?.name}?
      </DialogContent>


      <DialogActions>

        <Button onClick={onClose}>
          Cancel
        </Button>


        <Button
          color="error"
          variant="contained"
          onClick={() => onDelete(user._id)}
        >
          Delete
        </Button>

      </DialogActions>


    </Dialog>
  );

};


export default UserDeleteDialog;