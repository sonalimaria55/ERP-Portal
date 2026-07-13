const service =
require("../services/customerService");



exports.createCustomer =
async(req,res,next)=>{

try{


const customer =
await service.createCustomer(
req.body
);


res.status(201).json({

success:true,

message:
"Customer created successfully",

data:customer

});


}catch(error){

next(error);

}

};




exports.getCustomers =
async(req,res,next)=>{

try{


const customers =
await service.getCustomers();


res.json({

success:true,

data:customers

});


}catch(error){

next(error);

}

};




exports.getCustomerById =
async(req,res,next)=>{

try{


const customer =
await service.getCustomerById(
req.params.id
);


res.json({

success:true,

data:customer

});


}catch(error){

next(error);

}

};




exports.updateCustomer =
async(req,res,next)=>{

try{


const customer =
await service.updateCustomer(

req.params.id,

req.body

);


res.json({

success:true,

data:customer

});


}catch(error){

next(error);

}

};




exports.deleteCustomer =
async(req,res,next)=>{

try{


await service.deleteCustomer(
req.params.id
);


res.json({

success:true,

message:"Customer deleted"

});


}catch(error){

next(error);

}

};