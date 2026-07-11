// import React, { useState, useEffect } from "react";

// import {
//     Dialog,
//     DialogTitle,
//     DialogContent,
//     DialogActions,
//     TextField,
//     Button,
//     MenuItem,
// } from "@mui/material";

// import { useDispatch, useSelector } from "react-redux";

// import { fetchFactories } from "../../features/factory/factoryThunk";
// import { fetchBranchesByFactory } from "../../features/branch/branchThunk";
// import { fetchCountersByBranch } from "../../features/counter/counterThunk";


// const roles = [
//     "super_admin",
//     "hr_manager",
//     "factory_admin",
//     "branch_admin",
//     "warehouse_manager",
//     "purchase_manager",
//     "sales_person",
//     "online_manager",
//     "accounts_manager",
//     "delivery_manager",
//     "customer_support",
// ];


// function UserFormDialog({
//     open,
//     onClose,
//     onSave,
// }) {



//     const dispatch = useDispatch();



//     const { factories } = useSelector(
//         (state) => state.factory
//     );


//     const { branches } = useSelector(
//         (state) => state.branch
//     );

//     const { counters } = useSelector(
//         (state) => state.counter
//     );



//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         password: "",
//         role: "sales_person",

//         factory: "",
//         branch: "",
//         counter: "",
//     });


//     useEffect(() => {
//         if (open) {
//             dispatch(fetchFactories());
//         }
//     }, [open, dispatch]);

//     useEffect(() => {
//     console.log("Factories:", factories);
// }, [factories]);


//     const handleChange = (e) => {

//         const { name, value } = e.target;

//         if (name === "factory") {

//             setFormData((prev) => ({
//                 ...prev,
//                 factory: value,
//                 branch: "",
//                 counter: "",
//             }));

//             dispatch(fetchBranchesByFactory(value));

//             return;
//         }

//         if (name === "branch") {

//             setFormData((prev) => ({
//                 ...prev,
//                 branch: value,
//                 counter: "",
//             }));

//             dispatch(fetchCountersByBranch(value));

//             return;
//         }

//         setFormData((prev) => ({
//             ...prev,
//             [name]: value,
//         }));

//     };



//     const handleSubmit = () => {
//         console.log("Sending User:", formData);
//         onSave(formData);
//         setFormData({
//             name: "",
//             email: "",
//             phone: "",
//             password: "",
//             role: "sales_person",

//             factory: "",
//             branch: "",
//             counter: "",
//         });

//     };






//     return (

//         <Dialog
//             open={open}
//             onClose={onClose}
//             fullWidth
//             maxWidth="sm"
//         >

//             <DialogTitle>
//                 Create New User
//             </DialogTitle>


//             <DialogContent
//     sx={{
//         maxHeight:"70vh",
//         overflowY:"auto"
//     }}
// >


//                 <TextField
//                     margin="normal"
//                     fullWidth
//                     label="Name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                 />


//                 <TextField
//                     margin="normal"
//                     fullWidth
//                     label="Email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                 />

//                 <TextField
//                     margin="normal"
//                     fullWidth
//                     label="Phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                 />



//                 <TextField
//                     margin="normal"
//                     fullWidth
//                     label="Password"
//                     type="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                 />



//                 <TextField
//                     margin="normal"
//                     fullWidth
//                     select
//                     label="Role"
//                     name="role"
//                     value={formData.role}
//                     onChange={handleChange}
//                 >

//                     {roles.map((role) => (
//                         <MenuItem
//                             key={role}
//                             value={role}
//                         >
//                             {role}
//                         </MenuItem>
//                     ))}

//                 </TextField>


//                 {formData.role !== "super_admin" && (
//                     <TextField
//                         margin="normal"
//                         fullWidth
//                         select
//                         label="Factory"
//                         name="factory"
//                         value={formData.factory}
//                         onChange={handleChange}
//                     >
//                         {factories.map((factory) => (
//                             <MenuItem key={factory._id} value={factory._id}>
//                                 {factory.factoryName}
//                             </MenuItem>
//                         ))}
//                     </TextField>
//                 )}


//                 {[
//                     "branch_admin",
//                     "warehouse_manager",
//                     "purchase_manager",
//                     "online_manager",
//                     "accounts_manager",
//                     "delivery_manager",
//                     "customer_support",
//                     "sales_person",
//                 ].includes(formData.role) && (
//                         <TextField
//                             margin="normal"
//                             fullWidth
//                             select
//                             label="Branch"
//                             name="branch"
//                             value={formData.branch}
//                             onChange={handleChange}
//                             disabled={!formData.factory}
//                         >
//                             {branches.map((branch) => (
//                                 <MenuItem key={branch._id} value={branch._id}>
//                                     {branch.branchName}
//                                 </MenuItem>
//                             ))}
//                         </TextField>
//                     )}
//                 {formData.role === "sales_person" && (
//                     <TextField
//                         margin="normal"
//                         fullWidth
//                         select
//                         label="Counter"
//                         name="counter"
//                         value={formData.counter}
//                         onChange={handleChange}
//                         disabled={!formData.branch}
//                     >
//                         {counters.map((counter) => (
//                             <MenuItem key={counter._id} value={counter._id}>
//                                 {counter.counterName}
//                             </MenuItem>
//                         ))}
//                     </TextField>
//                 )}


//             </DialogContent>



//             <DialogActions>

//                 <Button onClick={onClose}>
//                     Cancel
//                 </Button>


//                 <Button
//                     variant="contained"
//                     onClick={handleSubmit}
//                 >
//                     Create
//                 </Button>

//             </DialogActions>


//         </Dialog>

//     );

// }


// export default UserFormDialog;
import React, { useState, useEffect } from "react";

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    MenuItem,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";

import { fetchFactories } from "../../features/factory/factoryThunk";
import { fetchBranchesByFactory } from "../../features/branch/branchThunk";
import { fetchCountersByBranch } from "../../features/counter/counterThunk";

const roles = [
    {
        value: "super_admin",
        label: "Super Admin",
    },
    {
        value: "factory_admin",
        label: "Factory Admin",
    },
    {
        value: "branch_admin",
        label: "Branch Admin",
    },
    {
        value: "sales_person",
        label: "Sales Person",
    },
    {
        value: "management_support",
        label: "Management Support",
    },
];

const initialState = {
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "sales_person",

    factory: "",
    branch: "",
    counter: "",
};

function UserFormDialog({
    open,
    user,
    onClose,
    onSave,
}) {
    const dispatch = useDispatch();

    const { factories = [] } = useSelector(
        (state) => state.factory
    );

    const { branches = [] } = useSelector(
        (state) => state.branch
    );

    const { counters = [] } = useSelector(
        (state) => state.counter
    );

    const [formData, setFormData] =
        useState(initialState);

    // Load factories whenever dialog opens

    useEffect(() => {
        if (open) {
            dispatch(fetchFactories());
        }
    }, [open, dispatch]);

    // Fill form while editing

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name || "",
                email: user.email || "",
                phone: user.phone || "",
                password: "",
                role: user.role || "sales_person",

                factory: user.factory?._id || "",
                branch: user.branch?._id || "",
                counter: user.counter?._id || "",
            });

            if (user.factory?._id) {
                dispatch(
                    fetchBranchesByFactory(
                        user.factory._id
                    )
                );
            }

            if (user.branch?._id) {
                dispatch(
                    fetchCountersByBranch(
                        user.branch._id
                    )
                );
            }
        } else {
            setFormData(initialState);
        }
    }, [user, dispatch]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "factory") {
            setFormData((prev) => ({
                ...prev,
                factory: value,
                branch: "",
                counter: "",
            }));

            dispatch(fetchBranchesByFactory(value));
            return;
        }

        if (name === "branch") {
            setFormData((prev) => ({
                ...prev,
                branch: value,
                counter: "",
            }));

            dispatch(fetchCountersByBranch(value));
            return;
        }

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = () => {

        console.log("USER DATA:", formData);

        onSave(formData);

        setFormData(initialState);

        onClose();
    };
    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="sm"
        >
            <DialogTitle>
                {user
                    ? "Edit User"
                    : "Create User"}
            </DialogTitle>

            <DialogContent
                sx={{
                    maxHeight: "70vh",
                    overflowY: "auto",
                }}
            >
                <TextField
                    margin="normal"
                    fullWidth
                    required
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />

                <TextField
                    margin="normal"
                    fullWidth
                    required
                    type="email"
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <TextField
                    margin="normal"
                    fullWidth
                    required
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
                <TextField
                    margin="normal"
                    fullWidth
                    type="password"
                    required={!user}
                    label={
                        user
                            ? "New Password (Optional)"
                            : "Password"
                    }
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />

                <TextField
                    margin="normal"
                    fullWidth
                    select
                    label="Role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                >
                    {roles.map((role) => (
                        <MenuItem
                            key={role.value}
                            value={role.value}
                        >
                            {role.label}
                        </MenuItem>
                    ))}
                </TextField>

                {formData.role !==
                    "super_admin" && (
                        <TextField
                            margin="normal"
                            fullWidth
                            select
                            label="Factory"
                            name="factory"
                            value={formData.factory}
                            onChange={handleChange}
                        >
                            {factories.map((factory) => (
                                <MenuItem
                                    key={factory._id}
                                    value={factory._id}
                                >
                                    {factory.factoryName}
                                </MenuItem>
                            ))}
                        </TextField>
                    )}

                {[
                    "branch_admin",
                    "sales_person",
                    "management_support",
                ].includes(formData.role) && (
                        <TextField
                            margin="normal"
                            fullWidth
                            select
                            label="Branch"
                            name="branch"
                            value={formData.branch}
                            onChange={handleChange}
                            disabled={!formData.factory}
                        >
                            {branches.map((branch) => (
                                <MenuItem
                                    key={branch._id}
                                    value={branch._id}
                                >
                                    {branch.branchName}
                                </MenuItem>
                            ))}
                        </TextField>
                    )}

                {formData.role ===
                    "sales_person" && (
                        <TextField
                            margin="normal"
                            fullWidth
                            select
                            label="Counter"
                            name="counter"
                            value={formData.counter}
                            onChange={handleChange}
                            disabled={!formData.branch}
                        >
                            {counters.map((counter) => (
                                <MenuItem
                                    key={counter._id}
                                    value={counter._id}
                                >
                                    {counter.counterName}
                                </MenuItem>
                            ))}
                        </TextField>
                    )}
            </DialogContent>

            <DialogActions>
                <Button
                    onClick={() => {
                        setFormData(initialState);
                        onClose();
                    }}
                >
                    Cancel
                </Button>

                <Button
                    onClick={handleSubmit}
                    disabled={
                        formData.role !== "super_admin" &&
                        !formData.factory
                    }
                >
                    {user
                        ? "Update User"
                        : "Create User"}
                </Button>
            </DialogActions>



        </Dialog>
    );
}

export default UserFormDialog