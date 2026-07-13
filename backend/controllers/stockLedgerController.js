const service =
require("../services/stockLedgerService");



exports.getProductLedger =
async(req,res,next)=>{

try{


const ledger =
await service.getProductLedger(
req.params.productId
);


res.json({

success:true,

data:ledger

});


}catch(error){

next(error);

}

};




exports.getBranchLedger =
async(req,res,next)=>{

try{


const ledger =
await service.getBranchLedger(
req.params.branchId
);


res.json({

success:true,

data:ledger

});


}catch(error){

next(error);

}

};