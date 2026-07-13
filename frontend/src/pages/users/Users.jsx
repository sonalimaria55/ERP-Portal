import React, { useEffect, useState } from "react";

import {
  Button,
  Paper,
  IconButton,
  Tooltip,
} from "@mui/material";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";

import { useDispatch, useSelector } from "react-redux";

import PageContainer from "../../components/common/PageContainer";
import PageHeader from "../../components/common/PageHeader";
import DataTable from "../../components/common/DataTable";

import UserFormDialog from "../../components/users/UserFormDialog";

import {
  fetchUsers,
  createNewUser,
  updateExistingUser,
  toggleUserStatus,
  removeUser,
} from "../../features/user/userThunk";

function Users() {
  const dispatch = useDispatch();

  const {
    users = [],
    loading,
  } = useSelector((state) => state.user);

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAddUser = () => {
    setSelectedUser(null);
    setOpenDialog(true);
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setOpenDialog(true);
  };

  const handleSave = async (data) => {
    if (selectedUser) {
      await dispatch(
        updateExistingUser({
          id: selectedUser._id,
          data,
        })
      );
    } else {
      await dispatch(createNewUser(data));
    }

    await dispatch(fetchUsers());

    setOpenDialog(false);
    setSelectedUser(null);
  };

  const handleStatus = async (user) => {
    await dispatch(toggleUserStatus(user._id));
    await dispatch(fetchUsers());
  };

  const handleDelete = async (user) => {
    const confirmDelete = window.confirm(
      `Delete ${user.name}?`
    );

    if (!confirmDelete) return;

    await dispatch(removeUser(user._id));
    await dispatch(fetchUsers());
  };






    const columns = [
    {
      field: "name",
      header: "Name",
    },
    {
      field: "email",
      header: "Email",
    },
    {
      field: "phone",
      header: "Phone",
    },
    {
      field: "role",
      header: "Role",
    },
{
  field: "isActive",
  header: "Status",
  renderCell: (row) => (
    <span>
      {row.isActive ? "Active" : "Inactive"}
    </span>
  ),
},
  ];

 const rows = (users || []).map((user) => ({
  _id: user._id,

  name: user.name,
  email: user.email,
  phone: user.phone,

  role: user.role
    ?.replaceAll("_", " ")
    .replace(/\b\w/g, (c) => c.toUpperCase()),
isActive: user.isActive,
}));

  const renderActions = (row) => {
    const originalUser = users.find(
      (user) => user._id === row._id
    );

    if (!originalUser) return null;

    return (
      <>
        <Tooltip title="Edit">
          <IconButton
            size="small"
            onClick={() => handleEdit(originalUser)}
          >
            <EditOutlinedIcon fontSize="small" />
          </IconButton>
        </Tooltip>

        <Tooltip
          title={
            originalUser.isActive
              ? "Deactivate"
              : "Activate"
          }
        >
          <IconButton
            size="small"
            onClick={() => handleStatus(originalUser)}
          >
            <AutorenewOutlinedIcon fontSize="small" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Delete">
          <IconButton
            size="small"
            color="error"
            onClick={() => handleDelete(originalUser)}
          >
            <DeleteOutlineOutlinedIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </>
    );
  };

  return (
    <PageContainer>
      <PageHeader
        title="User Management"
        subtitle="Manage ERP Users"
      />

      <Paper
        sx={{
          p: 2,
          borderRadius: 3,
        }}
      >
        <Button
          variant="contained"
          sx={{ mb: 2 }}
          onClick={handleAddUser}
        >
          + Add User
        </Button>

        <DataTable
          columns={columns}
          rows={rows}
          renderActions={renderActions}
        />
      </Paper>

      <UserFormDialog
        open={openDialog}
        user={selectedUser}
        onClose={() => {
          setOpenDialog(false);
          setSelectedUser(null);
        }}
        onSave={handleSave}
      />
    </PageContainer>
  );
}

export default Users;