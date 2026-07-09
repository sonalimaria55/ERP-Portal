// // import { Routes, Route } from "react-router-dom";

// // import Login from "./pages/auth/Login";
// // import AppLayout from "./components/layouts/AppLayout"
// // import ProtectedRoute from "./routes/ProtectedRoute";
// // import Dashboard from "./components/dashboard/Dashboard";

// // function App() {
// //   return (
// //     <Routes>
// //       <Route path="/" element={<Login />} />

// //       <Route
// //         path="/app"
// //         element={
// //           <ProtectedRoute>
// //             <AppLayout />
// //           </ProtectedRoute>
// //         }
// //       >
// //         <Route index element={<Dashboard />} />
// //       </Route>
// //     </Routes>
// //   );
// // }

// // export default App;   // ✅ THIS IS REQUIRED


// // import { Routes, Route } from "react-router-dom";

// // import Login from "./pages/auth/Login";
// // import AppLayout from "./components/layouts/AppLayout";
// // import ProtectedRoute from "./routes/ProtectedRoute";

// // import Dashboard from "./pages/dashboard/Dashboard";
// // import Categories from "./pages/categories/Categories";
// // import Product from "./pages/products/Product";

// // function App() {

// // return (
// // <Routes>

// // <Route path="/" element={<Login />} />


// // <Route
// //  path="/app"
// //  element={
// //    <ProtectedRoute>
// //      <AppLayout />
// //    </ProtectedRoute>
// //  }
// // >

// // <Route index element={<Dashboard />} />

// // <Route 
// //  path="categories"
// //  element={<Categories />}
// // />


// // <Route
// //     path="products"
// //     element={<Product />}
// // />

// // </Route>


// // </Routes>
// // );

// // }

// // export default App;

// import { Routes, Route } from "react-router-dom";

// import Login from "./pages/auth/Login";
// import AppLayout from "./components/layouts/AppLayout";
// import ProtectedRoute from "./routes/ProtectedRoute";

// import Dashboard from "./pages/dashboard/Dashboard";
// import Categories from "./pages/categories/Categories";
// import Product from "./pages/products/Product";

// // Temporary pages
// import Inventory from "./pages/inventory/Inventory";
// import Dispatch from "./pages/dispatch/Dispatch";
// import Sales from "./pages/sales/Sales";
// import Users from "./pages/users/Users";
// import Branches from "./pages/branches/Branches";
// import Reports from "./pages/reports/Reports";
// import Settings from "./pages/settings/Settings";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Login />} />

//       <Route
//         path="/app"
//         element={
//           <ProtectedRoute>
//             <AppLayout />
//           </ProtectedRoute>
//         }
//       >



//         <Route
//   path="/super-admin/dashboard"
//   element={
//     <ProtectedRoute>
//       <SuperAdminDashboard />
//     </ProtectedRoute>
//   }
// />
//         <Route index element={<Dashboard />} />

//         <Route path="inventory" element={<Inventory />} />
//         <Route path="categories" element={<Categories />} />
//         <Route path="products" element={<Product />} />
//         <Route path="dispatch" element={<Dispatch />} />
//         <Route path="sales" element={<Sales />} />
//         <Route path="users" element={<Users />} />
//         <Route path="branches" element={<Branches />} />
//         <Route path="reports" element={<Reports />} />
//         <Route path="settings" element={<Settings />} />
//       </Route>
//     </Routes>
//   );
// }

// export default App;
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/auth/Login";

import AppLayout from "./components/layouts/AppLayout";
import ProtectedRoute from "./routes/ProtectedRoute";

import Dashboard from "./pages/dashboard/DashboardHome";

import Categories from "./pages/categories/Categories";
import Product from "./pages/products/Product";

import Inventory from "./pages/inventory/Inventory";
import Dispatch from "./pages/dispatch/Dispatch";
import Sales from "./pages/sales/Sales";

import Users from "./pages/users/Users";
import Branches from "./pages/branches/Branches";

import Reports from "./pages/reports/Reports";
import Settings from "./pages/settings/Settings";
import Register from "./pages/auth/Register";

import Factories from "./pages/factories/Factories";

function App() {


  return (

    <Routes>


      {/* Default redirect */}

      <Route
        path="/"
        element={
          <Navigate 
            to="/login" 
            replace 
          />
        }
      />



      {/* Login */}

      <Route
        path="/login"
        element={
          <Login />
        }
      />
      {/* Register */}

<Route
  path="/register"
  element={
    <Register />
  }
/>




      {/* ERP Application */}

      <Route
        path="/app"
        element={
          <ProtectedRoute>

            <AppLayout />

          </ProtectedRoute>
        }
      >



        {/* Dashboard */}
<Route
  index
  element={
    <ProtectedRoute
      allowedRoles={[
        "super_admin",
        "factory_admin",
        "branch_admin",
        "warehouse_manager",
        "purchase_manager",
        "sales_person",
        "online_manager",
        "accounts_manager",
        "delivery_manager",
        "customer_support",
      ]}
    >
      <Dashboard />
    </ProtectedRoute>
  }
/>



        {/* Products */}
<Route
  path="products"
  element={
    <ProtectedRoute
      allowedRoles={[
        "super_admin",
        "factory_admin",
        "branch_admin",
        "sales_person",
        "warehouse_manager",
        "online_manager",
      ]}
    >
      <Product />
    </ProtectedRoute>
  }
/>



        {/* Categories */}

     <Route
  path="categories"
  element={
    <ProtectedRoute
      allowedRoles={[
        "super_admin",
        "factory_admin",
        "branch_admin",
      ]}
    >
      <Categories />
    </ProtectedRoute>
  }
/>


        {/* Inventory */}
<Route
  path="inventory"
  element={
    <ProtectedRoute
      allowedRoles={[
        "super_admin",
        "factory_admin",
        "branch_admin",
        "warehouse_manager",
      ]}
    >
      <Inventory />
    </ProtectedRoute>
  }
/>



        {/* Sales */}

     <Route
  path="sales"
  element={
    <ProtectedRoute
      allowedRoles={[
        "super_admin",
        "branch_admin",
        "sales_person",
        "online_manager",
      ]}
    >
      <Sales />
    </ProtectedRoute>
  }
/>



        {/* Dispatch */}
<Route
  path="dispatch"
  element={
    <ProtectedRoute
      allowedRoles={[
        "super_admin",
        "branch_admin",
        "warehouse_manager",
        "delivery_manager",
      ]}
    >
      <Dispatch />
    </ProtectedRoute>
  }
/>



        {/* Users */}
<Route
  path="users"
  element={
    <ProtectedRoute
      allowedRoles={[
        "super_admin",
        "factory_admin",
        "branch_admin",
      ]}
    >
      <Users />
    </ProtectedRoute>
  }
/>

<Route
  path="factories"
  element={
    <ProtectedRoute
      allowedRoles={[
        "super_admin",
      ]}
    >
      <Factories />
    </ProtectedRoute>
  }
/>



        {/* Branches */}
<Route
  path="branches"
  element={
    <ProtectedRoute
      allowedRoles={[
        "super_admin",
        "factory_admin",
      ]}
    >
      <Branches />
    </ProtectedRoute>
  }
/>



        {/* Reports */}

     <Route
  path="reports"
  element={
    <ProtectedRoute
      allowedRoles={[
        "super_admin",
        "factory_admin",
        "branch_admin",
        "accounts_manager",
      ]}
    >
      <Reports />
    </ProtectedRoute>
  }
/>



        {/* Settings */}
<Route
  path="settings"
  element={
    <ProtectedRoute
      allowedRoles={[
        "super_admin",
      ]}
    >
      <Settings />
    </ProtectedRoute>
  }
/>
</Route>  {/* CLOSE /app HERE */}

      {/* Unknown URL */}

      <Route
        path="*"
        element={
          <Navigate 
            to="/login" 
            replace 
          />
        }
      />


    </Routes>

  );

}


export default App;