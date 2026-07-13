const SalesOrder =
require("../models/SalesOrder");



const generateOrderNumber =
async()=>{

const count =
await SalesOrder.countDocuments();


return `SO${String(count+1).padStart(6,"0")}`;

};



// Create Order

const createSalesOrder =
async(data,user)=>{


const orderNumber =
await generateOrderNumber();


return await SalesOrder.create({

...data,

orderNumber,

createdBy:user._id,

});


};



// Get Orders

const getSalesOrders =
async()=>{


return await SalesOrder.find()

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



// Update Status

const updateOrderStatus =
async(id,status)=>{


return await SalesOrder.findByIdAndUpdate(

id,

{
status
},

{
new:true
}

);


};



module.exports={

createSalesOrder,

getSalesOrders,

updateOrderStatus

};