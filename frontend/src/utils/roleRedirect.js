export const redirectByRole = (role, navigate) => {


  const routes = {

    super_admin: "/app",

    branch_admin: "/app",

    factory_admin: "/app",

    warehouse_manager: "/app",

    purchase_manager: "/app",

    sales_person: "/app",

    online_manager: "/app",

    accounts_manager: "/app",

    delivery_manager: "/app",

    customer_support: "/app",

  };


  const route =
    routes[role] || "/login";


  navigate(route);

};