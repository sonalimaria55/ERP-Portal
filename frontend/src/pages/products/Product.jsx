import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import ProductToolbar from "../../components/products/ProductToolbar";
import ProductTable from "../../components/products/ProductTable";
import ProductDialog from "../../components/products/ProductDialog";
import ProductDeleteDialog from "../../components/products/ProductDeleteDialog";

import {
    fetchProducts,
    addProduct,
    editProduct,
    removeProduct,
    adjustStock,


} from "../../features/products/productSlice";

import AdjustStockDialog from "../../components/products/AdjustStockDialog";

export default function Product() {
    const dispatch = useDispatch();

    const { products, loading, error } = useSelector(
        (state) => state.product
    );

    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [search, setSearch] = useState("");

    const [deleteOpen, setDeleteOpen] = useState(false);
    const [deleteProductItem, setDeleteProductItem] = useState(null);

    const [adjustOpen, setAdjustOpen] = useState(false);
    const [adjustProduct, setAdjustProduct] = useState(null);




    useEffect(() => {
        dispatch(
            fetchProducts({
                page: 1,
                limit: 10,
                search,
            })
        );
    }, [dispatch, search]);

    const handleRefresh = () => {
        dispatch(
            fetchProducts({
                page: 1,
                limit: 10,
                search,
            })
        );
    };

    const handleAdd = () => {
        setSelectedProduct(null);
        setDialogOpen(true);
    };

    const handleEdit = (product) => {
        setSelectedProduct(product);
        setDialogOpen(true);
    };

    const handleSave = async (formData) => {
        try {
            if (selectedProduct) {
                await dispatch(
                    editProduct({
                        id: selectedProduct._id,
                        productData: formData,
                    })
                );
            } else {
                await dispatch(addProduct(formData));
            }

            setDialogOpen(false);
            setSelectedProduct(null);

            handleRefresh();
        } catch (err) {
            console.error(err);
        }
    };

    const handleDelete = (product) => {

        setDeleteProductItem(product);

        setDeleteOpen(true);

    };



    const confirmDelete = async () => {

        if (deleteProductItem) {

            await dispatch(
                removeProduct(deleteProductItem._id)
            );

        }


        setDeleteOpen(false);

        setDeleteProductItem(null);


        handleRefresh();

    };

    const handleAdjustStock = (product) => {
        setAdjustProduct(product);
        setAdjustOpen(true);
    };

    const handleSaveStock = async (data) => {
        await dispatch(
            adjustStock({
                id: adjustProduct._id,
                data,
            })
        );

        setAdjustOpen(false);
        setAdjustProduct(null);

        handleRefresh();
    };






    return (
        <Box p={3}>
            <ProductToolbar
                onAdd={handleAdd}
                search={search}
                setSearch={setSearch}
                onRefresh={handleRefresh}
            />

            {error && (
                <Typography color="error" mb={2}>
                    {error}
                </Typography>
            )}

            <ProductTable
                products={products}
                loading={loading}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onAdjustStock={handleAdjustStock}
            />

            <ProductDialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                onSave={handleSave}
                product={selectedProduct}
            />

            <ProductDeleteDialog
                open={deleteOpen}
                onClose={() => {
                    setDeleteOpen(false);
                    setDeleteProductItem(null);
                }}
                onDelete={confirmDelete}
                product={deleteProductItem}
            />
            <AdjustStockDialog
                open={adjustOpen}
                onClose={() => {
                    setAdjustOpen(false);
                    setAdjustProduct(null);
                }}
                onSave={handleSaveStock}
                product={adjustProduct}
            />



        </Box>
    );
}