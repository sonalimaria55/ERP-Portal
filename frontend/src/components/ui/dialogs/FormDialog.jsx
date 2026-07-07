import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

const FormDialog = ({
  open,
  title,
  children,
  onClose,
  onSubmit,
  submitText = "Save",
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>{title}</DialogTitle>

      <DialogContent dividers>
        {children}
      </DialogContent>

      <DialogActions>
        <Button
          onClick={onClose}
          color="inherit"
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={onSubmit}
        >
          {submitText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FormDialog;