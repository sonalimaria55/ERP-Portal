import axiosInstance from "../../api/axiosInstance";


// Get All Purchases
export const getPurchases = async () => {
const response = await axiosInstance.get(
    "/purchases"
  );

  return response.data;
};



// Get Purchase By Id
export const getPurchaseById = async (id) => {

  const response = await axiosInstance.get(
    `/purchases/${id}`
  );

  return response.data;
};



// Create Purchase
export const createPurchase = async (data) => {

  const response = await axiosInstance.post(
    "/purchases",
    data
  );

  return response.data;
};



// Update Purchase
export const updatePurchase = async (
  id,
  data
) => {

  const response = await axiosInstance.put(
    `/purchases/${id}`,
    data
  );

  return response.data;
};



// Receive Purchase
export const receivePurchase = async (id) => {

  const response = await axiosInstance.patch(
    `/purchases/${id}/receive`
  );

  return response.data;
};



// Delete Purchase
export const deletePurchase = async (id) => {

  const response = await axiosInstance.delete(
    `/purchases/${id}`
  );

  return response.data;
};