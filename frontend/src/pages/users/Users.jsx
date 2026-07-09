// import React, { useEffect, useState } from "react";

// import { useDispatch, useSelector } from "react-redux";

// import {
//     Box,
//     Paper,
// } from "@mui/material";


// import PageHeader from "../../components/common/PageHeader";

// import UserToolbar from "../../components/users/UserToolbar";
// import UserTable from "../../components/users/UserTable";
// import UserDialog from "../../components/users/UserDialog";
// import UserDeleteDialog from "../../components/users/UserDeleteDialog";
// import PageContainer from "../../components/common/PageContainer";

// import { fetchUsers, toggleUserStatus, } from "../../features/user/userThunk";

// const UserManagement = () => {
//     const dispatch = useDispatch();

//     const { users, loading } = useSelector(
//         (state) => state.user
//     );

//     const [search, setSearch] = useState("");

//     const [openDialog, setOpenDialog] = useState(false);

//     const [openDelete, setOpenDelete] = useState(false);

//     const [selectedUser, setSelectedUser] = useState(null);

//     const handleStatus = async (user) => {
//         await dispatch(toggleUserStatus(user._id));
//         dispatch(fetchUsers());
//     };
//     useEffect(() => {
//          console.log("Fetching users...");
//         dispatch(fetchUsers());
//     }, [dispatch]);

// //     useEffect(() => {
// //   console.log("Fetching users...");
// //   dispatch(fetchUsers());
// // }, [dispatch]);

//     const handleAdd = () => {
//         setSelectedUser(null);
//         setOpenDialog(true);
//     };

//     const handleEdit = (user) => {
//         setSelectedUser(user);
//         setOpenDialog(true);
//     };

//     const handleDelete = (user) => {
//         setSelectedUser(user);
//         setOpenDelete(true);
//     };

//     return (
//         <PageContainer>
//             <PageHeader
//                 title="User Management"
//                 subtitle="Manage ERP Users"
//             />

//             <Paper sx={{ p: 2 }}>

//                 <UserToolbar
//                     search={search}
//                     setSearch={setSearch}
//                     onAdd={handleAdd}
//                 />

//                 <Box mt={2}>

//                     <UserTable
//                         users={users}
//                         loading={loading}
//                         search={search}
//                         onEdit={handleEdit}
//                         onDelete={handleDelete}
//                         onStatus={handleStatus}
//                     />

//                 </Box>
//             </Paper>

//             <UserDialog
//                 open={openDialog}
//                 onClose={() => setOpenDialog(false)}
//                 user={selectedUser}
//             />

//             <UserDeleteDialog
//                 open={openDelete}
//                 onClose={() => setOpenDelete(false)}
//                 user={selectedUser}
//             />
//         </PageContainer>
//     );
// };

// export default UserManagement;


import React from "react";

import { Paper } from "@mui/material";

import PageContainer from "../../components/common/PageContainer";
import PageHeader from "../../components/common/PageHeader";

function Users() {
  return (
    <PageContainer>
      <PageHeader
        title="User Management"
        subtitle="Manage ERP Users"
      />

      <Paper sx={{ p: 2 }}>
        Hello
      </Paper>
    </PageContainer>
  );
}

export default Users;