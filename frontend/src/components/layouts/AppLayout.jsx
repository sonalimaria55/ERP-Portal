// // import React from "react";
// // import { Outlet } from "react-router-dom";
// // import { Box, Container } from "@mui/material";

// // import Sidebar from "../common/SearchBar"
// // import Topbar from "../common/Topbar";


// // const AppLayout = () => {
// //     return (
// //         <Box
// //             sx={{
// //                 display: "flex",
// //                 minHeight: "100vh",
// //                 bgcolor: "#F8F7F4",
// //             }}
// //         >
// //             {/* Sidebar */}
// //             <Sidebar />

// //             {/* Main Content */}
// //             <Box
// //                 sx={{
// //                     flex: 1,
// //                     display: "flex",
// //                     flexDirection: "column",
// //                 }}
// //             >
// //                 {/* Top Navigation */}
// //                 <Topbar />

// //                 {/* Page Content */}
// //                 <Container
// //                     maxWidth={false}
// //                     sx={{
// //                         py: 4,
// //                         px: 5,
// //                     }}
// //                 >
// //                     {/* Search Row */}
// //                     <Box
// //                         sx={{
// //                             display: "flex",
// //                             justifyContent: "space-between",
// //                             alignItems: "center",
// //                             mb: 4,
// //                         }}
// //                     >
// //                         <SearchBar />

// //                         {/* We'll add Branch Selector here later */}
// //                     </Box>

// //                     {/* Dynamic Pages */}
// //                     <Outlet />
// //                 </Container>
// //             </Box>
// //         </Box>
// //     );
// // };

// // export default AppLayout;

// import React from "react";
// import { Outlet } from "react-router-dom";
// import { Box, Container } from "@mui/material";

// import Sidebar from "../common/Sidebar";
// import Topbar from "../common/Topbar";
// import SearchBar from "../common/SearchBar";

// const AppLayout = () => {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         minHeight: "100vh",
//         bgcolor: "#F8F7F4",
//       }}
//     >
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <Box
//         sx={{
//           flex: 1,
//           display: "flex",
//           flexDirection: "column",
//         }}
//       >
//         {/* Top Navigation */}
//         <Topbar />

//         {/* Page Content */}
//         <Container
//           maxWidth={false}
//           sx={{
//             py: 4,
//             px: 5,
//           }}
//         >
//           {/* Search Row */}
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               mb: 4,
//             }}
//           >
//             <SearchBar />

//             {/* Branch Selector will come here later */}
//           </Box>

//           {/* Dynamic Pages */}
//           <Outlet />
//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default AppLayout;
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