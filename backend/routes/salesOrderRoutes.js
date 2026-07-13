const express=require("express");

const router=express.Router();


const {
createSalesOrder,
getSalesOrders,
updateOrderStatus
}=require("../controllers/salesOrderController");


const {protect}=require("../middleware/authMiddleware");

const authorize=
require("../middleware/authorizeMiddleware");



router.post(
"/",
protect,
authorize(
"super_admin",
"branch_admin",
"sales_person",
"online_manager"
),
createSalesOrder
);



router.get(
"/",
protect,
getSalesOrders
);



router.put(
"/:id/status",
protect,
authorize(
"super_admin",
"branch_admin"
),
updateOrderStatus
);



module.exports=router;