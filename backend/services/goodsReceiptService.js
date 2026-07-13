const mongoose = require("mongoose");

const GoodsReceipt =
require("../models/GoodsReceipt");

const Purchase =
require("../models/Purchase");

const Supplier =
require("../models/Supplier");

const Product =
require("../models/Product");

const inventoryService =
require("./inventoryService");

const generateGRNNumber =
require("../utils/generateGRNNumber");



/**
 * Create GRN
 */
const createGRN = async (
    grnData,
    user
) => {


const session =
await mongoose.startSession();


session.startTransaction();


try {


    const purchase =
    await Purchase.findById(
        grnData.purchase
    )
    .session(session);



    if(!purchase){

        throw new Error(
            "Purchase not found."
        );

    }



    if(
        purchase.status === "Cancelled"
    ){

        throw new Error(
            "Cancelled purchase cannot receive."
        );

    }



    const supplier =
    await Supplier.findById(
        grnData.supplier
    )
    .session(session);



    if(!supplier){

        throw new Error(
            "Supplier not found."
        );

    }




    // Validate products

    for(const item of grnData.items){


        const product =
        await Product.findById(
            item.product
        )
        .session(session);



        if(!product){

            throw new Error(
              `Product not found ${item.product}`
            );

        }

    }




    const grnNumber =
    await generateGRNNumber();



    const grn =
    await GoodsReceipt.create(
    [
        {

        grnNumber,


        purchase:
        grnData.purchase,


        supplier:
        grnData.supplier,


        factory:
        user.factory || null,


        branch:
        user.branch || null,


        items:
        grnData.items,


        remarks:
        grnData.remarks || "",


        receivedBy:
        user._id,


        status:
        "Completed"

        }
    ],
    {
        session
    });



    /*
       Update Inventory
    */

    for(const item of grnData.items){


        if(item.receivedQuantity > 0){


            await inventoryService.addStock(

                item.product,

                user.branch || null,

                item.receivedQuantity,

                {

                transactionType:
                "PURCHASE",


                referenceType:
                "GRN",


                referenceId:
                grn[0]._id,


                remarks:
                `GRN ${grnNumber}`,


                createdBy:
                user._id

                },

                session

            );


        }

    }



    // Update purchase status

    purchase.status =
    "Received";


    purchase.updatedBy =
    user._id;


    await purchase.save({
        session
    });



    await session.commitTransaction();

    session.endSession();


    return grn[0];


}
catch(error){


    await session.abortTransaction();

    session.endSession();


    throw error;

}


};





/**
 * Get All GRN
 */

const getAllGRN =
async()=>{


return await GoodsReceipt.find()

.populate(
"purchase",
"purchaseNumber"
)

.populate(
"supplier",
"supplierName"
)

.populate(
"items.product",
"productName productCode"
)

.sort({
createdAt:-1
});


};






/**
 * Get GRN By ID
 */

const getGRNById =
async(id)=>{


const grn =
await GoodsReceipt.findById(id)

.populate("supplier")

.populate("purchase")

.populate(
"items.product"
);



if(!grn){

throw new Error(
"GRN not found."
);

}


return grn;


};




module.exports={

createGRN,

getAllGRN,

getGRNById

};