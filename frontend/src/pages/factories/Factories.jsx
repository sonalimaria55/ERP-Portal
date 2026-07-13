// import React, { useEffect, useState } from "react";
// import { Box, Typography } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";

// import PageContainer from "../../components/common/PageContainer";
// import PageHeader from "../../components/common/PageHeader";

// import FactoryToolbar from "../../components/factories/FactoryToolbar";
// import FactoryTable from "../../components/factories/FactoryTable";
// import FactoryDialog from "../../components/factories/FactoryDialog";
// import FactoryDeleteDialog from "../../components/factories/FactoryDeleteDialog";

// import {
//   fetchFactories,
//   createNewFactory,
//   updateExistingFactory,
//   removeFactory,
// } from "../../features/factory/factoryThunk";

// const Factories = () => {
//   const dispatch = useDispatch();

//   const { factories, loading, error } = useSelector(
//     (state) => state.factory
//   );

//   const [search, setSearch] = useState("");

//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [selectedFactory, setSelectedFactory] = useState(null);

//   const [deleteOpen, setDeleteOpen] = useState(false);
//   const [deleteFactoryItem, setDeleteFactoryItem] = useState(null);

//   useEffect(() => {
//     dispatch(fetchFactories());
//   }, [dispatch]);

//   const refreshData = () => {
//     dispatch(fetchFactories());
//   };

//   const handleAdd = () => {
//     setSelectedFactory(null);
//     setDialogOpen(true);
//   };

//   const handleEdit = (factory) => {
//     setSelectedFactory(factory);
//     setDialogOpen(true);
//   };

//   const handleSave = async (data) => {
//     if (selectedFactory) {
//       await dispatch(
//         updateExistingFactory({
//           id: selectedFactory._id,
//           data,
//         })
//       );
//     } else {
//       await dispatch(createNewFactory(data));
//     }

//     setDialogOpen(false);
//     setSelectedFactory(null);

//     refreshData();
//   };

//   const handleDelete = (factory) => {
//     setDeleteFactoryItem(factory);
//     setDeleteOpen(true);
//   };

//   const confirmDelete = async () => {
//     await dispatch(removeFactory(deleteFactoryItem._id));

//     setDeleteOpen(false);
//     setDeleteFactoryItem(null);

//     refreshData();
//   };

//   const filteredFactories = factories.filter((factory) =>
//     factory.factoryName
//       .toLowerCase()
//       .includes(search.toLowerCase())
//   );

//   return (
//     <PageContainer>
//       <PageHeader
//         title="Factories"
//         subtitle="Manage factories"
//       />

//       <FactoryToolbar
//         search={search}
//         setSearch={setSearch}
//         onAdd={handleAdd}
//         onRefresh={refreshData}
//       />

//       {error && (
//         <Typography color="error" mb={2}>
//           {error}
//         </Typography>
//       )}

//       <FactoryTable
//         factories={filteredFactories}
//         loading={loading}
//         onEdit={handleEdit}
//         onDelete={handleDelete}
//       />

//       <FactoryDialog
//         open={dialogOpen}
//         onClose={() => setDialogOpen(false)}
//         onSave={handleSave}
//         factory={selectedFactory}
//       />

//       <FactoryDeleteDialog
//         open={deleteOpen}
//         onClose={() => setDeleteOpen(false)}
//         onDelete={confirmDelete}
//         factory={deleteFactoryItem}
//       />
//     </PageContainer>
//   );
// };

// export default Factories;


import React, { useEffect, useState } from "react";

import {
  Box,
  Button,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import { useDispatch, useSelector } from "react-redux";


import {
  fetchFactories,
  createNewFactory,
  updateExistingFactory,
  removeFactory,
} from "../../features/factory/factoryThunk";
import FactoryTable from "../../components/factories/FactoryTable";
import FactoryDialog from "../../components/factories/FactoryDialog";
import FactoryDeleteDialog from "../../components/factories/FactoryDeleteDialog";


const Factories = () => {

  const dispatch = useDispatch();


  const { factories } = useSelector(
    (state)=> state.factory
  );
console.log("FACTORIES DATA:", factories);

  const [open, setOpen] = useState(false);

  const [selectedFactory, setSelectedFactory] = useState(null);

  const [deleteOpen, setDeleteOpen] = useState(false);


  useEffect(()=>{

    dispatch(fetchFactories());

  },[dispatch]);



  const handleAdd = ()=>{

    setSelectedFactory(null);
    setOpen(true);

  };



  const handleEdit = (factory)=>{

    setSelectedFactory(factory);
    setOpen(true);

  };



  const handleSubmit = (data)=>{

    if(selectedFactory){

    dispatch(
  updateExistingFactory({
    id: selectedFactory._id,
    data,
  })
);

    }else{

    dispatch(createNewFactory(data));

    }

    setOpen(false);

  };



  const handleDelete = (factory)=>{

    setSelectedFactory(factory);
    setDeleteOpen(true);

  };



  const confirmDelete = ()=>{

    dispatch(
      removeFactory(selectedFactory._id)
    );

    setDeleteOpen(false);

  };



  return (

    <Box>


      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleAdd}
        sx={{mb:3}}
      >
        Add Factory
      </Button>



      <FactoryTable
        factories={factories}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />



      <FactoryDialog

        open={open}

        onClose={()=>setOpen(false)}

        onSubmit={handleSubmit}

        selectedFactory={selectedFactory}

      />



      <FactoryDeleteDialog

        open={deleteOpen}

        onClose={()=>setDeleteOpen(false)}

        onConfirm={confirmDelete}

        factory={selectedFactory}

      />


    </Box>

  );

};


export default Factories;