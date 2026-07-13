const Purchase = require("../models/Purchase");


const generatePurchaseNumber = async () => {
  const lastPurchase = await Purchase
    .findOne()
    .sort({ createdAt: -1 });


  let number = 1;


  if (lastPurchase && lastPurchase.purchaseNumber) {
    const lastNumber = parseInt(
      lastPurchase.purchaseNumber.replace("PUR", "")
    );

    number = lastNumber + 1;
  }


  return `PUR${String(number).padStart(6, "0")}`;
};


module.exports = generatePurchaseNumber;