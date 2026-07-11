const Employee = require("../models/Employee");

const generateEmployeeCode = async () => {
  const lastEmployee = await Employee.findOne()
    .sort({ createdAt: -1 })
    .select("employeeCode");

  if (!lastEmployee || !lastEmployee.employeeCode) {
    return "EMP000001";
  }

  const lastNumber = parseInt(
    lastEmployee.employeeCode.replace("EMP", ""),
    10
  );

  const nextNumber = lastNumber + 1;

  return `EMP${String(nextNumber).padStart(6, "0")}`;
};

module.exports = generateEmployeeCode;