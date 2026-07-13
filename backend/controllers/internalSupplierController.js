const service =
require("../services/internalSupplierService");



exports.createInternalSupplier =
async(req,res,next)=>{

try{

const supplier =
await service.createInternalSupplier(req.body);


res.status(201).json({
    success:true,
    message:
    "Internal supplier created successfully",
    data:supplier
});


}catch(error){
    next(error);
}

};




exports.getInternalSuppliers =
async(req,res,next)=>{

try{

const suppliers =
await service.getAllInternalSuppliers();


res.json({
    success:true,
    data:suppliers
});


}catch(error){
next(error);
}

};




exports.getInternalSupplierById =
async(req,res,next)=>{

try{

const supplier =
await service.getInternalSupplierById(
    req.params.id
);


res.json({
    success:true,
    data:supplier
});


}catch(error){
next(error);
}

};




exports.updateInternalSupplier =
async(req,res,next)=>{

try{

const supplier =
await service.updateInternalSupplier(
    req.params.id,
    req.body
);


res.json({
    success:true,
    data:supplier
});


}catch(error){
next(error);
}

};




exports.deleteInternalSupplier =
async(req,res,next)=>{

try{

await service.deleteInternalSupplier(
    req.params.id
);


res.json({
    success:true,
    message:"Internal supplier deleted"
});


}catch(error){
next(error);
}

};