const service =
require("../services/salesOrderService");



exports.createSalesOrder =
async(req,res,next)=>{

try{


const order =
await service.createSalesOrder(
req.body,
req.user
);


res.status(201).json({

success:true,

message:"Sales order created",

data:order

});


}catch(error){

next(error);

}

};




exports.getSalesOrders =
async(req,res,next)=>{

try{


const orders =
await service.getSalesOrders();


res.json({

success:true,

data:orders

});


}catch(error){

next(error);

}

};




exports.updateOrderStatus =
async(req,res,next)=>{

try{


const order =
await service.updateOrderStatus(

req.params.id,

req.body.status

);


res.json({

success:true,

data:order

});


}catch(error){

next(error);

}

};