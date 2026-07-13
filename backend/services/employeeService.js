// const Employee = require("../models/Employee");
// const generateEmployeeCode = require("../utils/generateEmployeeCode");



// // Create Employee

// const createEmployee = async (data, createdBy) => {

//   const {
//     fullName,
//     photo,
//     phone,
//     email,
//     aadhaarNumber,
//     panNumber,
//     uanNumber,
//     department,
//     factory,
//     branch,
//     joiningDate,
//     address,
//     city,
//     state,
//     pincode,
//     emergencyContactName,
//     emergencyContactPhone,
//     user,
//   } = data;



//   if (await Employee.findOne({ email })) {
//     throw new Error("Email already exists");
//   }

//   if (await Employee.findOne({ phone })) {
//     throw new Error("Phone number already exists");
//   }

//   if (await Employee.findOne({ aadhaarNumber })) {
//     throw new Error("Aadhaar number already exists");
//   }

//   if (await Employee.findOne({ panNumber })) {
//     throw new Error("PAN number already exists");
//   }



//   const employee = await Employee.create({

//     employeeCode: await generateEmployeeCode(),

//     fullName,
//     photo,
//     phone,
//     email,
//     aadhaarNumber,
//     panNumber,
//     uanNumber,

//     department,
//     factory,
//     branch,

//     joiningDate,

//     address,
//     city,
//     state,
//     pincode,

//     emergencyContactName,
//     emergencyContactPhone,

//     user,

//     createdBy,

//   });

//   return employee;

// };



// // Get All Employees

// const getEmployees = async () => {

//   return await Employee.find()

//     .populate("factory", "factoryName")

//     .populate("branch", "branchName")

//     .populate("user", "name email role")

//     .sort({ createdAt: -1 });

// };



// // Get Employee By ID

// const getEmployeeById = async (id) => {

//   return await Employee.findById(id)

//     .populate("factory", "factoryName")

//     .populate("branch", "branchName")

//     .populate("user", "name email role");

// };



// // Update Employee

// const updateEmployee = async (id, data, updatedBy) => {

//   const employee = await Employee.findById(id);

//   if (!employee) {
//     throw new Error("Employee not found");
//   }

//   Object.assign(employee, data);

//   employee.updatedBy = updatedBy;

//   await employee.save();

//   return employee;

// };



// // Delete Employee

// const deleteEmployee = async (id) => {

//   const employee = await Employee.findById(id);

//   if (!employee) {
//     throw new Error("Employee not found");
//   }

//   await employee.deleteOne();

// };



// // Search Employee

// const searchEmployees = async (keyword) => {

//   return await Employee.find({

//     $or: [

//       {
//         employeeCode: {
//           $regex: keyword,
//           $options: "i",
//         },
//       },

//       {
//         fullName: {
//           $regex: keyword,
//           $options: "i",
//         },
//       },

//       {
//         phone: {
//           $regex: keyword,
//           $options: "i",
//         },
//       },

//       {
//         email: {
//           $regex: keyword,
//           $options: "i",
//         },
//       },

//       {
//         aadhaarNumber: {
//           $regex: keyword,
//           $options: "i",
//         },
//       },

//       {
//         panNumber: {
//           $regex: keyword,
//           $options: "i",
//         },
//       },

//     ],

//   });

// };

// module.exports = {

//   createEmployee,

//   getEmployees,

//   getEmployeeById,

//   updateEmployee,

//   deleteEmployee,

//   searchEmployees,

// };

const Employee = require("../models/Employee");

// ======================================
// Generate Employee ID
// ======================================

const generateEmployeeId = async () => {
  const lastEmployee = await Employee.findOne()
    .sort({ createdAt: -1 })
    .select("employeeId");

  let nextNumber = 1;

  if (lastEmployee?.employeeId) {
    const number = parseInt(
      lastEmployee.employeeId.replace("EMP", ""),
      10
    );

    if (!isNaN(number)) {
      nextNumber = number + 1;
    }
  }

  return `EMP${String(nextNumber).padStart(6, "0")}`;
};

// ======================================
// Generate Employee Code
// ======================================

const generateEmployeeCode = async () => {
  const lastEmployee = await Employee.findOne()
    .sort({ createdAt: -1 })
    .select("employeeCode");

  let nextNumber = 1;

  if (lastEmployee?.employeeCode) {
    const match = lastEmployee.employeeCode.match(/\d+$/);

    if (match) {
      nextNumber = parseInt(match[0], 10) + 1;
    }
  }

  return `EC${String(nextNumber).padStart(6, "0")}`;
};

// ======================================
// Create Employee
// ======================================

const createEmployee = async (data, userId) => {
  data.employeeId = await generateEmployeeId();
  data.employeeCode = await generateEmployeeCode();

  data.createdBy = userId;
  data.updatedBy = userId;

  const employee = await Employee.create(data);

  return employee.populate([
    { path: "factory", select: "factoryName factoryCode" },
    { path: "branch", select: "branchName branchCode" },
    { path: "user", select: "name email role" },
  ]);
};

// ======================================
// Get All Employees
// ======================================

const getEmployees = async () => {
  return Employee.find()
    .populate("factory", "factoryName factoryCode")
    .populate("branch", "branchName branchCode")
    .populate("user", "name email role")
    .sort({ createdAt: -1 });
};

// ======================================
// Get Employee By ID
// ======================================

const getEmployeeById = async (id) => {
  return Employee.findById(id)
    .populate("factory", "factoryName factoryCode")
    .populate("branch", "branchName branchCode")
    .populate("user", "name email role");
};

// ======================================
// Update Employee
// ======================================

const updateEmployee = async (id, data, userId) => {
  delete data.employeeId;
  delete data.employeeCode;

  data.updatedBy = userId;

  return Employee.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  })
    .populate("factory", "factoryName factoryCode")
    .populate("branch", "branchName branchCode")
    .populate("user", "name email role");
};

// ======================================
// Delete Employee
// ======================================

const deleteEmployee = async (id) => {
  return Employee.findByIdAndDelete(id);
};

// ======================================
// Search Employees
// ======================================

const searchEmployees = async (keyword) => {
  return Employee.find({
    $or: [
      { employeeId: { $regex: keyword, $options: "i" } },
      { employeeCode: { $regex: keyword, $options: "i" } },
      { fullName: { $regex: keyword, $options: "i" } },
      { phone: { $regex: keyword, $options: "i" } },
      { email: { $regex: keyword, $options: "i" } },
    ],
  })
    .populate("factory", "factoryName factoryCode")
    .populate("branch", "branchName branchCode")
    .sort({ createdAt: -1 });
};

module.exports = {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  searchEmployees,
};