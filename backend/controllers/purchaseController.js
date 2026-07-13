const purchaseService = require("../services/purchaseService");


// Create Purchase
const createPurchase = async (req, res) => {

  console.log("🔥 PURCHASE CONTROLLER HIT");
  console.log("BODY:", req.body);
  try {

    const purchase = await purchaseService.createPurchase(
      req.body,
      req.user
    );

    res.status(201).json({
      success: true,
      message: "Purchase created successfully",
      data: purchase,
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message,
    });

  }
};



// Get All Purchases
const getAllPurchases = async (req, res) => {
  try {

    const purchases =
      await purchaseService.getAllPurchases();

    res.status(200).json({
      success: true,
      data: purchases,
    });

  } catch (error) {

    res.status(500).json({
      success:false,
      message:error.message,
    });

  }
};



// Get Purchase By Id
const getPurchaseById = async (req,res)=>{

  try{

    const purchase =
      await purchaseService.getPurchaseById(
        req.params.id
      );


    res.status(200).json({
      success:true,
      data:purchase,
    });


  }catch(error){

    res.status(404).json({
      success:false,
      message:error.message,
    });

  }

};



// Update Purchase
const updatePurchase = async(req,res)=>{

 try{

   const purchase =
     await purchaseService.updatePurchase(
       req.params.id,
       req.body,
       req.user
     );


   res.status(200).json({
     success:true,
     message:"Purchase updated successfully",
     data:purchase,
   });


 }catch(error){

   res.status(400).json({
     success:false,
     message:error.message,
   });

 }

};




// Receive Purchase
const receivePurchase = async(req,res)=>{

 try{

   const purchase =
     await purchaseService.receivePurchase(
       req.params.id,
       req.user
     );


   res.status(200).json({
     success:true,
     message:"Purchase received successfully",
     data:purchase,
   });


 }catch(error){

   res.status(400).json({
     success:false,
     message:error.message,
   });

 }

};




// Delete Purchase
const deletePurchase = async(req,res)=>{

 try{

   const result =
     await purchaseService.deletePurchase(
       req.params.id,
       req.user
     );


   res.status(200).json({
     success:true,
     message:result.message,
   });


 }catch(error){

   res.status(400).json({
     success:false,
     message:error.message,
   });

 }

};



module.exports = {

 createPurchase,
 getAllPurchases,
 getPurchaseById,
 updatePurchase,
 receivePurchase,
 deletePurchase,

};