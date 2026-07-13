import React from "react";
import {
    Box,
    Chip,
    IconButton,
    Tooltip,
    Avatar,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
const ProductTable = ({
    products = [],
    loading = false,
    onEdit,
    onDelete,
    onAdjustStock,


}) => {
    const columns = [
        {
            field: "image",
            headerName: "Image",
            width: 90,
            sortable: false,
            renderCell: (params) => {

                const image =
                    params.row.images?.[0]?.url;

                return (
                    <Avatar
                        src={image || undefined}
                        variant="rounded"
                        sx={{
                            width: 40,
                            height: 40,
                            mt: 0.5,
                        }}
                    >
                        {params.row.productName
                            ?.charAt(0)
                            ?.toUpperCase()}
                    </Avatar>
                );
            },
        },
        {
            field: "sku",
            headerName: "SKU",
            width: 130,
        },
        {
            field: "productName",
            headerName: "Product",
            flex: 1,
            minWidth: 220,
        },
        {
            field: "category",
            headerName: "Category",
            width: 170,
            renderCell: (params) =>
                params.row.category?.categoryName ||
                params.row.category?.name ||
                "-",
        },
        {
            field: "brand",
            headerName: "Brand",
            width: 150,
        },
        {
            field: "sellingPrice",
            headerName: "Price",
            width: 120,
            renderCell: (params) => `₹${params.value}`,
        },
        {
            field: "initialStock",
            headerName: "Stock",
            width: 110,
        },
        {
            field: "status",
            headerName: "Status",
            width: 130,
            renderCell: (params) => (
                <Chip
                    size="small"
                    label={params.value}
                    color={
                        params.value === "Active"
                            ? "success"
                            : "default"
                    }
                />
            ),
        },
        {
            field: "actions",
            headerName: "Actions",
            width: 180,
            sortable: false,
            renderCell: (params) => (
                <>
                    <Tooltip title="Edit">
                        <IconButton
                            color="primary"
                            onClick={() => onEdit(params.row)}
                        >
                            <EditIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Adjust Stock">
                        <IconButton
                            color="secondary"
                            onClick={() => onAdjustStock(params.row)}
                        >
                            <Inventory2OutlinedIcon />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Delete">
                        <IconButton
                            color="error"
                            onClick={() => onDelete(params.row)}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
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
                rows={products}
                columns={columns}
                loading={loading}
                getRowId={(row) => row._id}
                pageSizeOptions={[10, 25, 50]}
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

export default ProductTable;