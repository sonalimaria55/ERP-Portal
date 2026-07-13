// const supplierService = require("../services/supplierService");



// // Create Supplier
// const createSupplier = async (req, res) => {

//     try {

//         const supplier =
//             await supplierService.createSupplier(
//                 req.body,
//                 req.user
//             );


//         res.status(201).json({

//             success:true,

//             message:
//             "Supplier created successfully",

//             data:supplier,

//         });


//     } catch(error) {

//         res.status(400).json({

//             success:false,

//             message:error.message,

//         });

//     }

// };




// // Get All Suppliers
// const getAllSuppliers = async (req, res) => {

//     try {

//         const suppliers =
//             await supplierService.getAllSuppliers();


//         res.status(200).json({

//             success:true,

//             data:suppliers,

//         });


//     } catch(error) {

//         res.status(500).json({

//             success:false,

//             message:error.message,

//         });

//     }

// };




// // Get Supplier By Id
// const getSupplierById = async (req,res)=>{

//     try {

//         const supplier =
//             await supplierService.getSupplierById(
//                 req.params.id
//             );


//         res.status(200).json({

//             success:true,

//             data:supplier,

//         });


//     } catch(error) {

//         res.status(404).json({

//             success:false,

//             message:error.message,

//         });

//     }

// };




// // Update Supplier
// const updateSupplier = async(req,res)=>{

//     try {

//         const supplier =
//             await supplierService.updateSupplier(
//                 req.params.id,
//                 req.body,
//                 req.user
//             );


//         res.status(200).json({

//             success:true,

//             message:
//             "Supplier updated successfully",

//             data:supplier,

//         });


//     } catch(error) {

//         res.status(400).json({

//             success:false,

//             message:error.message,

//         });

//     }

// };




// // Delete Supplier
// const deleteSupplier = async(req,res)=>{

//     try {

//         const result =
//             await supplierService.deleteSupplier(
//                 req.params.id,
//                 req.user
//             );


//         res.status(200).json({

//             success:true,

//             message:result.message,

//         });


//     } catch(error) {

//         res.status(400).json({

//             success:false,

//             message:error.message,

//         });

//     }

// };



// module.exports = {

//     createSupplier,

//     getAllSuppliers,

//     getSupplierById,

//     updateSupplier,

//     deleteSupplier,

// };

const supplierService = require("../services/supplierService");

// Create Supplier
const createSupplier = async (req, res, next) => {
  try {
        console.log("BODY:", req.body);
    const supplier = await supplierService.createSupplier(
      req.body,
      req.user._id
    );

    res.status(201).json({
      success: true,
      message: "Supplier created successfully",
      data: supplier,
    });
  } catch (error) {
    next(error);
  }
};

// Get All Suppliers
const getSuppliers = async (req, res, next) => {
  try {
    const suppliers = await supplierService.getAllSuppliers();

    res.status(200).json({
      success: true,
      count: suppliers.length,
      data: suppliers,
    });
  } catch (error) {
    next(error);
  }
};

// Get Supplier By ID
const getSupplierById = async (req, res, next) => {
  try {
    const supplier = await supplierService.getSupplierById(req.params.id);

    if (!supplier) {
      return res.status(404).json({
        success: false,
        message: "Supplier not found",
      });
    }

    res.status(200).json({
      success: true,
      data: supplier,
    });
  } catch (error) {
    next(error);
  }
};

// Update Supplier
const updateSupplier = async (req, res, next) => {
  try {
    const supplier = await supplierService.updateSupplier(
      req.params.id,
      req.body,
      req.user._id
    );

    if (!supplier) {
      return res.status(404).json({
        success: false,
        message: "Supplier not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Supplier updated successfully",
      data: supplier,
    });
  } catch (error) {
    next(error);
  }
};

// Delete Supplier (Soft Delete)
const deleteSupplier = async (req, res, next) => {
  try {
    const supplier = await supplierService.deleteSupplier(
      req.params.id,
      req.user._id
    );

    if (!supplier) {
      return res.status(404).json({
        success: false,
        message: "Supplier not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Supplier deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createSupplier,
  getSuppliers,
  getSupplierById,
  updateSupplier,
  deleteSupplier,
};