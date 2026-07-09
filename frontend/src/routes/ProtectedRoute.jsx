// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";


// const ProtectedRoute = ({ children, allowedRoles }) => {


//   const { token, user } = useSelector(
//     (state) => state.auth
//   );


//   // Not logged in
//   if (!token) {

//     return (
//       <Navigate 
//         to="/login" 
//         replace 
//       />
//     );

//   }


//   // Role checking (future ERP ready)
//   if (
//     allowedRoles &&
//     !allowedRoles.includes(user?.role)
//   ) {

//     return (
//       <Navigate
//         to="/dashboard"
//         replace
//       />
//     );

//   }


//   return children;

// };


// export default ProtectedRoute;


import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


const ProtectedRoute = ({ children, allowedRoles }) => {


  const { token, user } = useSelector(
    (state) => state.auth
  );



  // Not logged in
  if (!token) {

    return (
      <Navigate
        to="/login"
        replace
      />
    );

  }




  // Role checking
  if (
    allowedRoles &&
    !allowedRoles.includes(user?.role)
  ) {

    return (
      <Navigate
        to="/app"
        replace
      />
    );

  }



  return children;


};


export default ProtectedRoute;