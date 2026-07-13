import React from "react";

import {
  Box,
  Chip,
  IconButton,
} from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const SupplierTable = ({
  suppliers = [],
  onEdit = () => {},
  onDelete = () => {},
}) => {

  const columns = [
    {
      field: "supplierCode",
      headerName: "Code",
      width: 130,
    },

    {
      field: "supplierName",
      headerName: "Supplier",
      flex: 1,
      minWidth: 220,
    },

    {
      field: "contactPerson",
      headerName: "Contact Person",
      width: 180,
    },

    {
      field: "phone",
      headerName: "Phone",
      width: 150,
    },

    {
      field: "gstNumber",
      headerName: "GST Number",
      width: 180,
    },

    {
      field: "openingBalance",
      headerName: "Opening Balance",
      width: 160,
      valueFormatter: (params) => `₹ ${params.value || 0}`,
    },

    {
      field: "creditLimit",
      headerName: "Credit Limit",
      width: 150,
      valueFormatter: (params) => `₹ ${params.value || 0}`,
    },

    {
      field: "isActive",
      headerName: "Status",
      width: 120,
      renderCell: (params) => (
        <Chip
          label={params.value ? "Active" : "Inactive"}
          color={params.value ? "success" : "default"}
          size="small"
        />
      ),
    },

    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      sortable: false,
      renderCell: (params) => (
        <>
          <IconButton
            color="primary"
            onClick={() => onEdit(params.row)}
          >
            <EditOutlinedIcon />
          </IconButton>

          <IconButton
            color="error"
            onClick={() => onDelete(params.row)}
          >
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <Box
      sx={{
        height: 600,
        width: "100%",
      }}
    >
      <DataGrid
        rows={suppliers}
        columns={columns}
        getRowId={(row) => row._id}
        pageSizeOptions={[10, 25, 50]}
        initialState={{
          pagination: {
            paginationModel: {
              page: 0,
              pageSize: 10,
            },
          },
        }}
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default SupplierTable;