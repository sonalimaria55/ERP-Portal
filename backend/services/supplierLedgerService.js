const SupplierLedger =
require("../models/SupplierLedger");



/**
 * Create Purchase Credit Entry
 */
const createPurchaseEntry = async(
{
    supplier,
    purchase,
    amount,
    remarks,
    createdBy
},
session = null
)=>{


const lastEntry =
await SupplierLedger.findOne({
    supplier
})
.sort({
    createdAt:-1
})
.session(session);



const previousBalance =
lastEntry
?
lastEntry.balance
:
0;



const ledger =
{

supplier,

purchase,

transactionType:
"PURCHASE",


debit:0,


credit:amount,


balance:
previousBalance + amount,


remarks:
remarks || "Purchase Entry",


createdBy

};



if(session){

const result =
await SupplierLedger.create(
[ledger],
{
session
});

return result[0];

}


return await SupplierLedger.create(
ledger
);


};





/**
 * Create Payment Debit Entry
 */
const createPaymentEntry = async(
{
    supplier,
    payment,
    amount,
    remarks,
    createdBy
},
session=null
)=>{


const lastEntry =
await SupplierLedger.findOne({
supplier
})
.sort({
createdAt:-1
})
.session(session);



const previousBalance =
lastEntry
?
lastEntry.balance
:
0;



const ledger =
{

supplier,


payment,


transactionType:
"PAYMENT",


debit:
amount,


credit:0,


balance:
previousBalance - amount,


remarks:
remarks || "Supplier Payment",


createdBy

};



if(session){

const result =
await SupplierLedger.create(
[ledger],
{
session
});

return result[0];

}



return await SupplierLedger.create(
ledger
);


};





/**
 * Get Supplier Statement
 */
const getSupplierStatement =
async(
supplierId
)=>{


return await SupplierLedger.find({

supplier:
supplierId

})

.populate(
"purchase",
"purchaseNumber"
)

.populate(
"payment",
"paymentNumber"
)

.sort({
createdAt:1
});


};




module.exports={

createPurchaseEntry,

createPaymentEntry,

getSupplierStatement

};