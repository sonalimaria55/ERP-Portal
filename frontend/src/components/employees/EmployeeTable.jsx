import React from "react";

import { DataGrid } from "@mui/x-data-grid";

import {
  Box,
  Chip,
  IconButton,
  Tooltip,
} from "@mui/material";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";
import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

const EmployeeTable = ({
  employees,
  loading,
  onEdit,
  onDelete,
  onResetPassword,
  onToggleStatus,
}) => {

  const columns = [

    {
      field: "employeeCode",
      headerName: "Employee Code",
      flex: 1,
      minWidth: 140,
    },

    {
      field: "name",
      headerName: "Name",
      flex: 1.3,
      minWidth: 180,
    },

    {
      field: "email",
      headerName: "Email",
      flex: 1.5,
      minWidth: 220,
    },

    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      minWidth: 150,
    },

    {
      field: "role",
      headerName: "Role",
      flex: 1,
      minWidth: 170,
      renderCell: (params) => (
        <Chip
          size="small"
          label={params.value.replaceAll("_", " ")}
        />
      ),
    },

    {
      field: "factory",
      headerName: "Factory",
      flex: 1,
      minWidth: 170,
      valueGetter: (_, row) =>
        row.factory?.factoryName || "-",
    },

    {
      field: "branch",
      headerName: "Branch",
      flex: 1,
      minWidth: 170,
      valueGetter: (_, row) =>
        row.branch?.branchName || "-",
    },

    {
      field: "isActive",
      headerName: "Status",
      flex: 0.8,
      minWidth: 120,
      renderCell: (params) => (
        <Chip
          size="small"
          color={params.value ? "success" : "error"}
          label={params.value ? "Active" : "Inactive"}
        />
      ),
    },

    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      filterable: false,
      width: 180,

      renderCell: (params) => (

        <Box>

          <Tooltip title="Edit">

            <IconButton
              onClick={() => onEdit(params.row)}
            >
              <EditOutlinedIcon />
            </IconButton>

          </Tooltip>

          <Tooltip title="Reset Password">

            <IconButton
              onClick={() =>
                onResetPassword(params.row)
              }
            >
              <LockResetOutlinedIcon />
            </IconButton>

          </Tooltip>

          <Tooltip
            title={
              params.row.isActive
                ? "Deactivate"
                : "Activate"
            }
          >

            <IconButton
              onClick={() =>
                onToggleStatus(params.row)
              }
            >
              {params.row.isActive ? (
                <BlockOutlinedIcon />
              ) : (
                <CheckCircleOutlineOutlinedIcon />
              )}
            </IconButton>

          </Tooltip>

          <Tooltip title="Delete">

            <IconButton
              color="error"
              onClick={() =>
                onDelete(params.row)
              }
            >
              <DeleteOutlineOutlinedIcon />
            </IconButton>

          </Tooltip>

        </Box>

      ),
    },

  ];

  return (

    <Box sx={{ height: 650, width: "100%" }}>

      <DataGrid
        rows={employees}
        columns={columns}
        getRowId={(row) => row._id}
        loading={loading}
        pageSizeOptions={[10, 25, 50, 100]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        disableRowSelectionOnClick
      />

    </Box>

  );

};

export default EmployeeTable;