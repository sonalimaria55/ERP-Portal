const InternalSupplier =
require("../models/InternalSupplier");



const generateSupplierCode = async()=>{

    const count =
    await InternalSupplier.countDocuments();


    return `ISUP${String(count+1).padStart(6,"0")}`;

};



// Create

const createInternalSupplier = async(data)=>{

    const supplierCode =
    await generateSupplierCode();


    return await InternalSupplier.create({
        ...data,
        supplierCode,
    });

};



// Get All

const getAllInternalSuppliers = async()=>{

    return await InternalSupplier.find()
    .populate(
        "factory",
        "factoryName factoryCode"
    )
    .populate(
        "branch",
        "branchName branchCode"
    )
    .sort({
        createdAt:-1
    });

};



// Get One

const getInternalSupplierById = async(id)=>{

    return await InternalSupplier.findById(id)
    .populate("factory")
    .populate("branch");

};



// Update

const updateInternalSupplier =
async(id,data)=>{

    return await InternalSupplier.findByIdAndUpdate(
        id,
        data,
        {
            new:true,
            runValidators:true
        }
    );

};



// Delete

const deleteInternalSupplier =
async(id)=>{

    return await InternalSupplier.findByIdAndDelete(id);

};



module.exports={
    createInternalSupplier,
    getAllInternalSuppliers,
    getInternalSupplierById,
    updateInternalSupplier,
    deleteInternalSupplier,
};