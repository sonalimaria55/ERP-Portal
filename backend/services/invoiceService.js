const Invoice =
require("../models/Invoice");



const generateInvoiceNumber =
async()=>{

const count =
await Invoice.countDocuments();


return `INV${String(count+1).padStart(6,"0")}`;

};



// Create Invoice

const createInvoice =
async(data,user)=>{


const invoiceNumber =
await generateInvoiceNumber();


return await Invoice.create({

    ...data,

    invoiceNumber,

    createdBy:user._id

});

};



// Get All Invoices

const getInvoices =
async()=>{


return await Invoice.find()

.populate(
"customer",
"customerName phone"
)

.populate(
"branch",
"branchName"
)

.populate(
"items.product",
"productName productCode"
)

.sort({
createdAt:-1
});


};



// Get Single Invoice

const getInvoiceById =
async(id)=>{


return await Invoice.findById(id)

.populate("customer")

.populate("items.product");


};



module.exports={

createInvoice,

getInvoices,

getInvoiceById

};