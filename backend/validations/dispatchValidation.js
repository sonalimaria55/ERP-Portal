const validateDispatchData = (data) => {
  const { toBranch, products } = data;

  if (!toBranch) {
    throw new Error("Destination branch is required.");
  }

  if (!products || !Array.isArray(products) || products.length === 0) {
    throw new Error("At least one product is required.");
  }

  for (const item of products) {
    if (!item.product) {
      throw new Error("Product is required.");
    }

    if (!item.quantity || item.quantity < 1) {
      throw new Error("Quantity must be greater than 0.");
    }
  }
};

module.exports = {
  validateDispatchData,
};