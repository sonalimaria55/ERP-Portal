const Customer =
require("../models/Customer");



const generateCustomerCode =
async()=>{

const count =
await Customer.countDocuments();


return `CUST${String(count+1).padStart(6,"0")}`;

};



// Create Customer

const createCustomer =
async(data)=>{


const customerCode =
await generateCustomerCode();


return await Customer.create({

...data,

customerCode

});


};



// Get All

const getCustomers =
async()=>{


return await Customer.find()
.sort({
createdAt:-1
});


};



// Get By ID

const getCustomerById =
async(id)=>{


return await Customer.findById(id);


};



// Update

const updateCustomer =
async(id,data)=>{


return await Customer.findByIdAndUpdate(

id,

data,

{
new:true,
runValidators:true
}

);


};



// Delete

const deleteCustomer =
async(id)=>{


return await Customer.findByIdAndDelete(id);


};


module.exports={

createCustomer,

getCustomers,

getCustomerById,

updateCustomer,

deleteCustomer

};