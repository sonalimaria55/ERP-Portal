const express=require("express");

const router=express.Router();


const {
createPayment,
getPayments,
getCustomerPayments
}=require("../controllers/paymentController");


const {protect}=require("../middleware/authMiddleware");

const authorize =
require("../middleware/authorizeMiddleware");



router.post(
"/",
protect,
authorize(
"super_admin",
"branch_admin",
"accounts_manager",
"sales_person"
),
createPayment
);



router.get(
"/",
protect,
getPayments
);



router.get(
"/customer/:customerId",
protect,
getCustomerPayments
);



module.exports=router;