import React, { useEffect, useState } from "react";

import {
    Box,
    Paper,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    CircularProgress,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    IconButton,
} from "@mui/material";


import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";


import { useDispatch, useSelector } from "react-redux";


import {
    fetchCategories,
    addCategory,
    editCategory,
    removeCategory,
} from "../../features/category/categorySlice";



const Categories = () => {


    const dispatch = useDispatch();



    const {
        categories,
        loading,
    } = useSelector(
        (state) => state.category
    );



    const [open, setOpen] = useState(false);


    const [editId, setEditId] = useState(null);



    const [form, setForm] = useState({

        categoryName: "",

        description: "",

        isActive: true

    });




    useEffect(() => {


        dispatch(
            fetchCategories({
                page: 1,
                limit: 10,
                search: "",
            })
        );


    }, [dispatch]);






    const handleChange = (e) => {


        setForm({

            ...form,

            [e.target.name]: e.target.value

        });


    };






    const handleSubmit = async () => {



        if (editId) {


            await dispatch(

                editCategory({

                    id: editId,

                    categoryData: form

                })

            );


        } 
        else {


            await dispatch(

                addCategory(form)

            );


        }




        setForm({

            categoryName: "",

            description: "",

            isActive: true

        });



        setEditId(null);


        setOpen(false);



        dispatch(

            fetchCategories({

                page: 1,

                limit: 10,

                search: "",

            })

        );


    };








    const handleEdit = (category) => {



        setForm({

            categoryName: category.categoryName,

            description: category.description || "",

            isActive: category.isActive

        });



        setEditId(category._id);



        setOpen(true);



    };







    const handleDelete = async (id) => {



        await dispatch(

            removeCategory(id)

        );



        dispatch(

            fetchCategories({

                page:1,

                limit:10,

                search:""

            })

        );


    };








    return (

        <Box>



            {/* HEADER */}

            <Box

                sx={{

                    display:"flex",

                    justifyContent:"space-between",

                    alignItems:"center",

                    mb:3

                }}

            >


                <Typography

                    variant="h4"

                    fontWeight="bold"

                >

                    Categories

                </Typography>




                <Button

                    variant="contained"

                    startIcon={<AddIcon />}

                    onClick={()=>{

                        setEditId(null);

                        setForm({

                            categoryName:"",

                            description:"",

                            isActive:true

                        });

                        setOpen(true);

                    }}

                >

                    Add Category

                </Button>



            </Box>







            {/* TABLE */}


            <Paper

                sx={{

                    borderRadius:3,

                    overflow:"hidden"

                }}

            >



                {

                    loading ?



                    (

                        <Box

                            sx={{

                                p:5,

                                display:"flex",

                                justifyContent:"center"

                            }}

                        >

                            <CircularProgress />

                        </Box>


                    )


                    :


                    (

                        <TableContainer>


                            <Table>


                                <TableHead>


                                    <TableRow>


                                        <TableCell>
                                            Category Name
                                        </TableCell>



                                        <TableCell>
                                            Description
                                        </TableCell>



                                        <TableCell>
                                            Status
                                        </TableCell>



                                        <TableCell>
                                            Actions
                                        </TableCell>



                                    </TableRow>


                                </TableHead>





                                <TableBody>


                                    {
                                        categories.map(

                                            (category)=>(


                                                <TableRow

                                                    key={category._id}

                                                >



                                                    <TableCell>

                                                        {
                                                            category.categoryName
                                                        }

                                                    </TableCell>




                                                    <TableCell>

                                                        {

                                                            category.description || "-"

                                                        }

                                                    </TableCell>





                                                    <TableCell>

                                                        {

                                                            category.isActive

                                                            ?

                                                            "Active"

                                                            :

                                                            "Inactive"

                                                        }

                                                    </TableCell>






                                                    <TableCell>



                                                        <IconButton

                                                            color="primary"

                                                            onClick={()=>handleEdit(category)}

                                                        >

                                                            <EditIcon />

                                                        </IconButton>





                                                        <IconButton

                                                            color="error"

                                                            onClick={()=>handleDelete(category._id)}

                                                        >

                                                            <DeleteIcon />

                                                        </IconButton>



                                                    </TableCell>



                                                </TableRow>


                                            )

                                        )
                                    }



                                </TableBody>



                            </Table>


                        </TableContainer>


                    )

                }




            </Paper>









            {/* CREATE / EDIT DIALOG */}



            <Dialog

                open={open}

                onClose={()=>setOpen(false)}

                fullWidth

            >



                <DialogTitle>

                    {
                        editId

                        ?

                        "Edit Category"

                        :

                        "Create Category"
                    }

                </DialogTitle>




                <DialogContent>




                    <TextField


                        fullWidth


                        label="Category Name"


                        name="categoryName"


                        value={form.categoryName}


                        onChange={handleChange}


                        margin="normal"


                    />





                    <TextField


                        fullWidth


                        label="Description"


                        name="description"


                        value={form.description}


                        onChange={handleChange}


                        margin="normal"


                    />





                </DialogContent>





                <DialogActions>


                    <Button

                        onClick={()=>setOpen(false)}

                    >

                        Cancel

                    </Button>





                    <Button

                        variant="contained"

                        onClick={handleSubmit}

                    >

                        Save

                    </Button>



                </DialogActions>



            </Dialog>





        </Box>

    );

};


export default Categories;