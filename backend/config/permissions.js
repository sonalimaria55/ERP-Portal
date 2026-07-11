// const permissions = {

//   super_admin: [
//     "MANAGE_USERS",
//     "MANAGE_ROLES",
//     "MANAGE_FACTORIES",
//     "MANAGE_BRANCHES",
//     "MANAGE_COUNTERS",
//     "MANAGE_PRODUCTS",
//     "MANAGE_INVENTORY",
//     "MANAGE_STOCK_REQUESTS",
//     "CREATE_BILL"
//   ],


//   management_support: [
//     "CREATE_EMPLOYEE",
//     "MANAGE_EMPLOYEES",
//     "CREATE_FACTORY",
//     "CREATE_BRANCH",
//     "CREATE_COUNTER",
//     "MANAGE_MASTER_DATA"
//   ],


//   factory_admin: [
//     "VIEW_FACTORY_STOCK",
//     "APPROVE_STOCK_REQUEST",
//     "CREATE_DISPATCH",
//     "MANAGE_FACTORY_INVENTORY"
//   ],


//   branch_admin: [
//     "VIEW_BRANCH_STOCK",
//     "CREATE_STOCK_REQUEST",
//     "RECEIVE_STOCK",
//     "MANAGE_BRANCH_OPERATIONS"
//   ],


//   sales_person: [
//     "VIEW_PRODUCTS",
//     "CREATE_BILL",
//     "VIEW_OWN_SALES"
//   ]

// };


// module.exports = permissions;
const permissions = {
  // ===========================
  // SUPER ADMIN
  // ===========================
  super_admin: [

    // Users
    "USER_CREATE",
    "USER_VIEW",
    "USER_UPDATE",
    "USER_DELETE",

    // Roles
    "ROLE_CREATE",
    "ROLE_VIEW",
    "ROLE_UPDATE",
    "ROLE_DELETE",

    // Factories
    "FACTORY_CREATE",
    "FACTORY_VIEW",
    "FACTORY_UPDATE",
    "FACTORY_DELETE",

    // Branches
    "BRANCH_CREATE",
    "BRANCH_VIEW",
    "BRANCH_UPDATE",
    "BRANCH_DELETE",

    // Counters
    "COUNTER_CREATE",
    "COUNTER_VIEW",
    "COUNTER_UPDATE",
    "COUNTER_DELETE",

    // Employees
    "EMPLOYEE_CREATE",
    "EMPLOYEE_VIEW",
    "EMPLOYEE_UPDATE",
    "EMPLOYEE_DELETE",

    // Categories
    "CATEGORY_CREATE",
    "CATEGORY_VIEW",
    "CATEGORY_UPDATE",
    "CATEGORY_DELETE",

    // Products
    "PRODUCT_CREATE",
    "PRODUCT_VIEW",
    "PRODUCT_UPDATE",
    "PRODUCT_DELETE",

    // Inventory
    "INVENTORY_VIEW",
    "INVENTORY_UPDATE",

    // Stock Requests
    "STOCK_REQUEST_CREATE",
    "STOCK_REQUEST_VIEW",
    "STOCK_REQUEST_APPROVE",

    // Dispatch
    "DISPATCH_CREATE",
    "DISPATCH_VIEW",

    // Billing
    "BILL_CREATE",
    "BILL_VIEW",
    "BILL_CANCEL",

    // Reports
    "REPORT_VIEW",

    // Dashboard
    "DASHBOARD_VIEW",
  ],

  // ===========================
  // MANAGEMENT SUPPORT
  // ===========================
  management_support: [

    // Users
    "USER_CREATE",
    "USER_VIEW",
    "USER_UPDATE",

    // Employees
    "EMPLOYEE_CREATE",
    "EMPLOYEE_VIEW",
    "EMPLOYEE_UPDATE",

    // Factories
    "FACTORY_CREATE",
    "FACTORY_VIEW",
    "FACTORY_UPDATE",

    // Branches
    "BRANCH_CREATE",
    "BRANCH_VIEW",
    "BRANCH_UPDATE",

    // Counters
    "COUNTER_CREATE",
    "COUNTER_VIEW",
    "COUNTER_UPDATE",

    // Categories
    "CATEGORY_CREATE",
    "CATEGORY_VIEW",
    "CATEGORY_UPDATE",

    // Products
    "PRODUCT_CREATE",
    "PRODUCT_VIEW",
    "PRODUCT_UPDATE",

    // Reports
    "REPORT_VIEW",

    // Dashboard
    "DASHBOARD_VIEW",
  ],

  // ===========================
  // FACTORY ADMIN
  // ===========================
  factory_admin: [

    "FACTORY_VIEW",

    "PRODUCT_VIEW",

    "CATEGORY_VIEW",

    "INVENTORY_VIEW",
    "INVENTORY_UPDATE",

    "STOCK_REQUEST_VIEW",
    "STOCK_REQUEST_APPROVE",

    "DISPATCH_CREATE",
    "DISPATCH_VIEW",

    "DASHBOARD_VIEW",
  ],

  // ===========================
  // BRANCH ADMIN
  // ===========================
  branch_admin: [

    "BRANCH_VIEW",

    "PRODUCT_VIEW",

    "CATEGORY_VIEW",

    "INVENTORY_VIEW",

    "STOCK_REQUEST_CREATE",
    "STOCK_REQUEST_VIEW",

    "DISPATCH_VIEW",

    "BILL_CREATE",
    "BILL_VIEW",

    "DASHBOARD_VIEW",
  ],

  // ===========================
  // SALES PERSON
  // ===========================
  sales_person: [

    "PRODUCT_VIEW",

    "CATEGORY_VIEW",

    "BILL_CREATE",
    "BILL_VIEW",

    "DASHBOARD_VIEW",
  ],
};

module.exports = permissions;