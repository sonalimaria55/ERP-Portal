import React, { useEffect, useState } from "react";

import {
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";

import SupplierToolbar from "../../components/suppliers/SupplierToolbar";
import SupplierTable from "../../components/suppliers/SupplierTable";
import SupplierDialog from "../../components/suppliers/SupplierDialog";
import SupplierDeleteDialog from "../../components/suppliers/SupplierDeleteDialog";

import {
  fetchSuppliers,
  addSupplier,
  editSupplier,
  removeSupplier,
} from "../../features/supplier/supplierThunk";

const Suppliers = () => {

  const dispatch = useDispatch();

  const {
    suppliers,
    loading,
    error,
  } = useSelector((state) => state.supplier);

  const [search, setSearch] = useState("");

  const [dialogOpen, setDialogOpen] = useState(false);

  const [deleteOpen, setDeleteOpen] = useState(false);

  const [selectedSupplier, setSelectedSupplier] = useState(null);

  useEffect(() => {
    dispatch(fetchSuppliers());
  }, [dispatch]);

  const handleAddSupplier = () => {
    setSelectedSupplier(null);
    setDialogOpen(true);
  };

  const handleEditSupplier = (supplier) => {
    setSelectedSupplier(supplier);
    setDialogOpen(true);
  };

  const handleDeleteSupplier = (supplier) => {
    setSelectedSupplier(supplier);
    setDeleteOpen(true);
  };

  const handleSaveSupplier = async (data) => {

    if (selectedSupplier) {

      await dispatch(
        editSupplier({
          id: selectedSupplier._id,
          supplierData: data,
        })
      );

    } else {

      await dispatch(addSupplier(data));

    }

    dispatch(fetchSuppliers());

    setDialogOpen(false);

    setSelectedSupplier(null);

  };

  const handleConfirmDelete = async () => {

    await dispatch(
      removeSupplier(selectedSupplier._id)
    );

    dispatch(fetchSuppliers());

    setDeleteOpen(false);

    setSelectedSupplier(null);

  };

  const filteredSuppliers = suppliers.filter((supplier) =>

    supplier.supplierName
      ?.toLowerCase()
      .includes(search.toLowerCase())

  );

  if (loading) {

    return (

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 5,
        }}
      >

        <CircularProgress />

      </Box>

    );

  }

  if (error) {

    return (

      <Typography color="error">

        {error}

      </Typography>

    );

  }

  return (

    <Box sx={{ p: 3 }}>

      <SupplierToolbar
        search={search}
        onSearchChange={setSearch}
        onAddSupplier={handleAddSupplier}
      />

      <SupplierTable
        suppliers={filteredSuppliers}
        onEdit={handleEditSupplier}
        onDelete={handleDeleteSupplier}
      />

      <SupplierDialog
        open={dialogOpen}
        supplier={selectedSupplier}
        onClose={() => setDialogOpen(false)}
        onSave={handleSaveSupplier}
      />

      <SupplierDeleteDialog
        open={deleteOpen}
        supplier={selectedSupplier}
        onClose={() => setDeleteOpen(false)}
        onConfirm={handleConfirmDelete}
      />

    </Box>

  );

};

export default Suppliers;