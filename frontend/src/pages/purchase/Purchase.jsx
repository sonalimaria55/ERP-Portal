// import React, { useEffect, useState } from "react";

// import {
//     Box,
//     Button,
//     Paper,
// } from "@mui/material";

// import AddIcon from "@mui/icons-material/Add";

// import { useDispatch, useSelector } from "react-redux";


// import {
//     fetchPurchases,
// } from "../../features/purchase/purchaseThunk";


// import PurchaseTable from "../../components/purchase/PurchaseTable";

// import PurchaseDialog from "../../components/purchase/PurchaseDialog";


// const Purchases = () => {


//     const dispatch = useDispatch();


//     const {
//         purchases,
//         loading,
//     } = useSelector(
//         (state) => state.purchase
//     );


//     const [open, setOpen] = useState(false);



//     useEffect(() => {

//         dispatch(fetchPurchases());

//     }, [dispatch]);



//     return (

//         <Box>


//             {/* Header */}

//             <Box
//                 display="flex"
//                 justifyContent="space-between"
//                 alignItems="center"
//                 mb={3}
//             >


//                 <Box
//                     component="h2"
//                     sx={{
//                         margin: 0,
//                         fontWeight: 600,
//                     }}
//                 >
//                     Purchases
//                 </Box>



//                 <Button
//                     variant="contained"
//                     startIcon={<AddIcon />}
//                     onClick={() =>
//                         setOpen(true)
//                     }
//                 >

//                     Add Purchase

//                 </Button>


//             </Box>



//             {/* Table */}

//             <Paper
//                 elevation={2}
//                 sx={{
//                     p:2,
//                 }}
//             >

//                 <PurchaseTable
//                     rows={purchases}
//                     loading={loading}
//                 />

//             </Paper>




//             {/* Create Dialog */}

//             <PurchaseDialog
//                 open={open}
//                 onClose={() =>
//                     setOpen(false)
//                 }
//             />


//         </Box>

//     );

// };


// export default Purchases;


import React from "react";
import {
  Box,
  Typography,
} from "@mui/material";


const Purchase = () => {

  return (
    <Box>

      <Typography variant="h4">
        Purchase
      </Typography>

      <Typography>
        Purchase management module coming soon
      </Typography>

    </Box>
  );
};


export default Purchase;