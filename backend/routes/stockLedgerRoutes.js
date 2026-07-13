const express=require("express");

const router=express.Router();


const {
getProductLedger,
getBranchLedger
}=require("../controllers/stockLedgerController");


const {protect}=require("../middleware/authMiddleware");



router.get(
"/product/:productId",
protect,
getProductLedger
);



router.get(
"/branch/:branchId",
protect,
getBranchLedger
);



module.exports=router;