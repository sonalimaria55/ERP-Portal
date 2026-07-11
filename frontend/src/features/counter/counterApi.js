import axiosInstance from "../../api/axiosInstance";

// Get All Counters
export const getCounters = async () => {
  const response = await axiosInstance.get("/counters");
  return response.data;
};

// Get Counters By Branch
export const getCountersByBranch = async (branchId) => {
  const response = await axiosInstance.get(
    `/counters/branch/${branchId}`
  );
  return response.data;
};

// Get Counter By Id
export const getCounterById = async (id) => {
  const response = await axiosInstance.get(`/counters/${id}`);
  return response.data;
};

// Create Counter
export const createCounter = async (data) => {
  const response = await axiosInstance.post(
    "/counters",
    data
  );
  return response.data;
};

// Update Counter
export const updateCounter = async (id, data) => {
  const response = await axiosInstance.put(
    `/counters/${id}`,
    data
  );
  return response.data;
};

// Delete Counter
export const deleteCounter = async (id) => {
  const response = await axiosInstance.delete(
    `/counters/${id}`
  );
  return response.data;
};