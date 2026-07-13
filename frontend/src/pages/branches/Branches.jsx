import React, { useEffect, useState } from "react";

import {
  Box,
  Button,
  Paper,
   Typography,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import { useDispatch, useSelector } from "react-redux";

import {
  fetchBranches,
  addBranch,
  editBranch,
  removeBranch,
} from "../../features/branch/branchThunk";

import {
  fetchFactories,
} from "../../features/factory/factoryThunk";

import BranchTable from "../../components/branches/BranchTable";
import BranchDialog from "../../components/branches/BranchDialog";
import BranchDeleteDialog from "../../components/branches/BranchDeleteDialog";

import PageHeader from "../../components/common/PageHeader";
import SearchBar from "../../components/common/SearchBar";
const Branches = () => {

  const dispatch = useDispatch();

  const {
    branches,
    loading,
  } = useSelector((state) => state.branch);

  const {
    factories,
  } = useSelector((state) => state.factory);



  console.log("Factories:", factories);

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(null);

  const [openDelete, setOpenDelete] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    dispatch(fetchBranches());
    dispatch(fetchFactories());
  }, [dispatch]);

  const handleAdd = () => {
    setSelectedBranch(null);
    setOpenDialog(true);
  };

  const handleEdit = (branch) => {
    setSelectedBranch(branch);
    setOpenDialog(true);
  };

  const handleDelete = (branch) => {
    setSelectedBranch(branch);
    setOpenDelete(true);
  };


const confirmDelete = () => {
  if (!selectedBranch) return;

  dispatch(removeBranch(selectedBranch._id));

  setOpenDelete(false);
  setSelectedBranch(null);
};

  const handleSubmit = (data) => {

    if (selectedBranch) {

      dispatch(
        editBranch({
          id: selectedBranch._id,
          branchData: data,
        })
      );

    } else {

      dispatch(addBranch(data));

    }

    setOpenDialog(false);

  };



  const filteredBranches = branches.filter((branch) => {
    const value = search.toLowerCase();

    return (
      branch.branchName?.toLowerCase().includes(value) ||
      branch.branchCode?.toLowerCase().includes(value) ||
      branch.city?.toLowerCase().includes(value) ||
      branch.phone?.toLowerCase().includes(value)
    );
  });

  return (
    <Box>

      <PageHeader
        title="Branches"
        subtitle="Manage company branches"
      />
<Paper
  sx={{
    p: 3,
    borderRadius: 3,
    mt: 2,
  }}
>
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      mb: 2,
    }}
  >
    <SearchBar
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search Branch..."
    />

    <Button
      variant="contained"
      startIcon={<AddIcon />}
      onClick={handleAdd}
    >
      Add Branch
    </Button>
  </Box>

  <Typography sx={{ mb: 2 }}>
    Total Branches: {filteredBranches.length}
  </Typography>

  <BranchTable
    branches={filteredBranches}
    loading={loading}
    onEdit={handleEdit}
    onDelete={handleDelete}
  />
</Paper>
      <BranchDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onSubmit={handleSubmit}
        selectedBranch={selectedBranch}
        factories={factories}
      />

      <BranchDeleteDialog
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        onConfirm={confirmDelete}
        branch={selectedBranch}
      />

    </Box>
  );
};

export default Branches;