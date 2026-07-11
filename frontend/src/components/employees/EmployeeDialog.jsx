import React, { useEffect, useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  TextField,
  MenuItem,
  Switch,
  FormControlLabel,
} from "@mui/material";

const roles = [
  "management_support",
  "factory_admin",
  "branch_admin",
  "sales_person",
];

const EmployeeDialog = ({
  open,
  onClose,
  employee,
  onSave,
  factories = [],
  branches = [],
}) => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    employeeCode: "",
    aadhaarNumber: "",
    panNumber: "",
    address: "",
    role: "sales_person",
    factory: "",
    branch: "",
    isActive: true,
  });

  useEffect(() => {
    if (employee) {
      setForm({
        ...employee,
        password: "",
        factory: employee.factory?._id || "",
        branch: employee.branch?._id || "",
      });
    } else {
      setForm({
        name: "",
        email: "",
        phone: "",
        password: "",
        employeeCode: "",
        aadhaarNumber: "",
        panNumber: "",
        address: "",
        role: "sales_person",
        factory: "",
        branch: "",
        isActive: true,
      });
    }
  }, [employee]);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    onSave(form);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle>
        {employee ? "Edit Employee" : "Add Employee"}
      </DialogTitle>

      <DialogContent>

        <Grid container spacing={2} sx={{ mt: 1 }}>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Employee Code"
              name="employeeCode"
              value={form.employeeCode}
              disabled
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />
          </Grid>

          {!employee && (
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
              />
            </Grid>
          )}

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Aadhaar Number"
              name="aadhaarNumber"
              value={form.aadhaarNumber}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="PAN Number"
              name="panNumber"
              value={form.panNumber}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={3}
              label="Address"
              name="address"
              value={form.address}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              select
              fullWidth
              label="Role"
              name="role"
              value={form.role}
              onChange={handleChange}
            >
              {roles.map((role) => (
                <MenuItem
                  key={role}
                  value={role}
                >
                  {role.replaceAll("_", " ")}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              select
              fullWidth
              label="Factory"
              name="factory"
              value={form.factory}
              onChange={handleChange}
            >
              <MenuItem value="">None</MenuItem>

              {factories.map((factory) => (
                <MenuItem
                  key={factory._id}
                  value={factory._id}
                >
                  {factory.factoryName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              select
              fullWidth
              label="Branch"
              name="branch"
              value={form.branch}
              onChange={handleChange}
            >
              <MenuItem value="">None</MenuItem>

              {branches.map((branch) => (
                <MenuItem
                  key={branch._id}
                  value={branch._id}
                >
                  {branch.branchName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={form.isActive}
                  onChange={handleChange}
                  name="isActive"
                />
              }
              label="Active Employee"
            />
          </Grid>

        </Grid>

      </DialogContent>

      <DialogActions>

        <Button onClick={onClose}>
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleSubmit}
        >
          {employee ? "Update" : "Create"}
        </Button>

      </DialogActions>

    </Dialog>
  );
};

export default EmployeeDialog;