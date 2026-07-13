const express=require("express");

const router=express.Router();


const {
createInvoice,
getInvoices,
getInvoiceById
}=require("../controllers/invoiceController");


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
createInvoice
);



router.get(
"/",
protect,
getInvoices
);



router.get(
"/:id",
protect,
getInvoiceById
);



module.exports=router;