const service =
require("../services/paymentService");



exports.createPayment =
async(req,res,next)=>{

try{


const payment =
await service.createPayment(
req.body,
req.user
);


res.status(201).json({

success:true,

message:
"Payment recorded successfully",

data:payment

});


}catch(error){

next(error);

}

};





exports.getPayments =
async(req,res,next)=>{

try{


const payments =
await service.getPayments();


res.json({

success:true,

data:payments

});


}catch(error){

next(error);

}

};





exports.getCustomerPayments =
async(req,res,next)=>{

try{


const payments =
await service.getCustomerPayments(
req.params.customerId
);


res.json({

success:true,

data:payments

});


}catch(error){

next(error);

}

};