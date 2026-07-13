import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";


const DataTable = ({
  columns = [],
  rows = [],
  renderActions,
}) => {

  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: 3,
        boxShadow: "none",
        border: "1px solid #ECECEC",
        overflow: "hidden",
      }}
    >

      <Table>

        {/* Header */}
        <TableHead>
          <TableRow>

            {columns.map((column) => (
              <TableCell
                key={column.field}
                sx={{
                  fontWeight: 700,
                  background: "#F8F7F4",
                  color: "#1E1E1E",
                }}
              >
                {column.header}
              </TableCell>
            ))}


            {renderActions && (
              <TableCell
                sx={{
                  fontWeight: 700,
                  background: "#F8F7F4",
                  color: "#1E1E1E",
                }}
              >
                Actions
              </TableCell>
            )}

          </TableRow>
        </TableHead>


        {/* Body */}
        <TableBody>

          {rows.length === 0 ? (

            <TableRow>
              <TableCell
                colSpan={
                  columns.length + (renderActions ? 1 : 0)
                }
                align="center"
              >
                No records found
              </TableCell>
            </TableRow>

          ) : (

            rows.map((row) => (

              <TableRow
                key={row._id}
                hover
              >

                {columns.map((column) => {

                  let value;

                  if (column.renderCell) {
                    value = column.renderCell(row);
                  } else {
                    value = row[column.field];
                  }


                  return (
                    <TableCell
                      key={column.field}
                    >
                      {
                        React.isValidElement(value)
                          ? value
                          : value ?? "-"
                      }
                    </TableCell>
                  );

                })}


                {renderActions && (
                  <TableCell>
                    {renderActions(row)}
                  </TableCell>
                )}


              </TableRow>

            ))

          )}

        </TableBody>


      </Table>

    </TableContainer>
  );
};


export default DataTable;