const express=require("express");

const router=express.Router();


const {
openSession,
createPOSBill,
getPOSBills
}=require("../controllers/posController");


const {protect}=require("../middleware/authMiddleware");

const authorize=
require("../middleware/authorizeMiddleware");



router.post(
"/session/open",
protect,
authorize(
"super_admin",
"branch_admin",
"sales_person"
),
openSession
);



router.post(
"/bill",
protect,
authorize(
"super_admin",
"branch_admin",
"sales_person"
),
createPOSBill
);



router.get(
"/bills",
protect,
getPOSBills
);



module.exports=router;