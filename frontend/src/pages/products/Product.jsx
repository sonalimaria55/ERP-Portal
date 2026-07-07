import React, { useState } from "react";
import { Box } from "@mui/material";

import ProductToolbar from "../../components/products/ProductToolbar";
import ProductTable from "../../components/products/ProductTable";
import ProductDialog from "../../components/products/ProductDialog";
import ProductDeleteDialog from "../../components/products/ProductDeleteDialog";

export default function Product() {
  const [products, setProducts] = useState([]);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteProduct, setDeleteProduct] = useState(null);

  // Add Product
  const handleAdd = () => {
    setSelectedProduct(null);
    setDialogOpen(true);
  };

  // Edit Product
  const handleEdit = (product) => {
    setSelectedProduct(product);
    setDialogOpen(true);
  };

  // Save Product
  const handleSave = (productData) => {
    if (selectedProduct) {
      setProducts((prev) =>
        prev.map((item) =>
          item.id === selectedProduct.id
            ? { ...selectedProduct, ...productData }
            : item
        )
      );
    } else {
      const newProduct = {
        id: Date.now(),
        ...productData,
      };

      setProducts((prev) => [...prev, newProduct]);
    }

    setDialogOpen(false);
    setSelectedProduct(null);
  };

  // Delete Dialog
  const handleDeleteClick = (product) => {
    setDeleteProduct(product);
    setDeleteOpen(true);
  };

  // Confirm Delete
  const handleDelete = () => {
    setProducts((prev) =>
      prev.filter((item) => item.id !== deleteProduct.id)
    );

    setDeleteOpen(false);
    setDeleteProduct(null);
  };

  return (
    <Box p={3}>
      <ProductToolbar
        onAddProduct={handleAdd}
      />

      <Box mt={2}>
        <ProductTable
          products={products}
          onEdit={handleEdit}
          onDelete={handleDeleteClick}
        />
      </Box>

      <ProductDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onSave={handleSave}
        product={selectedProduct}
      />

      <ProductDeleteDialog
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onConfirm={handleDelete}
        product={deleteProduct}
      />
    </Box>
  );
}