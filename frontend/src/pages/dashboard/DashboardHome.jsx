import { useSelector } from "react-redux";

import SuperAdminDashboard from "./SuperAdminDashboard";
import FactoryAdminDashboard from "./FactoryAdminDashboard";
import BranchAdminDashboard from "./BranchAdminDashboard";

import DashboardHome from "./DashboardHome";

const Dashboard = () => {

  const user = useSelector((state) => state.auth.user);

  switch (user?.role) {

    case "super_admin":
      return <SuperAdminDashboard />;

    case "factory_admin":
      return <FactoryAdminDashboard />;

    case "branch_admin":
      return <BranchAdminDashboard />;

    default:
      return <DashboardHome />;
  }
};

export default Dashboard;