const InternalCustomer = require("../models/InternalCustomer");


const generateCustomerCode = async () => {
  const count = await InternalCustomer.countDocuments();

  return `ICUST${String(count + 1).padStart(6, "0")}`;
};


// Create Internal Customer
const createInternalCustomer = async (data) => {

  const customerCode = await generateCustomerCode();

  const customer = await InternalCustomer.create({
    ...data,
    customerCode,
  });

  return customer;
};


// Get All Internal Customers
const getAllInternalCustomers = async () => {

  return await InternalCustomer.find()
    .populate("factory", "factoryName factoryCode")
    .populate("branch", "branchName branchCode")
    .sort({ createdAt: -1 });

};


// Get By ID
const getInternalCustomerById = async (id) => {

  return await InternalCustomer.findById(id)
    .populate("factory", "factoryName factoryCode")
    .populate("branch", "branchName branchCode");

};


// Update
const updateInternalCustomer = async (id, data) => {

  return await InternalCustomer.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true,
    }
  );

};


// Delete
const deleteInternalCustomer = async (id) => {

  return await InternalCustomer.findByIdAndDelete(id);

};


module.exports = {
  createInternalCustomer,
  getAllInternalCustomers,
  getInternalCustomerById,
  updateInternalCustomer,
  deleteInternalCustomer,
};