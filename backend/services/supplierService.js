// const Supplier = require("../models/Supplier");

// const generateSupplierCode = require("../utils/generateSupplierCode");


// // Create Supplier
// const createSupplier = async (
//     supplierData,
//     user
// ) => {

//        console.log("🔥 CREATE SUPPLIER CALLED");
//     console.log(supplierData);

//     const supplierCode =
//         await generateSupplierCode();


//     const supplier = await Supplier.create({

//         ...supplierData,

//         supplierCode,

//         createdBy: user._id,

//     });


//     return supplier;

// };



// // Get All Suppliers
// const getAllSuppliers = async () => {

//     const suppliers = await Supplier.find({
//         isDeleted:false,
//     })
//     .populate("branch", "branchName")
//     .populate("factory", "factoryName")
//     .populate("createdBy", "name")
//     .sort({
//         createdAt:-1,
//     });


//     return suppliers;

// };



// // Get Supplier By Id
// const getSupplierById = async (
//     supplierId
// ) => {

//     const supplier = await Supplier.findById(
//         supplierId
//     )
//     .populate("branch", "branchName")
//     .populate("factory", "factoryName")
//     .populate("createdBy", "name");


//     if(!supplier){
//         throw new Error(
//             "Supplier not found."
//         );
//     }


//     return supplier;

// };



// // Update Supplier
// const updateSupplier = async (
//     supplierId,
//     supplierData,
//     user
// ) => {

//     const supplier =
//         await Supplier.findById(
//             supplierId
//         );


//     if(!supplier){

//         throw new Error(
//             "Supplier not found."
//         );

//     }


//     Object.assign(
//         supplier,
//         supplierData
//     );


//     supplier.updatedBy =
//         user._id;


//     await supplier.save();


//     return supplier;

// };



// // Delete Supplier (Soft Delete)
// const deleteSupplier = async (
//     supplierId,
//     user
// ) => {

//     const supplier =
//         await Supplier.findById(
//             supplierId
//         );


//     if(!supplier){

//         throw new Error(
//             "Supplier not found."
//         );

//     }


//     supplier.isDeleted = true;

//     supplier.isActive = false;

//     supplier.updatedBy =
//         user._id;


//     await supplier.save();


//     return {
//         message:
//         "Supplier deleted successfully.",
//     };

// };



// module.exports = {

//     createSupplier,

//     getAllSuppliers,

//     getSupplierById,

//     updateSupplier,

//     deleteSupplier,

// };


const Supplier = require("../models/Supplier");



class SupplierService {

  // Generate Supplier Code
  async generateSupplierCode() {

    const lastSupplier = await Supplier
      .findOne({})
      .sort({ createdAt: -1 });

    if (!lastSupplier) {
      return "SUP000001";
    }

    const lastNumber = parseInt(
      lastSupplier.supplierCode.replace("SUP", ""),
      10
    );

    return `SUP${String(lastNumber + 1).padStart(6, "0")}`;
  }

  // Create Supplier
async createSupplier(data, userId) {

    const supplierCode = await this.generateSupplierCode();

    const payload = {
        ...data,
        supplierCode,
        createdBy: userId,
    };

    console.log("PAYLOAD:", payload);

    const supplier = new Supplier(payload);

    console.log("Before Save:", supplier);

    await supplier.save();

    return supplier;
}

  // Get All Suppliers
  async getAllSuppliers(filters = {}) {

    return await Supplier.find({
      isDeleted: false,
      ...filters,
    })
      .populate("factory", "factoryName")
      .populate("branch", "branchName")
      .sort({ createdAt: -1 });

  }

  // Get Supplier By Id
  async getSupplierById(id) {

    return await Supplier.findOne({
      _id: id,
      isDeleted: false,
    })
      .populate("factory", "factoryName")
      .populate("branch", "branchName");

  }

  // Update Supplier
  async updateSupplier(id, data, userId) {

    return await Supplier.findByIdAndUpdate(
      id,
      {
        ...data,
        updatedBy: userId,
      },
      {
        new: true,
        runValidators: true,
      }
    );

  }

  // Delete Supplier (Soft Delete)
  async deleteSupplier(id, userId) {

    return await Supplier.findByIdAndUpdate(
      id,
      {
        isDeleted: true,
        isActive: false,
        updatedBy: userId,
      },
      {
        new: true,
      }
    );

  }

}

module.exports = new SupplierService();