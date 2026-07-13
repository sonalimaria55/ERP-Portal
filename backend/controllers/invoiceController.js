const service =
require("../services/invoiceService");



exports.createInvoice =
async(req,res,next)=>{

try{


const invoice =
await service.createInvoice(
req.body,
req.user
);


res.status(201).json({

success:true,

message:
"Invoice created successfully",

data:invoice

});


}catch(error){

next(error);

}

};





exports.getInvoices =
async(req,res,next)=>{

try{


const invoices =
await service.getInvoices();


res.json({

success:true,

data:invoices

});


}catch(error){

next(error);

}

};





exports.getInvoiceById =
async(req,res,next)=>{

try{


const invoice =
await service.getInvoiceById(
req.params.id
);


res.json({

success:true,

data:invoice

});


}catch(error){

next(error);

}

};