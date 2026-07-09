// import React from "react";

// import {
//   Chip,
//   IconButton,
//   Tooltip,
// } from "@mui/material";

// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import BlockIcon from "@mui/icons-material/Block";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// import DataTable from "../common/DataTable";

// const UserTable = ({
//   users,
//   loading,
//   search,
//   onEdit,
//   onDelete,
//   onStatus,
// }) => {
//   const filteredUsers = users.filter((user) => {
//     const keyword = search.toLowerCase();

//     return (
//       user.name.toLowerCase().includes(keyword) ||
//       user.email.toLowerCase().includes(keyword) ||
//       user.phone.toLowerCase().includes(keyword) ||
//       user.role.toLowerCase().includes(keyword)
//     );
//   });

//   const columns = [
//     {
//       field: "name",
//       headerName: "Name",
//       flex: 1,
//     },
//     {
//       field: "email",
//       headerName: "Email",
//       flex: 1.2,
//     },
//     {
//       field: "phone",
//       headerName: "Phone",
//       flex: 1,
//     },
//     {
//       field: "role",
//       headerName: "Role",
//       flex: 1,
//       renderCell: ({ row }) => (
//         <Chip
//           label={row.role.replaceAll("_", " ")}
//           size="small"
//         />
//       ),
//     },
//     {
//       field: "factory",
//       headerName: "Factory",
//       flex: 1,
//       valueGetter: ({ row }) =>
//         row.factory?.factoryName || "-",
//     },
//     {
//       field: "branch",
//       headerName: "Branch",
//       flex: 1,
//       valueGetter: ({ row }) =>
//         row.branch?.branchName || "-",
//     },
//     {
//       field: "counter",
//       headerName: "Counter",
//       flex: 1,
//       valueGetter: ({ row }) =>
//         row.counter?.counterName || "-",
//     },
//     {
//       field: "status",
//       headerName: "Status",
//       flex: 1,
//       renderCell: ({ row }) => (
//         <Chip
//           label={row.isActive ? "Active" : "Inactive"}
//           color={row.isActive ? "success" : "error"}
//           size="small"
//         />
//       ),
//     },
//     {
//       field: "actions",
//       headerName: "Actions",
//       sortable: false,
//       flex: 1.2,
//       renderCell: ({ row }) => (
//         <>
//           <Tooltip title="Edit">
//             <IconButton
//               color="primary"
//               onClick={() => onEdit(row)}
//             >
//               <EditIcon />
//             </IconButton>
//           </Tooltip>

//           <Tooltip
//             title={row.isActive ? "Deactivate" : "Activate"}
//           >
//             <IconButton
//               color="warning"
//               onClick={() => onStatus(row)}
//             >
//               {row.isActive ? (
//                 <BlockIcon />
//               ) : (
//                 <CheckCircleIcon />
//               )}
//             </IconButton>
//           </Tooltip>

//           <Tooltip title="Delete">
//             <IconButton
//               color="error"
//               onClick={() => onDelete(row)}
//             >
//               <DeleteIcon />
//             </IconButton>
//           </Tooltip>
//         </>
//       ),
//     },
//   ];

//   return (
//     <DataTable
//       rows={filteredUsers}
//       columns={columns}
//       loading={loading}
//       getRowId={(row) => row._id}
//     />
//   );
// };

// export default UserTable;
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
  CircularProgress,
  Typography,
  Box,
  Tooltip,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AutorenewIcon from "@mui/icons-material/Autorenew";

const UserTable = ({
  users,
  loading,
  search,
  onEdit,
  onDelete,
  onStatus,
}) => {
  const filteredUsers = users.filter((user) => {
    const keyword = search.toLowerCase();

    return (
      user.name?.toLowerCase().includes(keyword) ||
      user.email?.toLowerCase().includes(keyword) ||
      user.phone?.toLowerCase().includes(keyword) ||
      user.role?.toLowerCase().includes(keyword)
    );
  });

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        py={5}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!filteredUsers.length) {
    return (
      <Typography
        align="center"
        sx={{ py: 5 }}
      >
        No users found.
      </Typography>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table>

        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Factory</TableCell>
            <TableCell>Branch</TableCell>
            <TableCell>Counter</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="center">
              Actions
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>

          {filteredUsers.map((user) => (

            <TableRow key={user._id} hover>

              <TableCell>
                {user.name}
              </TableCell>

              <TableCell>
                {user.email}
              </TableCell>

              <TableCell>
                {user.phone}
              </TableCell>

              <TableCell>
                <Chip
                  label={user.role}
                  color="primary"
                  size="small"
                />
              </TableCell>

              <TableCell>
                {user.factory?.factoryName || "-"}
              </TableCell>

              <TableCell>
                {user.branch?.branchName || "-"}
              </TableCell>

              <TableCell>
                {user.counter?.counterName || "-"}
              </TableCell>

              <TableCell>
                <Chip
                  label={
                    user.isActive
                      ? "Active"
                      : "Inactive"
                  }
                  color={
                    user.isActive
                      ? "success"
                      : "error"
                  }
                  size="small"
                />
              </TableCell>

              <TableCell align="center">

                <Tooltip title="Edit">
                  <IconButton
                    color="primary"
                    onClick={() =>
                      onEdit(user)
                    }
                  >
                    <EditIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip
                  title={
                    user.isActive
                      ? "Deactivate"
                      : "Activate"
                  }
                >
                  <IconButton
                    color="warning"
                    onClick={() =>
                      onStatus(user)
                    }
                  >
                    <AutorenewIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Delete">
                  <IconButton
                    color="error"
                    onClick={() =>
                      onDelete(user)
                    }
                  >
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>

              </TableCell>

            </TableRow>

          ))}

        </TableBody>

      </Table>
    </TableContainer>
  );
};

export default UserTable;