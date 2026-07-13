const express=require("express");

const router=express.Router();


const {
createReturn,
getReturns,
updateReturnStatus
}
=
require("../controllers/salesReturnController");


const {protect}=require("../middleware/authMiddleware");

const authorize=
require("../middleware/authorizeMiddleware");



router.post(
"/",
protect,
authorize(
"super_admin",
"branch_admin",
"sales_person"
),
createReturn
);



router.get(
"/",
protect,
getReturns
);



router.put(
"/:id/status",
protect,
authorize(
"super_admin",
"branch_admin"
),
updateReturnStatus
);



module.exports=router;