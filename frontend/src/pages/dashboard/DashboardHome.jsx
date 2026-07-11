// import { useSelector } from "react-redux";

// import SuperAdminDashboard from "./SuperAdminDashboard";
// import FactoryAdminDashboard from "./FactoryAdminDashboard";
// import BranchAdminDashboard from "./BranchAdminDashboard";

// import DashboardHome from "./DashboardHome";

// const Dashboard = () => {

//   const user = useSelector((state) => state.auth.user);

//   switch (user?.role) {

//     case "super_admin":
//       return <SuperAdminDashboard />;

//     case "factory_admin":
//       return <FactoryAdminDashboard />;

//     case "branch_admin":
//       return <BranchAdminDashboard />;

//     default:
//       return <DashboardHome />;
//   }
// };

// export default Dashboard;
import { useSelector } from "react-redux";

import DashboardHome from "./DashboardHome";
import SuperAdminDashboard from "./SuperAdminDashboard";
import SupportDashboard from "./SupportDashboard";
import FactoryAdminDashboard from "./FactoryAdminDashboard";
import BranchAdminDashboard from "./BranchAdminDashboard";
import SalesDashboard from "./SalesDashboard";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);

  switch (user?.role) {
    case "super_admin":
      return <SuperAdminDashboard />;

    case "management_support":
      return <SupportDashboard />;

    case "factory_admin":
      return <FactoryAdminDashboard />;

    case "branch_admin":
      return <BranchAdminDashboard />;

    case "sales_person":
      return <SalesDashboard />;

    default:
      return <DashboardHome />;
  }
};

export default Dashboard;