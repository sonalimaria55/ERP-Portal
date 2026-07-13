const express=require("express");

const router=express.Router();


const {
createInternalTransfer,
getInternalTransfers,
updateTransferStatus
}=require("../controllers/internalTransferController");


const {protect}=require("../middleware/authMiddleware");

const authorize=
require("../middleware/authorizeMiddleware");



router.post(
"/",
protect,
authorize(
"super_admin",
"factory_admin",
"branch_admin",
"warehouse_manager"
),
createInternalTransfer
);



router.get(
"/",
protect,
getInternalTransfers
);



router.put(
"/:id/status",
protect,
authorize(
"super_admin",
"factory_admin",
"branch_admin"
),
updateTransferStatus
);



module.exports=router;