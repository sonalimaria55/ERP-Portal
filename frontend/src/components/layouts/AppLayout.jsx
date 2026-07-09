



import React, { useState } from "react";

import { Outlet } from "react-router-dom";

import {
    Box,
    IconButton,
    Drawer,
    useMediaQuery,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import Sidebar from "../common/Sidebar";
import Topbar from "../common/Topbar";
import SearchBar from "../common/SearchBar";


const AppLayout = () => {


    const isMobile = useMediaQuery(
        "(max-width:900px)"
    );


    const [open, setOpen] = useState(false);



    const sidebarContent = (

        <Sidebar />

    );



    return (

        <Box
            sx={{
                display:"flex",
                minHeight:"100vh",
                bgcolor:"#F8F7F4"
            }}
        >



            {
                isMobile ? (

                    <Drawer

                        open={open}

                        onClose={() => setOpen(false)}

                    >

                        {sidebarContent}

                    </Drawer>


                ) : (

                    sidebarContent

                )
            }




            <Box

                sx={{
                    flex:1,
                    display:"flex",
                    flexDirection:"column"
                }}

            >



                {
                    isMobile && (

                        <IconButton

                            onClick={() => setOpen(true)}

                            sx={{
                                m:1,
                                width:40
                            }}

                        >

                            <MenuIcon />

                        </IconButton>

                    )
                }



                <Topbar />



                <Box

                    sx={{

                        py:3,

                        px:{
                            xs:2,
                            md:5
                        }

                    }}

                >



                    <Box

                        sx={{

                            mb:3

                        }}

                    >

                        <SearchBar />

                    </Box>




                    <Outlet />



                </Box>


            </Box>


        </Box>

    );

};


export default AppLayout;




