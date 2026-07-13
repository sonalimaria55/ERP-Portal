// const employeeService = require("../services/employeeService");



// // Create Employee

// const createEmployee = async (req, res) => {
//   try {

//     const employee = await employeeService.createEmployee(
//       req.body,
//       req.user._id
//     );

//     res.status(201).json({
//       success: true,
//       message: "Employee created successfully",
//       employee,
//     });

//   } catch (error) {

//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });

//   }
// };



// // Get All Employees

// const getEmployees = async (req, res) => {
//   try {

//     const employees = await employeeService.getEmployees();

//     res.status(200).json({
//       success: true,
//       count: employees.length,
//       employees,
//     });

//   } catch (error) {

//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });

//   }
// };



// // Get Employee By ID

// const getEmployeeById = async (req, res) => {
//   try {

//     const employee = await employeeService.getEmployeeById(
//       req.params.id
//     );

//     if (!employee) {
//       return res.status(404).json({
//         success: false,
//         message: "Employee not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       employee,
//     });

//   } catch (error) {

//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });

//   }
// };



// // Update Employee

// const updateEmployee = async (req, res) => {
//   try {

//     const employee = await employeeService.updateEmployee(
//       req.params.id,
//       req.body,
//       req.user._id
//     );

//     res.status(200).json({
//       success: true,
//       message: "Employee updated successfully",
//       employee,
//     });

//   } catch (error) {

//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });

//   }
// };



// // Delete Employee

// const deleteEmployee = async (req, res) => {
//   try {

//     await employeeService.deleteEmployee(req.params.id);

//     res.status(200).json({
//       success: true,
//       message: "Employee deleted successfully",
//     });

//   } catch (error) {

//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });

//   }
// };



// // Search Employees

// const searchEmployees = async (req, res) => {
//   try {

//     const employees = await employeeService.searchEmployees(
//       req.query.keyword || ""
//     );

//     res.status(200).json({
//       success: true,
//       count: employees.length,
//       employees,
//     });

//   } catch (error) {

//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });

//   }
// };



// module.exports = {
//   createEmployee,
//   getEmployees,
//   getEmployeeById,
//   updateEmployee,
//   deleteEmployee,
//   searchEmployees,
// };
//----------------------
const employeeService = require("../services/employeeService");

// Create Employee
const createEmployee = async (req, res) => {
  try {
    const employee = await employeeService.createEmployee(
      req.body,
      req.user._id
    );

    res.status(201).json({
      success: true,
      message: "Employee created successfully",
      employee,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Employees
const getEmployees = async (req, res) => {
  try {
    const employees = await employeeService.getEmployees();

    res.status(200).json({
      success: true,
      count: employees.length,
      employees,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Employee By ID
const getEmployeeById = async (req, res) => {
  try {
    const employee = await employeeService.getEmployeeById(req.params.id);

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found",
      });
    }

    res.status(200).json({
      success: true,
      employee,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Employee
const updateEmployee = async (req, res) => {
  try {
    const employee = await employeeService.updateEmployee(
      req.params.id,
      req.body,
      req.user._id
    );

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Employee updated successfully",
      employee,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Employee
const deleteEmployee = async (req, res) => {
  try {
    const deleted = await employeeService.deleteEmployee(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Employee not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Employee deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Search Employees
const searchEmployees = async (req, res) => {
  try {
    const employees = await employeeService.searchEmployees(
      req.query.keyword || ""
    );

    res.status(200).json({
      success: true,
      count: employees.length,
      employees,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  searchEmployees,
};