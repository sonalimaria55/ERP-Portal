import api from "../../api/axiosInstance";


export const getCategories = async (
    page = 1,
    limit = 10,
    search = ""
) => {

    const response = await api.get(
        `/categories?page=${page}&limit=${limit}&search=${search}`
    );

    return response.data;

};



export const createCategory = async (categoryData) => {

    const response = await api.post(
        "/categories",
        categoryData
    );

    return response.data;

};



export const updateCategory = async (
    id,
    categoryData
) => {

    const response = await api.put(
        `/categories/${id}`,
        categoryData
    );

    return response.data;

};



export const deleteCategory = async (id) => {

    const response = await api.delete(
        `/categories/${id}`
    );

    return response.data;

};