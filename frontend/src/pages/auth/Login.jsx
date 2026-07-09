import React, { useState } from "react";

import api from "../../api/axiosInstance";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loginSuccess } from "../../features/auth/authSlice";

import { redirectByRole } from "../../utils/roleRedirect";


import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Container,
  Avatar,
} from "@mui/material";


import LockOutlinedIcon from "@mui/icons-material/LockOutlined";



const Login = () => {


  const navigate = useNavigate();

  const dispatch = useDispatch();



  const [form, setForm] = useState({

    email: "",

    password: "",

  });



  const [loading, setLoading] = useState(false);


  const [error, setError] = useState("");





  const handleChange = (e) => {


    setForm((prev) => ({

      ...prev,

      [e.target.name]: e.target.value,

    }));

  };






  const handleSubmit = async (e) => {


    e.preventDefault();


    try {


      setLoading(true);

      setError("");



      const res = await api.post(
        "/auth/login",
        form
      );



      console.log(
        "Login Response:",
        res.data
      );



      const user = res.data.user;



      if (!user) {

        throw new Error(
          "Invalid login response"
        );

      }




      dispatch(
        loginSuccess(res.data)
      );




      redirectByRole(
        user.role,
        navigate
      );




    } catch (error) {


      setError(

        error.response?.data?.message ||

        error.message ||

        "Login failed"

      );


    } finally {


      setLoading(false);


    }


  };







  return (

    <Container maxWidth="sm">


      <Box

        sx={{

          height: "100vh",

          display: "flex",

          justifyContent: "center",

          alignItems: "center",

        }}

      >



        <Paper

          elevation={6}

          sx={{

            p: 4,

            width: "100%",

            borderRadius: 3,

          }}

        >




          {/* HEADER */}


          <Box

            sx={{

              display: "flex",

              flexDirection: "column",

              alignItems: "center",

              mb: 3,

            }}

          >



            <Avatar

              sx={{

                bgcolor: "primary.main",

                mb: 2,

              }}

            >

              <LockOutlinedIcon />

            </Avatar>





            <Typography

              variant="h5"

              fontWeight="bold"

            >

              ERP Login

            </Typography>





            <Typography

              variant="body2"

              color="text.secondary"

            >

              Enter your credentials to continue

            </Typography>



          </Box>








          {/* LOGIN FORM */}


          <Box

            component="form"

            onSubmit={handleSubmit}

          >





            <TextField

              fullWidth

              label="Email"

              name="email"

              value={form.email}

              onChange={handleChange}

              margin="normal"

              required

            />







            <TextField

              fullWidth

              label="Password"

              name="password"

              type="password"

              value={form.password}

              onChange={handleChange}

              margin="normal"

              required

            />








            {

              error &&

              <Typography

                color="error"

                sx={{ mt: 1 }}

              >

                {error}

              </Typography>

            }







            <Button

              type="submit"

              fullWidth

              variant="contained"

              disabled={loading}

              sx={{

                mt: 2,

                py: 1.2,

              }}

            >



              {

                loading

                ? "Logging in..."

                : "Login"

              }



            </Button>








            {/* REGISTER BUTTON */}


            <Button

              fullWidth

              variant="text"

              sx={{

                mt: 1,

              }}

              onClick={() => navigate("/register")}

            >

              Create New Account

            </Button>





          </Box>





        </Paper>




      </Box>




    </Container>

  );

};



export default Login;