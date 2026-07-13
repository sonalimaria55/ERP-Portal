const SalesReturn =
require("../models/SalesReturn");


const generateReturnNumber =
async()=>{

const count =
await SalesReturn.countDocuments();


return `RET${String(count+1).padStart(6,"0")}`;

};



// Create Return Request

const createReturn =
async(data,user)=>{


const returnNumber =
await generateReturnNumber();


return await SalesReturn.create({

...data,

returnNumber,

createdBy:user._id

});


};



// Get Returns

const getReturns =
async()=>{


return await SalesReturn.find()

.populate(
"customer",
"customerName phone"
)

.populate(
"items.product",
"productName productCode"
)

.sort({
createdAt:-1
});

};



// Update Status

const updateReturnStatus =
async(id,status,user)=>{


return await SalesReturn.findByIdAndUpdate(

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

createReturn,

getReturns,

updateReturnStatus

};