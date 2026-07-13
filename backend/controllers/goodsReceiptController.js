const goodsReceiptService =
require("../services/goodsReceiptService");



/**
 * Create GRN
 */
exports.createGRN =
async(req,res,next)=>{

try{


const grn =
await goodsReceiptService.createGRN(

req.body,

req.user

);



res.status(201).json({

success:true,

message:
"Goods Receipt created successfully",

data:grn

});


}
catch(error){

next(error);

}

};





/**
 * Get All GRN
 */

exports.getAllGRN =
async(req,res,next)=>{

try{


const grns =
await goodsReceiptService.getAllGRN();



res.status(200).json({

success:true,

data:grns

});


}
catch(error){

next(error);

}

};





/**
 * Get GRN By ID
 */

exports.getGRNById =
async(req,res,next)=>{


try{


const grn =
await goodsReceiptService.getGRNById(
req.params.id
);



res.status(200).json({

success:true,

data:grn

});


}
catch(error){

next(error);

}

};