const permissions = require("../config/permissions");


const checkPermission = (permission)=>{

return (req,res,next)=>{


const userRole = req.user.role;


const allowed =
permissions[userRole]?.includes(permission);



if(!allowed){

return res.status(403).json({

success:false,

message:"Permission denied"

});

}


next();


};

};


module.exports = checkPermission;