const ROLES = require("./roles");

const permissions = {

    [ROLES.SUPER_ADMIN]: [
        "USER_CREATE",
        "USER_VIEW",
        "USER_UPDATE",
        "USER_DELETE",

        "FACTORY_CREATE",
        "FACTORY_VIEW",
        "FACTORY_UPDATE",
        "FACTORY_DELETE",

        "BRANCH_CREATE",
        "BRANCH_VIEW",
        "BRANCH_UPDATE",
        "BRANCH_DELETE",

        "PRODUCT_CREATE",
        "PRODUCT_VIEW",
        "PRODUCT_UPDATE",
        "PRODUCT_DELETE",

        "INVENTORY_VIEW",
        "INVENTORY_UPDATE",

        "BILL_CREATE",
        "BILL_VIEW",

        "REPORT_VIEW",

        "DASHBOARD_VIEW",
    ],

    [ROLES.MANAGEMENT_SUPPORT]: [
        "USER_CREATE",
        "USER_VIEW",
        "USER_UPDATE",

        "FACTORY_CREATE",
        "FACTORY_VIEW",
        "FACTORY_UPDATE",

        "BRANCH_CREATE",
        "BRANCH_VIEW",
        "BRANCH_UPDATE",

        "PRODUCT_CREATE",
        "PRODUCT_VIEW",
        "PRODUCT_UPDATE",

        "REPORT_VIEW",

        "DASHBOARD_VIEW",
    ],

    [ROLES.FACTORY_ADMIN]: [
        "FACTORY_VIEW",
        "PRODUCT_VIEW",
        "INVENTORY_VIEW",
        "INVENTORY_UPDATE",
        "STOCK_REQUEST_APPROVE",
        "DISPATCH_CREATE",
        "DASHBOARD_VIEW",
    ],

    [ROLES.BRANCH_ADMIN]: [
        "BRANCH_VIEW",
        "PRODUCT_VIEW",
        "INVENTORY_VIEW",
        "STOCK_REQUEST_CREATE",
        "BILL_CREATE",
        "DASHBOARD_VIEW",
    ],

    [ROLES.SALES_PERSON]: [
        "PRODUCT_VIEW",
        "BILL_CREATE",
        "BILL_VIEW",
        "DASHBOARD_VIEW",
    ],
};

module.exports = permissions;