import React, { useEffect, useState } from "react";

import {
  Box,
  Grid,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import {
  createNewUser,
  updateExistingUser,
} from "../../features/user/userThunk";


import RoleFields from "./RoleFields";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  password: "",
  role: "sales_person",

  factory: "",
  branch: "",
  counter: "",
};

const UserForm = ({
  user,
  onClose,
}) => {
  const dispatch = useDispatch();

  const { loading } = useSelector(
    (state) => state.user
  );

  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        password: "",
        role: user.role,

        factory: user.factory?._id || "",
        branch: user.branch?._id || "",
        counter: user.counter?._id || "",
      });
    } else {
      setForm(initialForm);
    }
  }, [user]);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   if (user) {
  await dispatch(
    updateExistingUser({
      id: user._id,
      data: form,
    })
  );
} else {
  await dispatch(
    createNewUser(form)
  );
}

    onClose();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
    >
      <Grid container spacing={2} mt={1}>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required={!user}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            select
            label="Role"
            name="role"
            value={form.role}
            onChange={handleChange}
          >
            <MenuItem value="super_admin">
              Super Admin
            </MenuItem>

            <MenuItem value="factory_admin">
              Factory Admin
            </MenuItem>

            <MenuItem value="branch_admin">
              Branch Admin
            </MenuItem>

            <MenuItem value="sales_person">
              Sales Person
            </MenuItem>
          </TextField>
        </Grid>

        <RoleFields
          form={form}
          handleChange={handleChange}
        />

      </Grid>

      <Box
        mt={3}
        display="flex"
        justifyContent="flex-end"
      >
        <Button
          type="submit"
          variant="contained"
          disabled={loading}
        >
          {loading
            ? "Saving..."
            : user
            ? "Update User"
            : "Create User"}
        </Button>
      </Box>
    </Box>
  );
};

export default UserForm;