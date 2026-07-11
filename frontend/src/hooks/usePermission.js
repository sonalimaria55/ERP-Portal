import { useSelector } from "react-redux";
import { hasPermission } from "../utils/hasPermission";

const usePermission = () => {

    const { user } = useSelector((state) => state.auth);

    const can = (permission) => {
        return hasPermission(user?.role, permission);
    };

    return { can };
};

export default usePermission;