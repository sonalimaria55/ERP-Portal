import React from "react";

import {
    Box,
    IconButton,
    Tooltip,
} from "@mui/material";


import {
    DataGrid,
} from "@mui/x-data-grid";


import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import InventoryIcon from "@mui/icons-material/Inventory";



const PurchaseTable = ({
    rows = [],
    loading = false,
}) => {



    const columns = [


        {
            field: "purchaseNumber",
            headerName: "Purchase No",
            flex: 1,
        },


        {
            field: "supplier",
            headerName: "Supplier",
            flex: 1,

            valueGetter: (params) => {

                return (
                    params.row.supplier?.supplierName ||
                    "-"
                );

            },
        },


        {
            field: "items",
            headerName: "Items",
            flex: 0.8,

            valueGetter: (params)=>{

                return (
                    params.row.items?.length || 0
                );

            }
        },


        {
            field: "grandTotal",
            headerName: "Amount",
            flex: 1,

            renderCell:(params)=>{

                return `₹ ${params.value || 0}`;

            }

        },


        {
            field: "status",
            headerName: "Status",
            flex: 1,
        },


        {
            field:"createdAt",
            headerName:"Date",
            flex:1,

            valueGetter:(params)=>{

                return params.value
                ?
                new Date(
                    params.value
                ).toLocaleDateString()
                :
                "-";

            }
        },


        {
            field:"actions",
            headerName:"Actions",
            flex:1,

            sortable:false,

            renderCell:(params)=>{


                return (

                    <Box>


                        <Tooltip title="View">

                            <IconButton>

                                <VisibilityIcon />

                            </IconButton>

                        </Tooltip>



                        {
                            params.row.status !==
                            "Received" &&

                            <Tooltip title="Receive">

                                <IconButton>

                                    <InventoryIcon />

                                </IconButton>

                            </Tooltip>
                        }



                        <Tooltip title="Delete">

                            <IconButton>

                                <DeleteIcon />

                            </IconButton>

                            </Tooltip>


                    </Box>

                );


            }

        }


    ];



    return (

        <DataGrid

            rows={rows}

            columns={columns}

            getRowId={(row)=>
                row._id
            }

            loading={loading}

            autoHeight

            disableRowSelectionOnClick


            pageSizeOptions={[
                5,
                10,
                25
            ]}

        />

    );

};



export default PurchaseTable;