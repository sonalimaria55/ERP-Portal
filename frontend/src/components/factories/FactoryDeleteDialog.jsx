// import React from "react";

// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogContentText,
//   DialogActions,
//   Button,
// } from "@mui/material";

// const FactoryDeleteDialog = ({
//   open,
//   onClose,
//   onDelete,
//   factory,
// }) => {
//   return (
//     <Dialog
//       open={open}
//       onClose={onClose}
//       maxWidth="xs"
//       fullWidth
//     >
//       <DialogTitle>
//         Delete Factory
//       </DialogTitle>

//       <DialogContent>
//         <DialogContentText>
//           Are you sure you want to delete
//           <strong>
//             {" "}
//             {factory?.factoryName}
//           </strong>
//           ?
//           <br />
//           This action cannot be undone.
//         </DialogContentText>
//       </DialogContent>

//       <DialogActions>
//         <Button
//           onClick={onClose}
//           color="inherit"
//         >
//           Cancel
//         </Button>

//         <Button
//           onClick={onDelete}
//           color="error"
//           variant="contained"
//         >
//           Delete
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default FactoryDeleteDialog;

import React from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";


const FactoryDeleteDialog = ({
  open,
  onClose,
  onConfirm,
  factory,
}) => {

  return (

    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
    >

      <DialogTitle>
        Delete Factory
      </DialogTitle>


      <DialogContent>

        <Typography>
          Are you sure you want to delete{" "}
          <strong>
            {factory?.factoryName}
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


export default FactoryDeleteDialog;