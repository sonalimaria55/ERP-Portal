const express = require("express");

const router = express.Router();

const {
    createInternalCustomer,
    getAllInternalCustomers,
    getInternalCustomerById,
    updateInternalCustomer,
    deleteInternalCustomer
} = require("../controllers/internalCustomerController");


const { protect } =
    require("../middleware/authMiddleware");


const authorize =
    require("../middleware/authorizeMiddleware");


router.post(
    "/",
    protect,
    authorize(
        "super_admin",
        "management_support"
    ),
    createInternalCustomer
);


router.get(
    "/",
    protect,
    getAllInternalCustomers
);


router.get(
    "/:id",
    protect,
    getInternalCustomerById
);


router.put(
    "/:id",
    protect,
    authorize(
        "super_admin",
        "management_support"
    ),
    updateInternalCustomer
);


router.delete(
    "/:id",
    protect,
    authorize(
        "super_admin"
    ),
    deleteInternalCustomer
);


module.exports = router;