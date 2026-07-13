const Inventory =
require("../models/Inventory");


const StockLedger =
require("../models/StockLedger");



/*
 Increase Stock
 Purchase / Transfer In / Return
*/

const increaseStock =
async({

product,
branch,
factory,
quantity,
transactionType,
referenceType,
referenceId,
user

})=>{


let inventory =
await Inventory.findOne({

product,

branch:branch || null

});



if(!inventory){

inventory =
await Inventory.create({

product,

branch:branch || null,

quantity:0

});

}



inventory.quantity += quantity;


await inventory.save();



await StockLedger.create({

product,

branch,

factory,

transactionType,

referenceType,

referenceId,

quantity,

balanceAfter:
inventory.quantity,

createdBy:user._id

});



return inventory;

};





/*
 Reduce Stock
 Sale / Transfer Out
*/


const reduceStock =
async({

product,
branch,
quantity,
transactionType,
referenceType,
referenceId,
user

})=>{


const inventory =
await Inventory.findOne({

product,

branch

});



if(!inventory){

throw new Error(
"Inventory not found"
);

}



const available =
inventory.quantity -
inventory.reservedQuantity;



if(available < quantity){

throw new Error(
"Insufficient stock"
);

}



inventory.quantity -= quantity;


await inventory.save();



await StockLedger.create({

product,

branch,

transactionType,

referenceType,

referenceId,

quantity:-quantity,

balanceAfter:
inventory.quantity,

createdBy:user._id

});



return inventory;

};




module.exports={

increaseStock,

reduceStock

};