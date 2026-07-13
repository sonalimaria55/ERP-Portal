// const permissions = require("../config/permissions");

// const authorize = (...requiredPermissions) => {  //...roles
//   return (req, res, next) => {
//     try {
//       if (!req.user) {
//         return res.status(401).json({
//           success: false,
//           message: "Authentication required",
//         });
//       }

//       const role = req.user.role;

//       const rolePermissions = permissions[role] || [];

//       const hasAccess = requiredPermissions.every((permission) =>
//         rolePermissions.includes(permission)
//       );

//       if (!hasAccess) {
//         return res.status(403).json({
//           success: false,
//           message: "You do not have permission to perform this action.",
//         });
//       }

//       next();
//     } catch (error) {
//       return res.status(500).json({
//         success: false,
//         message: error.message,
//       });
//     }
//   };
// };

// module.exports = authorize;

const authorize = (...allowedRoles) => {

  return (req, res, next) => {

    try {

      if (!req.user) {

        return res.status(401).json({
          success:false,
          message:"Authentication required",
        });

      }


      const userRole = req.user.role;


      if (!allowedRoles.includes(userRole)) {

        return res.status(403).json({
          success:false,
          message:"You do not have permission to perform this action.",
        });

      }


      next();


    } catch(error) {

      return res.status(500).json({
        success:false,
        message:error.message,
      });

    }

  };

};


module.exports = authorize;