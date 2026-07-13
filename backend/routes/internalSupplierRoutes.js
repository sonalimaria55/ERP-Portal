const express=require("express");

const router=express.Router();


const {
createInternalSupplier,
getInternalSuppliers,
getInternalSupplierById,
updateInternalSupplier,
deleteInternalSupplier
}=require("../controllers/internalSupplierController");


const {protect}=require("../middleware/authMiddleware");

const authorize=
require("../middleware/authorizeMiddleware");



router.post(
"/",
protect,
authorize(
"super_admin",
"factory_admin",
"branch_admin"
),
createInternalSupplier
);



router.get(
"/",
protect,
getInternalSuppliers
);



router.get(
"/:id",
protect,
getInternalSupplierById
);



router.put(
"/:id",
protect,
authorize(
"super_admin",
"factory_admin",
"branch_admin"
),
updateInternalSupplier
);



router.delete(
"/:id",
protect,
authorize("super_admin"),
deleteInternalSupplier
);



module.exports=router;