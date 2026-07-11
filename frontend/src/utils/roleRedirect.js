export const redirectByRole = (role, navigate) => {


  const routes = {

    super_admin: "/app",
    factory_admin: "/app",

    branch_admin: "/app",

    

   

  

    sales_person: "/app",
    management_support: "/app",







   

    

  };


  const route =
    routes[role] || "/login";


  navigate(route);

};