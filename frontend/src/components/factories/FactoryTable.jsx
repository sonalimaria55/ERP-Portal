// import React from "react";

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   IconButton,
//   Chip,
// } from "@mui/material";

// import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
// import DeleteIcon from "@mui/icons-material/Delete";


// const FactoryTable = ({
//   factories = [],
//   onEdit,
//   onDelete,
// }) => {

//   return (
//     <TableContainer
//       component={Paper}
//       sx={{
//         borderRadius: 3,
//         boxShadow: "none",
//         border: "1px solid #ECECEC",
//       }}
//     >

//       <Table>

//         <TableHead>
//           <TableRow>

//             <TableCell>
//               Factory Code
//             </TableCell>

//             <TableCell>
//               Factory Name
//             </TableCell>

//             <TableCell>
//               Location
//             </TableCell>

//             <TableCell>
//               Phone
//             </TableCell>

//             <TableCell>
//               Status
//             </TableCell>

//             <TableCell align="center">
//               Actions
//             </TableCell>

//           </TableRow>
//         </TableHead>


//         <TableBody>

//           {factories.length === 0 ? (

//             <TableRow>

//               <TableCell
//                 colSpan={6}
//                 align="center"
//               >
//                 No factories found
//               </TableCell>

//             </TableRow>

//           ) : (

//             factories.map((factory)=> (

//               <TableRow
//                 key={factory._id}
//                 hover
//               >

//                 <TableCell>
//                   {factory.factoryCode}
//                 </TableCell>


//                 <TableCell>
//                   {factory.factoryName}
//                 </TableCell>


//                 <TableCell>
//                   {factory.city || "-"}
//                 </TableCell>


//                 <TableCell>
//                   {factory.phone || "-"}
//                 </TableCell>


//                 <TableCell>

//                   <Chip
//                     label={
//                       factory.isActive
//                         ? "Active"
//                         : "Inactive"
//                     }
//                     size="small"
//                   />

//                 </TableCell>


//                 <TableCell align="center">

//                   <IconButton
//                     onClick={()=>onEdit(factory)}
//                   >
//                     <EditOutlinedIcon />
//                   </IconButton>


//                   <IconButton
//                     color="error"
//                     onClick={()=>onDelete(factory)}
//                   >
//                    <DeleteIcon />
//                   </IconButton>

//                 </TableCell>


//               </TableRow>

//             ))

//           )}

//         </TableBody>


//       </Table>

//     </TableContainer>
//   );
// };


// export default FactoryTable;


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


const FactoryTable = ({
  factories = [],
  onEdit,
  onDelete,
}) => {

  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: 3,
        boxShadow: "none",
        border: "1px solid #ECECEC",
      }}
    >

      <Table>

        <TableHead>

          <TableRow>

            <TableCell>
              Factory Name
            </TableCell>

            <TableCell>
              Factory Code
            </TableCell>

            <TableCell>
              Location
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

          {factories.length === 0 ? (

            <TableRow>

              <TableCell
                colSpan={6}
                align="center"
              >
                No factories found
              </TableCell>

            </TableRow>

          ) : (

            factories.map((factory)=>(

              <TableRow
                key={factory._id}
                hover
              >

                <TableCell>
                  {factory.factoryName}
                </TableCell>


                <TableCell>
                  {factory.factoryCode}
                </TableCell>


                <TableCell>
                  {factory.city || "-"}
                </TableCell>


                <TableCell>
                  {factory.phone || "-"}
                </TableCell>


                <TableCell>

                  <Chip
                    label={
                      factory.isActive
                        ? "Active"
                        : "Inactive"
                    }
                    size="small"
                    variant="outlined"
                  />

                </TableCell>


                <TableCell align="center">

                  <IconButton
                    onClick={() => onEdit(factory)}
                  >
                    <EditIcon />
                  </IconButton>


                  <IconButton
                    color="error"
                    onClick={() => onDelete(factory)}
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


export default FactoryTable;