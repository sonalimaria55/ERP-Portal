// import React, { useEffect, useState } from "react";

// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
//   Grid,
//   TextField,
//   MenuItem,
//   Switch,
//   FormControlLabel,
// } from "@mui/material";

// const roles = [
//   "management_support",
//   "factory_admin",
//   "branch_admin",
//   "sales_person",
// ];

// const EmployeeDialog = ({
//   open,
//   onClose,
//   employee,
//   onSave,
//   factories = [],
//   branches = [],
// }) => {

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     employeeCode: "",
//     aadhaarNumber: "",
//     panNumber: "",
//     address: "",
//     role: "sales_person",
//     factory: "",
//     branch: "",
//     isActive: true,
//   });

//   useEffect(() => {
//     if (employee) {
//       setForm({
//         ...employee,
//         password: "",
//         factory: employee.factory?._id || "",
//         branch: employee.branch?._id || "",
//       });
//     } else {
//       setForm({
//         name: "",
//         email: "",
//         phone: "",
//         password: "",
//         employeeCode: "",
//         aadhaarNumber: "",
//         panNumber: "",
//         address: "",
//         role: "sales_person",
//         factory: "",
//         branch: "",
//         isActive: true,
//       });
//     }
//   }, [employee]);

//   const handleChange = (e) => {
//     const { name, value, checked, type } = e.target;

//     setForm((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = () => {
//     onSave(form);
//   };

//   return (
//     <Dialog
//       open={open}
//       onClose={onClose}
//       maxWidth="md"
//       fullWidth
//     >
//       <DialogTitle>
//         {employee ? "Edit Employee" : "Add Employee"}
//       </DialogTitle>

//       <DialogContent>

//         <Grid container spacing={2} sx={{ mt: 1 }}>

//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Employee Code"
//               name="employeeCode"
//               value={form.employeeCode}
//               disabled
//             />
//           </Grid>

//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Full Name"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//             />
//           </Grid>

//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//             />
//           </Grid>

//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Phone"
//               name="phone"
//               value={form.phone}
//               onChange={handleChange}
//             />
//           </Grid>

//           {!employee && (
//             <Grid item xs={12} md={6}>
//               <TextField
//                 fullWidth
//                 label="Password"
//                 type="password"
//                 name="password"
//                 value={form.password}
//                 onChange={handleChange}
//               />
//             </Grid>
//           )}

//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Aadhaar Number"
//               name="aadhaarNumber"
//               value={form.aadhaarNumber}
//               onChange={handleChange}
//             />
//           </Grid>

//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="PAN Number"
//               name="panNumber"
//               value={form.panNumber}
//               onChange={handleChange}
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               multiline
//               rows={3}
//               label="Address"
//               name="address"
//               value={form.address}
//               onChange={handleChange}
//             />
//           </Grid>

//           <Grid item xs={12} md={6}>
//             <TextField
//               select
//               fullWidth
//               label="Role"
//               name="role"
//               value={form.role}
//               onChange={handleChange}
//             >
//               {roles.map((role) => (
//                 <MenuItem
//                   key={role}
//                   value={role}
//                 >
//                   {role.replaceAll("_", " ")}
//                 </MenuItem>
//               ))}
//             </TextField>
//           </Grid>

//           <Grid item xs={12} md={6}>
//             <TextField
//               select
//               fullWidth
//               label="Factory"
//               name="factory"
//               value={form.factory}
//               onChange={handleChange}
//             >
//               <MenuItem value="">None</MenuItem>

//               {factories.map((factory) => (
//                 <MenuItem
//                   key={factory._id}
//                   value={factory._id}
//                 >
//                   {factory.factoryName}
//                 </MenuItem>
//               ))}
//             </TextField>
//           </Grid>

//           <Grid item xs={12} md={6}>
//             <TextField
//               select
//               fullWidth
//               label="Branch"
//               name="branch"
//               value={form.branch}
//               onChange={handleChange}
//             >
//               <MenuItem value="">None</MenuItem>

//               {branches.map((branch) => (
//                 <MenuItem
//                   key={branch._id}
//                   value={branch._id}
//                 >
//                   {branch.branchName}
//                 </MenuItem>
//               ))}
//             </TextField>
//           </Grid>

//           <Grid item xs={12}>
//             <FormControlLabel
//               control={
//                 <Switch
//                   checked={form.isActive}
//                   onChange={handleChange}
//                   name="isActive"
//                 />
//               }
//               label="Active Employee"
//             />
//           </Grid>

//         </Grid>

//       </DialogContent>

//       <DialogActions>

//         <Button onClick={onClose}>
//           Cancel
//         </Button>

//         <Button
//           variant="contained"
//           onClick={handleSubmit}
//         >
//           {employee ? "Update" : "Create"}
//         </Button>

//       </DialogActions>

//     </Dialog>
//   );
// };

// export default EmployeeDialog;
import React, { useEffect, useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Tabs,
  Tab,
  Box,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";

import {
  fetchFactories,
} from "../../features/factory/factoryThunk";

import {
  fetchBranches,
} from "../../features/branch/branchThunk";

import {
  addEmployee,
  editEmployee,
  fetchEmployees,
} from "../../features/employee/employeeThunk";

import EmployeePersonalTab from "./EmployeePersonalTab";
import EmployeeCompanyTab from "./EmployeeCompanyTab";
import EmployeeAddressTab from "./EmployeeAddressTab";
import EmployeeGuardianTab from "./EmployeeGuardianTab";
import EmployeeBankTab from "./EmployeeBankTab";

const initialState = {
  employeeId: "",
  employeeCode: "",

  fullName: "",
  photo: "",
  photoFile: null,

  phone: "",
  email: "",

  aadhaarNumber: "",
  panNumber: "",
  uanNumber: "",

  dateOfBirth: "",
  gender: "Male",

  factory: "",
  branch: "",
  joiningDate: "",

  designation: "",
  department: "",

  address: "",
  city: "",
  state: "",
  pincode: "",

  guardianName: "",
  guardianRelation: "",
  guardianPhone: "",
  guardianAddress: "",

  bankName: "",
  accountNumber: "",
  ifscCode: "",

  status: "Active",
};

const EmployeeDialog = ({
  open,
  onClose,
  employee,
}) => {

  const dispatch = useDispatch();

  const { factories = [] } = useSelector(
    (state) => state.factory
  );

  const { branches = [] } = useSelector(
    (state) => state.branch
  );

  const [tab, setTab] = useState(0);

  const [formData, setFormData] =
    useState(initialState);

  useEffect(() => {
    if (open) {
      dispatch(fetchFactories());
      dispatch(fetchBranches());
    }
  }, [dispatch, open]);

  useEffect(() => {

    if (employee) {

      setFormData({
        ...initialState,
        ...employee,
        factory: employee.factory?._id || "",
        branch: employee.branch?._id || "",
      });

    } else {

      setFormData(initialState);

    }

  }, [employee]);

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

  };
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setFormData((prev) => ({
      ...prev,
      photo: URL.createObjectURL(file),
      photoFile: file,
    }));
  };

  const handleSubmit = async () => {
    try {
      let result;

      if (employee) {
        result = await dispatch(
          editEmployee({
            id: employee._id,
            employeeData: formData,
          })
        );
      } else {
        result = await dispatch(addEmployee(formData));
      }

      if (
        result.meta.requestStatus === "fulfilled"
      ) {
        dispatch(fetchEmployees());

        setTab(0);

        onClose();
      } else {
        alert(result.payload || "Failed to save employee");
      }
    } catch (error) {
      console.error(error);
    }
  };


  const handleNext = () => {
  if (tab < 4) {
    setTab((prev) => prev + 1);
  }
};

const handlePrevious = () => {
  if (tab > 0) {
    setTab((prev) => prev - 1);
  }
};
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="lg"
    >

      <DialogTitle>

        {employee
          ? "Edit Employee"
          : "Add Employee"}

      </DialogTitle>

      <Tabs
        value={tab}
        onChange={(e, value) => setTab(value)}
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab label="Personal" />
        <Tab label="Company" />
        <Tab label="Address" />
        <Tab label="Guardian" />
        <Tab label="Bank" />
      </Tabs>

      <DialogContent dividers>

        <Box sx={{ mt: 2 }}>

          {tab === 0 && (

            <EmployeePersonalTab
              formData={formData}
              handleChange={handleChange}
              handlePhotoChange={handlePhotoChange}
            />

          )}

          {tab === 1 && (

            <EmployeeCompanyTab
              formData={formData}
              handleChange={handleChange}
              factories={factories}
              branches={branches}
            />

          )}

          {tab === 2 && (

            <EmployeeAddressTab
              formData={formData}
              handleChange={handleChange}
            />

          )}

          {tab === 3 && (

            <EmployeeGuardianTab
              formData={formData}
              handleChange={handleChange}
            />

          )}

          {tab === 4 && (

            <EmployeeBankTab
              formData={formData}
              handleChange={handleChange}
            />

          )}

        </Box>

      </DialogContent>
<DialogActions
  sx={{
    px: 3,
    py: 2,
    display: "flex",
    justifyContent: "space-between",
  }}
>

  <Button
    color="inherit"
    onClick={onClose}
  >
    Cancel
  </Button>

  <Box
    sx={{
      display: "flex",
      gap: 2,
    }}
  >

    {tab > 0 && (
      <Button
        variant="outlined"
        onClick={handlePrevious}
      >
        Previous
      </Button>
    )}

    {tab < 4 ? (
      <Button
        variant="contained"
        onClick={handleNext}
      >
        Next
      </Button>
    ) : (
      <Button
        variant="contained"
        onClick={handleSubmit}
      >
        {employee ? "Update" : "Save"}
      </Button>
    )}

  </Box>

</DialogActions>

    </Dialog>
  );
};

export default EmployeeDialog;