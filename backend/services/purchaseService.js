// const mongoose = require("mongoose");

// const Purchase = require("../models/Purchase");
// const Supplier = require("../models/Supplier");
// const Product = require("../models/Product");

// const inventoryService = require("./inventoryService");

// const {
//     validatePurchaseData,
// } = require("../validations/purchaseValidation");

// const generatePurchaseNumber = require("../utils/generatePurchaseNumber");
// /**
//  * Create Purchase
//  */
// const createPurchase = async (
//     purchaseData,
//     user
// ) => {

//     // Validate Purchase Data
//     const { isValid, errors } =
//         validatePurchaseData(purchaseData);

//     if (!isValid) {
//         throw new Error(errors.join(" "));
//     }

//     const session = await mongoose.startSession();

//     session.startTransaction();

//     try {

//         // Check Supplier
//         const supplier = await Supplier.findById(
//             purchaseData.supplier
//         ).session(session);

//         if (!supplier) {
//             throw new Error("Supplier not found.");
//         }

//         // Check Products
//         for (const item of purchaseData.items) {

//             const product = await Product.findById(
//                 item.product
//             ).session(session);

//             if (!product) {
//                 throw new Error(
//                     `Product not found: ${item.product}`
//                 );
//             }

//         }

//         // Generate Purchase Number
//         const purchaseNumber =
//             await generatePurchaseNumber();

//         // Calculate Totals
//         let subtotal = 0;

//         purchaseData.items.forEach((item) => {

//             const lineTotal =
//                 Number(item.quantity) *
//                 Number(item.purchasePrice);

//             subtotal += lineTotal;

//         });

//         const discount =
//             Number(purchaseData.discount || 0);

//         const tax =
//             Number(purchaseData.tax || 0);

//         const grandTotal =
//             subtotal - discount + tax;

//         // Create Purchase
//         const purchase = await Purchase.create(
//             [
//                 {
//                     purchaseNumber,

//                     supplier: purchaseData.supplier,

//                     factory: user.factory || null,

//                     branch: user.branch || null,

//                     items: purchaseData.items,

//                     subtotal,

//                     discountAmount: discount,

//                     taxAmount: tax,

//                     grandTotal,

//                     remarks:
//                         purchaseData.notes || "",


//                     status: "Draft",

//                     createdBy: user._id,
//                 },
//             ],
//             { session }
//         );

//         await session.commitTransaction();

//         session.endSession();

//         return purchase[0];

//     } catch (error) {

//         await session.abortTransaction();

//         session.endSession();

//         throw error;

//     }

// };

// /**
//  * Get All Purchases
//  */
// /**
//  * Get All Purchases
//  */
// const getAllPurchases = async () => {

//   const purchases = await Purchase.find({
//     isDeleted:false
// })
//         .populate("supplier", "supplierName supplierCode")
//         .populate("createdBy", "name")
//         .sort({ createdAt: -1 });

//     return purchases;

// };

// /**
//  * Get Purchase By Id
//  */
// const getPurchaseById = async (
//     purchaseId
// ) => {

//     const purchase = await Purchase.findById(
//         purchaseId
//     )
//         .populate("supplier")
//         .populate("items.product")
//         .populate("createdBy", "name")
//         .populate("updatedBy", "name");

//     if (!purchase) {
//         throw new Error("Purchase not found.");
//     }

//     return purchase;

// };

// /**
//  * Update Purchase
//  */
// const updatePurchase = async (
//     purchaseId,
//     purchaseData,
//     user
// ) => {

//     const purchase = await Purchase.findById(
//         purchaseId
//     );

//     if (!purchase) {
//         throw new Error("Purchase not found.");
//     }

//   if (purchase.status !== "Draft") {
//         throw new Error(
//             "Only pending purchases can be updated."
//         );
//     }

//     Object.assign(purchase, purchaseData);

//     purchase.updatedBy = user._id;

//     await purchase.save();

//     return purchase;

// };

// /**
//  * Receive Purchase
//  */
// const receivePurchase = async (
//     purchaseId,
//     user
// ) => {

//     const session = await mongoose.startSession();

//     session.startTransaction();

//     try {

//         const purchase = await Purchase.findById(
//             purchaseId
//         ).session(session);

//         if (!purchase) {
//             throw new Error("Purchase not found.");
//         }

//         if (
//             purchase.status === "Received" ||
//             purchase.status === "Cancelled"
//         ) {
//             throw new Error(
//                 "Invalid purchase status."
//             );
//         }

//         // Add every product to inventory
//         for (const item of purchase.items) {
//             await inventoryService.addStock(

//                 item.product,

//                 purchase.branch || null,

//                 item.quantity,
//                 {
//                     transactionType: "PURCHASE",

//                     referenceType: "PURCHASE",

//                     referenceId: purchase._id,

//                     remarks: `Purchase ${purchase.purchaseNumber}`,

//                     createdBy: user._id,
//                 },

//                 session

//             );

//         }

//         purchase.status = "Received";

//     purchase.receivedAt = new Date();

//         purchase.updatedBy = user._id;

//         await purchase.save({ session });

//         await session.commitTransaction();

//         session.endSession();

//         return purchase;

//     } catch (error) {

//         await session.abortTransaction();

//         session.endSession();

//         throw error;

//     }

// };

// /**
//  * Delete Purchase
//  */
// /**
//  * Delete Purchase
//  */
// const deletePurchase = async (
//     purchaseId,
//     user
// ) => {

//     const purchase = await Purchase.findById(
//         purchaseId
//     );

//     if (!purchase) {
//         throw new Error("Purchase not found.");
//     }

//     if (purchase.status === "Received") {
//         throw new Error(
//             "Received purchases cannot be deleted."
//         );
//     }

//     purchase.isDeleted = true;

//     purchase.updatedBy = user._id;

//     await purchase.save();

//     return {
//         message: "Purchase deleted successfully.",
//     };

// };

// module.exports = {
//     createPurchase,
//     getAllPurchases,
//     getPurchaseById,
//     updatePurchase,
//     receivePurchase,
//     deletePurchase,
// };
const mongoose = require("mongoose");

const Purchase = require("../models/Purchase");
const Supplier = require("../models/Supplier");
const Product = require("../models/Product");

const inventoryService = require("./inventoryService");

const {
    validatePurchaseData,
} = require("../validations/purchaseValidation");

const generatePurchaseNumber = require("../utils/generatePurchaseNumber");


/**
 * Create Purchase
 */
const createPurchase = async (
    purchaseData,
    user
) => {
    console.log("🔥 CREATE PURCHASE CALLED");
    console.log(purchaseData);



    const { isValid, errors } =
        validatePurchaseData(purchaseData);

    if (!isValid) {
        throw new Error(errors.join(" "));
    }


    const session = await mongoose.startSession();

    session.startTransaction();


    try {


        // Check Supplier
        const supplier = await Supplier.findById(
            purchaseData.supplier
        ).session(session);


        if (!supplier) {
            throw new Error(
                "Supplier not found."
            );
        }



        // Check Products
        for (const item of purchaseData.items) {


            const product = await Product.findById(
                item.product
            ).session(session);


            if (!product) {

                throw new Error(
                    `Product not found: ${item.product}`
                );

            }

        }



        // Generate Purchase Number
        const purchaseNumber =
            await generatePurchaseNumber();



        // Calculate Totals

        let subtotal = 0;


        purchaseData.items.forEach((item) => {


            const lineTotal =
                Number(item.quantity) *
                Number(item.purchasePrice);


            subtotal += lineTotal;


        });



        const discount =
            Number(
                purchaseData.discount || 0
            );


        const tax =
            Number(
                purchaseData.tax || 0
            );


        const grandTotal =
            subtotal - discount + tax;



        // Create Purchase

        const purchase = await Purchase.create(
            [
                {

                    purchaseNumber,


                    supplier:
                        purchaseData.supplier,


                    factory:
                        user.factory || null,


                    branch:
                        user.branch || null,


                    items:
                        purchaseData.items,


                    subtotal,


                    discountAmount:
                        discount,


                    taxAmount:
                        tax,


                    grandTotal,


                    remarks:
                        purchaseData.notes || "",


                    status:
                        "Draft",


                    createdBy:
                        user._id,

                }
            ],
            {
                session
            }
        );



        await session.commitTransaction();

        session.endSession();


        return purchase[0];


    }
    catch (error) {


        await session.abortTransaction();

        session.endSession();


        throw error;

    }

};





/**
 * Get All Purchases
 */
const getAllPurchases = async () => {


    const purchases = await Purchase.find()

        .populate(
            "supplier",
            "supplierName supplierCode"
        )

        .populate(
            "createdBy",
            "name"
        )

        .sort({
            createdAt: -1
        });



    return purchases;

};






/**
 * Get Purchase By Id
 */
const getPurchaseById = async (
    purchaseId
) => {


    const purchase =
        await Purchase.findById(
            purchaseId
        )


            .populate("supplier")

            .populate("items.product")

            .populate(
                "createdBy",
                "name"
            )

            .populate(
                "updatedBy",
                "name"
            );



    if (!purchase) {

        throw new Error(
            "Purchase not found."
        );

    }



    return purchase;


};








/**
 * Update Purchase
 */
const updatePurchase = async (
    purchaseId,
    purchaseData,
    user
) => {


    const purchase =
        await Purchase.findById(
            purchaseId
        );



    if (!purchase) {

        throw new Error(
            "Purchase not found."
        );

    }



    if (
        purchase.status !== "Draft"
    ) {

        throw new Error(
            "Only draft purchases can be updated."
        );

    }



    Object.assign(
        purchase,
        purchaseData
    );



    purchase.updatedBy =
        user._id;



    await purchase.save();



    return purchase;


};









/**
 * Receive Purchase
 */
const receivePurchase = async (
    purchaseId,
    user
) => {


    const session =
        await mongoose.startSession();



    session.startTransaction();



    try {


        const purchase =
            await Purchase.findById(
                purchaseId
            )
                .session(session);




        if (!purchase) {

            throw new Error(
                "Purchase not found."
            );

        }




        if (
            purchase.status === "Received" ||
            purchase.status === "Cancelled"
        ) {

            throw new Error(
                "Invalid purchase status."
            );

        }





        // Add stock

        for (const item of purchase.items) {


            await inventoryService.addStock(


                item.product,


                purchase.branch || null,


                item.quantity,



                {

                    transactionType:
                        "PURCHASE",


                    referenceType:
                        "PURCHASE",


                    referenceId:
                        purchase._id,


                    remarks:
                        `Purchase ${purchase.purchaseNumber}`,



                    createdBy:
                        user._id,

                },


                session

            );


        }




        purchase.status =
            "Received";



        purchase.receivedAt =
            new Date();



        purchase.updatedBy =
            user._id;




        await purchase.save({
            session
        });




        await session.commitTransaction();


        session.endSession();



        return purchase;



    }
    catch (error) {


        await session.abortTransaction();


        session.endSession();



        throw error;


    }


};









/**
 * Delete Purchase
 */
const deletePurchase = async (
    purchaseId,
    user
) => {


    const purchase =
        await Purchase.findById(
            purchaseId
        );



    if (!purchase) {

        throw new Error(
            "Purchase not found."
        );

    }




    if (
        purchase.status === "Received"
    ) {

        throw new Error(
            "Received purchases cannot be deleted."
        );

    }




    purchase.updatedBy =
        user._id;



    await purchase.deleteOne();



    return {

        message:
            "Purchase deleted successfully."

    };


};







module.exports = {

    createPurchase,

    getAllPurchases,

    getPurchaseById,

    updatePurchase,

    receivePurchase,

    deletePurchase,

};