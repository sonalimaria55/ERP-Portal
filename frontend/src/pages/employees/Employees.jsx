// import React, { useEffect, useState } from "react";

// import { useDispatch, useSelector } from "react-redux";

// import {
//   fetchEmployees,
//   removeEmployee,
// } from "../../features/employee/employeeThunk";

// import PageContainer from "../../components/ui/PageContainer";

// import PageHeader from "../../components/ui/PageHeader";

// import EmployeeToolbar from "../../components/employees/EmployeeToolbar";

// import EmployeeTable from "../../components/employees/EmployeeTable";

// import EmployeeDialog from "../../components/employees/EmployeeDialog";

// import EmployeeDeleteDialog from "../../components/employees/EmployeeDeleteDialog";

// const Employees = () => {

//   const dispatch = useDispatch();

//   const { employees, loading } = useSelector(
//     (state) => state.employee
//   );

//   const [openDialog, setOpenDialog] = useState(false);

//   const [selectedEmployee, setSelectedEmployee] = useState(null);

//   const [deleteDialog, setDeleteDialog] = useState(false);

//   useEffect(() => {
//     dispatch(fetchEmployees());
//   }, [dispatch]);

//   const handleAdd = () => {
//     setSelectedEmployee(null);
//     setOpenDialog(true);
//   };

//   const handleEdit = (employee) => {
//     setSelectedEmployee(employee);
//     setOpenDialog(true);
//   };

//   const handleDelete = (employee) => {
//     setSelectedEmployee(employee);
//     setDeleteDialog(true);
//   };

//   const confirmDelete = () => {
//     dispatch(removeEmployee(selectedEmployee._id));
//     setDeleteDialog(false);
//   };

//   return (
//     <PageContainer>

//       <PageHeader
//         title="Employees"
//         subtitle="Company Resource Directory"
//       />

//       <EmployeeToolbar
//         onAdd={handleAdd}
//       />

//       <EmployeeTable
//         employees={employees}
//         loading={loading}
//         onEdit={handleEdit}
//         onDelete={handleDelete}
//       />

//       <EmployeeDialog
//         open={openDialog}
//         onClose={() => setOpenDialog(false)}
//         employee={selectedEmployee}
//       />

//       <EmployeeDeleteDialog
//         open={deleteDialog}
//         employee={selectedEmployee}
//         onClose={() => setDeleteDialog(false)}
//         onConfirm={confirmDelete}
//       />

//     </PageContainer>
//   );
// };

// export default Employees;




import { useEffect, useState } from "react";
import { Box, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { fetchEmployees } from "../../features/employee/employeeThunk";

import PageHeader from "../../components/common/PageHeader";
import EmployeeToolbar from "../../components/employees/EmployeeToolbar";
import EmployeeTable from "../../components/employees/EmployeeTable";
import EmployeeDialog from "../../components/employees/EmployeeDialog";
import EmployeeDeleteDialog from "../../components/employees/EmployeeDeleteDialog";

const Employees = () => {
  const dispatch = useDispatch();

  const { employees, loading } = useSelector(
    (state) => state.employee
  );

  const [openDialog, setOpenDialog] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const [selectedEmployee, setSelectedEmployee] =
    useState(null);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleAdd = () => {
    setSelectedEmployee(null);
    setOpenDialog(true);
  };

  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
    setOpenDialog(true);
  };

  const handleDelete = (employee) => {
    setSelectedEmployee(employee);
    setOpenDelete(true);
  };

  return (
    <Box>

      <PageHeader
        title="Employees"
        subtitle="Manage employee information"
      />

      <Paper
        sx={{
          p: 3,
          mt: 2,
          borderRadius: 3,
        }}
      >
        <EmployeeToolbar
          onAdd={handleAdd}
        />

        <EmployeeTable
          rows={employees}
          loading={loading}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Paper>

      <EmployeeDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        employee={selectedEmployee}
      />

      <EmployeeDeleteDialog
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        employee={selectedEmployee}
      />

    </Box>
  );
};

export default Employees;