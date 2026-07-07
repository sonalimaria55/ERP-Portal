import api from "../../api/axiosInstance";


export const getDashboardStats = async () => {

    const response = await api.get(
        "/dashboard/stats"
    );

    return response.data;

};