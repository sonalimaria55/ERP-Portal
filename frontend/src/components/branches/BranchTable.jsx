import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Chip,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";


const BranchTable = ({
  branches = [],
  onEdit,
  onDelete,
}) => {


  return (

    <TableContainer
      component={Paper}
      sx={{
        borderRadius:3,
        boxShadow:"none",
        border:"1px solid #ECECEC",
      }}
    >

      <Table>


        <TableHead>

          <TableRow>

            <TableCell>
              Branch Name
            </TableCell>


            <TableCell>
              Branch Code
            </TableCell>


            <TableCell>
              Factory
            </TableCell>


            <TableCell>
              City
            </TableCell>


            <TableCell>
              Phone
            </TableCell>


            <TableCell>
              Status
            </TableCell>


            <TableCell align="center">
              Actions
            </TableCell>


          </TableRow>

        </TableHead>



        <TableBody>


          {branches.length === 0 ? (

            <TableRow>

              <TableCell
                colSpan={7}
                align="center"
              >
                No branches found
              </TableCell>

            </TableRow>


          ) : (


            branches.map((branch)=>(

              <TableRow
                key={branch._id}
                hover
              >


                <TableCell>
                  {branch.branchName}
                </TableCell>


                <TableCell>
                  {branch.branchCode}
                </TableCell>


                <TableCell>
                  {branch.factory?.factoryName || "-"}
                </TableCell>


                <TableCell>
                  {branch.city}
                </TableCell>


                <TableCell>
                  {branch.phone}
                </TableCell>


                <TableCell>

                  <Chip
                    label={
                      branch.isActive
                      ? "Active"
                      : "Inactive"
                    }
                    size="small"
                    variant="outlined"
                  />

                </TableCell>



                <TableCell align="center">


                  <IconButton
                    onClick={()=>onEdit(branch)}
                  >

                    <EditIcon />

                  </IconButton>



                  <IconButton
                    color="error"
                    onClick={()=>onDelete(branch)}
                  >

                    <DeleteIcon />

                  </IconButton>


                </TableCell>


              </TableRow>


            ))


          )}


        </TableBody>


      </Table>


    </TableContainer>

  );

};


export default BranchTable;