import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  TablePagination,
  CircularProgress,
  Typography,
  Box,
} from "@mui/material";

const DataTable = ({
  columns,
  rows,
  loading = false,
  page = 0,
  rowsPerPage = 10,
  totalRows = 0,
  onPageChange,
}) => {
  if (loading) {
    return (
      <Paper
        sx={{
          p: 4,
          textAlign: "center",
          borderRadius: 3,
        }}
      >
        <CircularProgress />
      </Paper>
    );
  }

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 3,
        overflow: "hidden",
      }}
    >
      <TableContainer>
        <Table>

          <TableHead>
            <TableRow
              sx={{
                bgcolor: "#D5E3D8",
              }}
            >
              {columns.map((column) => (
                <TableCell
                  key={column.field}
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  {column.headerName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>

            {rows.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                >
                  <Box py={5} textAlign="center">
                    <Typography>
                      No Records Found
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            ) : (
              rows.map((row) => (
                <TableRow
                  hover
                  key={row._id}
                >
                  {columns.map((column) => (
                    <TableCell
                      key={column.field}
                    >
                      {column.renderCell
                        ? column.renderCell(row)
                        : row[column.field]}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}

          </TableBody>

        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        page={page - 1}
        rowsPerPage={rowsPerPage}
        count={totalRows}
        rowsPerPageOptions={[5, 10, 20, 50]}
        onPageChange={(event, newPage) =>
          onPageChange(newPage + 1)
        }
      />
    </Paper>
  );
};

export default DataTable;