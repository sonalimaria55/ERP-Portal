const Payment =
require("../models/Payment");


const Invoice =
require("../models/Invoice");



const generatePaymentNumber =
async()=>{

const count =
await Payment.countDocuments();


return `PAY${String(count+1).padStart(6,"0")}`;

};



// Create Payment

const createPayment =
async(data,user)=>{


const paymentNumber =
await generatePaymentNumber();



const payment =
await Payment.create({

    ...data,

    paymentNumber,

    receivedBy:user._id

});



// Update invoice payment status

const invoice =
await Invoice.findById(
data.invoice
);


const totalPaid =
await Payment.aggregate([
{
$match:{
invoice:invoice._id,
status:"success"
}
},
{
$group:{
_id:null,
total:{
$sum:"$amount"
}
}
}
]);



const paidAmount =
totalPaid[0]?.total || 0;



let paymentStatus="unpaid";


if(paidAmount >= invoice.grandTotal){

    paymentStatus="paid";

}
else if(paidAmount > 0){

    paymentStatus="partial";

}



await Invoice.findByIdAndUpdate(
invoice._id,
{
paymentStatus
}
);



return payment;

};




// Get Payments

const getPayments =
async()=>{


return await Payment.find()

.populate(
"invoice",
"invoiceNumber grandTotal"
)

.populate(
"customer",
"customerName"
)

.sort({
createdAt:-1
});


};




// Customer Payment History

const getCustomerPayments =
async(customerId)=>{


return await Payment.find({
customer:customerId
})

.populate(
"invoice",
"invoiceNumber"
)

.sort({
createdAt:-1
});


};



module.exports={

createPayment,

getPayments,

getCustomerPayments

};