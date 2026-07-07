const Product = require("../models/Product");
const Inventory = require("../models/Inventory");
const Branch = require("../models/Branch");


const getDashboardStats = async () => {

    const totalProducts = await Product.countDocuments({
        isActive: true
    });


    const inventoryData = await Inventory.aggregate([
        {
            $group:{
                _id:null,
                totalQuantity:{
                    $sum:"$quantity"
                }
            }
        }
    ]);


    const totalInventory =
        inventoryData.length > 0
        ? inventoryData[0].totalQuantity
        : 0;


    const totalBranches = await Branch.countDocuments({
        isActive:true
    });


    const lowStockItems = await Inventory.countDocuments({
        quantity:{
            $lte:5
        }
    });


    return {
        totalProducts,
        totalInventory,
        totalBranches,
        lowStockItems
    };

};


module.exports = {
    getDashboardStats
};