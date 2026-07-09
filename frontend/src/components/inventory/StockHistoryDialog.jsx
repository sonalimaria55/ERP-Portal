import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const StockHistoryDialog = ({
  open,
  onClose,
  product,
  history = [],
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle>
        Stock History
      </DialogTitle>

      <DialogContent>
        <Typography sx={{ mb: 2 }}>
          <strong>Product:</strong> {product?.productName}
        </Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Remarks</TableCell>
                <TableCell>Updated By</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {history.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    align="center"
                  >
                    No stock history found.
                  </TableCell>
                </TableRow>
              ) : (
                history.map((item) => (
                  <TableRow key={item._id}>
                    <TableCell>
                      {new Date(item.createdAt).toLocaleString()}
                    </TableCell>

                    <TableCell>
                      {item.quantity > 0
                        ? `+${item.quantity}`
                        : item.quantity}
                    </TableCell>

                    <TableCell>
                      {item.remarks || "-"}
                    </TableCell>

                    <TableCell>
                      {item.updatedBy?.name || "-"}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StockHistoryDialog;