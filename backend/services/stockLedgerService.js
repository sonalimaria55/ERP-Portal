const StockLedger =
require("../models/StockLedger");



// Create Ledger Entry

const createLedgerEntry =
async(data)=>{

return await StockLedger.create(data);

};



// Product History

const getProductLedger =
async(productId)=>{

return await StockLedger.find({
    product:productId
})

.populate(
"product",
"productName productCode"
)

.populate(
"branch",
"branchName"
)

.populate(
"factory",
"factoryName"
)

.sort({
createdAt:-1
});

};



// Branch Stock History

const getBranchLedger =
async(branchId)=>{


return await StockLedger.find({
branch:branchId
})

.populate(
"product",
"productName productCode"
)

.sort({
createdAt:-1
});


};



module.exports={

createLedgerEntry,

getProductLedger,

getBranchLedger

};