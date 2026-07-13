import axiosInstance from "../../api/axiosInstance";


// Get All Branches
export const getBranches = async () => {
  const response = await axiosInstance.get("/branches");
  return response.data;
};


// Get Branches By Factory
export const getBranchesByFactory = async (factoryId) => {
  const response = await axiosInstance.get(
    `/branches/factory/${factoryId}`
  );

  return response.data;
};


// Get Branch By Id
export const getBranchById = async (id) => {
  const response = await axiosInstance.get(
    `/branches/${id}`
  );

  return response.data;
};


// Create Branch
export const createBranch = async (branchData) => {
  const response = await axiosInstance.post(
    "/branches",
    branchData
  );

  return response.data;
};


// Update Branch
export const updateBranch = async (
  id,
  branchData
) => {
  const response = await axiosInstance.put(
    `/branches/${id}`,
    branchData
  );

  return response.data;
};


// Delete Branch
export const deleteBranch = async (id) => {
  const response = await axiosInstance.delete(
    `/branches/${id}`
  );

  return response.data;
};