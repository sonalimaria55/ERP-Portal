const express=require("express");

const router=express.Router();


const {
createCustomer,
getCustomers,
getCustomerById,
updateCustomer,
deleteCustomer
}=require("../controllers/customerController");


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
"online_manager",
"customer_support"
),
createCustomer
);



router.get(
"/",
protect,
getCustomers
);



router.get(
"/:id",
protect,
getCustomerById
);



router.put(
"/:id",
protect,
authorize(
"super_admin",
"branch_admin",
"sales_person"
),
updateCustomer
);



router.delete(
"/:id",
protect,
authorize(
"super_admin"
),
deleteCustomer
);



module.exports=router;