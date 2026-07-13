import React, { useEffect, useState } from "react";

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    Box,
    IconButton,
    MenuItem,
} from "@mui/material";


import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";


import { useDispatch } from "react-redux";


import {
    addPurchase,
} from "../../features/purchase/purchaseThunk";



const PurchaseDialog = ({
    open,
    onClose,
}) => {


    const dispatch = useDispatch();


    const [formData,setFormData] = useState({

        supplier:"",

        items:[
            {
                product:"",
                quantity:1,
                purchasePrice:0,
            }
        ],

    });



    const handleChange = (e)=>{

        setFormData({

            ...formData,

            [e.target.name]:
            e.target.value

        });

    };



    const handleItemChange = (
        index,
        field,
        value
    )=>{


        const updatedItems =
            [...formData.items];


        updatedItems[index][field] =
            value;


        setFormData({

            ...formData,

            items:updatedItems,

        });


    };




    const addItem = ()=>{


        setFormData({

            ...formData,

            items:[

                ...formData.items,

                {
                    product:"",
                    quantity:1,
                    purchasePrice:0,
                }

            ]

        });


    };




    const removeItem=(index)=>{


        const updated =
        formData.items.filter(
            (_,i)=>i!==index
        );


        setFormData({

            ...formData,

            items:updated

        });


    };




    const handleSubmit = ()=>{


        dispatch(
            addPurchase(formData)
        );


        onClose();


    };




return (

<Dialog
    open={open}
    onClose={onClose}
    maxWidth="md"
    fullWidth
>


<DialogTitle>
    Create Purchase
</DialogTitle>



<DialogContent>


<Box
    mt={2}
>



<TextField

    fullWidth

    label="Supplier ID"

    name="supplier"

    value={
        formData.supplier
    }

    onChange={
        handleChange
    }

/>



</Box>




<Box mt={3}>


{
formData.items.map(
(item,index)=>(


<Box

key={index}

display="flex"

gap={2}

mb={2}

>


<TextField

label="Product ID"

value={
item.product
}

onChange={
(e)=>
handleItemChange(
index,
"product",
e.target.value
)
}

/>



<TextField

label="Quantity"

type="number"

value={
item.quantity
}

onChange={
(e)=>
handleItemChange(
index,
"quantity",
e.target.value
)
}

/>



<TextField

label="Purchase Price"

type="number"

value={
item.purchasePrice
}

onChange={
(e)=>
handleItemChange(
index,
"purchasePrice",
e.target.value
)
}

/>



<IconButton

color="error"

onClick={()=>
removeItem(index)
}

>

<DeleteIcon/>

</IconButton>



</Box>


))
}


<Button

startIcon={<AddIcon/>}

onClick={addItem}

>

Add Product

</Button>



</Box>


</DialogContent>




<DialogActions>


<Button
onClick={onClose}
>
Cancel
</Button>


<Button

variant="contained"

onClick={handleSubmit}

>

Save Purchase

</Button>


</DialogActions>



</Dialog>

);

};


export default PurchaseDialog;