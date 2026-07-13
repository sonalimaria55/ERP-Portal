const InternalTransfer =
require("../models/InternalTransfer");


const generateTransferCode =
async()=>{

const count =
await InternalTransfer.countDocuments();


return `TRF${String(count+1).padStart(6,"0")}`;

};



// Create Transfer

const createInternalTransfer =
async(data,user)=>{


const transferCode =
await generateTransferCode();



return await InternalTransfer.create({

    ...data,

    transferCode,

    createdBy:user._id,

});

};



// Get All

const getAllInternalTransfers =
async()=>{


return await InternalTransfer.find()

.populate(
"items.product",
"productName productCode"
)

.populate(
"fromBranch",
"branchName"
)

.populate(
"toBranch",
"branchName"
)

.sort({
createdAt:-1
});


};



// Update Status

const updateTransferStatus =
async(id,status,user)=>{


return await InternalTransfer.findByIdAndUpdate(

id,

{
status,
approvedBy:user._id
},

{
new:true
}

);


};



module.exports={

createInternalTransfer,

getAllInternalTransfers,

updateTransferStatus

};