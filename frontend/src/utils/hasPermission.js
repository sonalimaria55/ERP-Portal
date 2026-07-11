import { permissions } from "../config/permissions";

export const hasPermission = (role, permission) => {

    if (!role) return false;

    const rolePermissions = permissions[role] || [];

    return rolePermissions.includes(permission);
};