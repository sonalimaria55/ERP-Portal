const express =
require("express");


const router =
express.Router();



const {

createGRN,

getAllGRN,

getGRNById

}
=
require("../controllers/goodsReceiptController");



const {protect}
=
require("../middleware/authMiddleware");


const authorize =
require("../middleware/authorizeMiddleware");





// Create GRN

router.post(

"/",

protect,

authorize(

"super_admin",

"factory_admin",

"purchase_manager"

),

createGRN

);





// Get GRN List

router.get(

"/",

protect,

getAllGRN

);





// Get GRN Details

router.get(

"/:id",

protect,

getGRNById

);





module.exports =
router;