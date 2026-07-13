const POSBill =require("../models/POSBill");
const POSSession =require("../models/POSSession");
const {reduceStock}=require("./inventoryTransactionService");


const generateBillNumber =async()=>{

const count =await POSBill.countDocuments();
return `BILL${String(count+1).padStart(6,"0")}`;};



// Open Session

const openSession =
async(data,user)=>{


return await POSSession.create({

...data,

cashier:user._id

});


};



// Create POS Bill

const createPOSBill =
async(data,user)=>{


const billNumber =
await generateBillNumber();


return await POSBill.create({

...data,

billNumber,

createdBy:user._id

});


};



// Get Bills

const getPOSBills =
async()=>{


return await POSBill.find()

.populate(
"items.product",
"productName productCode"
)

.populate(
"customer",
"customerName"
)

.sort({
createdAt:-1
});

};


module.exports={

openSession,

createPOSBill,

getPOSBills

};