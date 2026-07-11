import React, { useState } from "react";

import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Container,
  Avatar,
  MenuItem,
} from "@mui/material";

import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";

import { useNavigate } from "react-router-dom";

import api from "../../api/axiosInstance";


const roles = [

  "super_admin",
  "factory_admin",
  "branch_admin",
  "sales_person",
  "management_support",

];



const Register = () => {


  const navigate = useNavigate();



  const [form, setForm] = useState({

    name:"",
    email:"",
    phone:"",
    password:"",
    role:"sales_person",

  });



  const [loading,setLoading] = useState(false);

  const [error,setError] = useState("");




  const handleChange = (e)=>{

    setForm((prev)=>({

      ...prev,

      [e.target.name]:e.target.value,

    }));

  };





  const handleSubmit = async(e)=>{

    e.preventDefault();


    try{


      setLoading(true);

      setError("");



      const res = await api.post(

        "/auth/register",

        form

      );



      console.log(
        "Register Response:",
        res.data
      );



      navigate("/login");



    }
    catch(error){


      setError(

        error.response?.data?.message ||

        "Registration failed"

      );


    }
    finally{

      setLoading(false);

    }


  };





  return (

    <Container maxWidth="sm">


      <Box

        sx={{

          minHeight:"100vh",

          display:"flex",

          justifyContent:"center",

          alignItems:"center",

        }}

      >



        <Paper

          elevation={6}

          sx={{

            p:4,

            width:"100%",

            borderRadius:3,

          }}

        >



          <Box

            sx={{

              display:"flex",

              flexDirection:"column",

              alignItems:"center",

              mb:3,

            }}

          >



            <Avatar

              sx={{

                bgcolor:"primary.main",

                mb:2,

              }}

            >

              <PersonAddOutlinedIcon />

            </Avatar>



            <Typography

              variant="h5"

              fontWeight="bold"

            >

              ERP Registration

            </Typography>



            <Typography

              variant="body2"

              color="text.secondary"

            >

              Create your ERP account

            </Typography>



          </Box>





          <Box

            component="form"

            onSubmit={handleSubmit}

          >



            <TextField

              fullWidth

              label="Name"

              name="name"

              value={form.name}

              onChange={handleChange}

              margin="normal"

              required

            />




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

              label="Phone"

              name="phone"

              value={form.phone}

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





            <TextField

              select

              fullWidth

              label="Role"

              name="role"

              value={form.role}

              onChange={handleChange}

              margin="normal"

              required

            >



              {roles.map((role)=>(


                <MenuItem

                  key={role}

                  value={role}

                >

                  {role

                    .replaceAll("_"," ")

                    .replace(/\b\w/g, c =>
                      c.toUpperCase()
                    )

                  }


                </MenuItem>


              ))}



            </TextField>





            {

              error &&

              <Typography

                color="error"

                sx={{mt:1}}

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

                mt:2,

                py:1.2,

              }}

            >

              {

                loading

                ? "Creating..."

                : "Register"

              }


            </Button>





            <Button

              fullWidth

              sx={{mt:1}}

              onClick={()=>navigate("/login")}

            >

              Already have account? Login

            </Button>




          </Box>


        </Paper>


      </Box>


    </Container>

  );

};


export default Register;