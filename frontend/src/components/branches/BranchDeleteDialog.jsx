import React from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";


const BranchDeleteDialog = ({
  open,
  onClose,
  onConfirm,
  branch,
}) => {

  return (

    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
    >


      <DialogTitle>
        Delete Branch
      </DialogTitle>



      <DialogContent>

        <Typography>

          Are you sure you want to delete{" "}

          <strong>
            {branch?.branchName}
          </strong>

          ?

        </Typography>


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
          onClick={onConfirm}
        >
          Delete
        </Button>


      </DialogActions>


    </Dialog>

  );

};


export default BranchDeleteDialog;