// import { Routes, Route } from "react-router-dom";

// import Login from "./pages/auth/Login";
// import AppLayout from "./components/layouts/AppLayout"
// import ProtectedRoute from "./routes/ProtectedRoute";
// import Dashboard from "./components/dashboard/Dashboard";

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
//         <Route index element={<Dashboard />} />
//       </Route>
//     </Routes>
//   );
// }

// export default App;   // ✅ THIS IS REQUIRED


import { Routes, Route } from "react-router-dom";

import Login from "./pages/auth/Login";
import AppLayout from "./components/layouts/AppLayout";
import ProtectedRoute from "./routes/ProtectedRoute";

import Dashboard from "./pages/dashboard/Dashboard";
import Categories from "./pages/categories/Categories";
import Product from "./pages/products/Product";

function App() {

return (
<Routes>

<Route path="/" element={<Login />} />


<Route
 path="/app"
 element={
   <ProtectedRoute>
     <AppLayout />
   </ProtectedRoute>
 }
>

<Route index element={<Dashboard />} />

<Route 
 path="categories"
 element={<Categories />}
/>


<Route
    path="products"
    element={<Product />}
/>

</Route>


</Routes>
);

}

export default App;