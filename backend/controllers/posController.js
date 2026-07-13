const service =
require("../services/posService");



exports.openSession =
async(req,res,next)=>{

try{

const session =
await service.openSession(
req.body,
req.user
);


res.status(201).json({

success:true,

data:session

});


}catch(error){

next(error);

}

};





exports.createPOSBill =
async(req,res,next)=>{

try{


const bill =
await service.createPOSBill(
req.body,
req.user
);


res.status(201).json({

success:true,

data:bill

});


}catch(error){

next(error);

}

};





exports.getPOSBills =
async(req,res,next)=>{

try{


const bills =
await service.getPOSBills();


res.json({

success:true,

data:bills

});


}catch(error){

next(error);

}

};