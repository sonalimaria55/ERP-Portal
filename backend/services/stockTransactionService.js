// const StockTransaction = require("../models/StockTransaction");

// /**
//  * Create Stock Transaction
//  */
// const createTransaction = async (transactionData) => {
//   const transaction = await StockTransaction.create(transactionData);
//   return transaction;
// };

// /**
//  * Get Product Stock History
//  */
// const getProductTransactions = async (
//   productId,
//   page = 1,
//   limit = 20
// ) => {
//   const skip = (page - 1) * limit;

//   const total = await StockTransaction.countDocuments({
//     product: productId,
//   });

//   const transactions = await StockTransaction.find({
//     product: productId,
//   })
//     .populate("createdBy", "name")
//     .sort({ createdAt: -1 })
//     .skip(skip)
//     .limit(limit);

//   return {
//     transactions,
//     pagination: {
//       currentPage: page,
//       totalPages: Math.ceil(total / limit),
//       total,
//       limit,
//     },
//   };
// };

// module.exports = {
//   createTransaction,
//   getProductTransactions,
// };

const StockTransaction = require("../models/StockTransaction");

/**
 * Create Stock Transaction
 */
const createTransaction = async (
  transactionData,
  session = null
) => {

  if (session) {
    const transaction = await StockTransaction.create(
      [transactionData],
      { session }
    );

    return transaction[0];
  }

  return await StockTransaction.create(transactionData);
};

/**
 * Get Product Stock History
 */
const getProductTransactions = async (
  productId,
  page = 1,
  limit = 20
) => {
  const skip = (page - 1) * limit;

  const total = await StockTransaction.countDocuments({
    product: productId,
  });

 const transactions = await StockTransaction.find({
  product: productId,
})
  .populate("product", "productName productCode")
  .populate("createdBy", "name")
  .sort({ createdAt: -1 })
  .skip(skip)
  .limit(limit);

  return {
    transactions,
    pagination: {
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      total,
      limit,
    },
  };
};

module.exports = {
  createTransaction,
  getProductTransactions,
};