const service =
require("../services/internalTransferService");



exports.createInternalTransfer =
async(req,res,next)=>{

try{


const transfer =
await service.createInternalTransfer(
req.body,
req.user
);



res.status(201).json({

success:true,

message:
"Internal transfer created",

data:transfer

});


}catch(error){

next(error);

}

};





exports.getInternalTransfers =
async(req,res,next)=>{

try{


const transfers =
await service.getAllInternalTransfers();



res.json({

success:true,

data:transfers

});


}catch(error){

next(error);

}

};





exports.updateTransferStatus =
async(req,res,next)=>{

try{


const transfer =
await service.updateTransferStatus(

req.params.id,

req.body.status,

req.user

);



res.json({

success:true,

data:transfer

});


}catch(error){

next(error);

}

};