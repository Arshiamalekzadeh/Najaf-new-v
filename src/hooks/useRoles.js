// hooks/useRoleChecks.js

import useAuthStore from "../store/useAuthStore";

const roleSets = {
  isAdmin: ["administrator", "manager", "operator", "viewer"],
  isManager: ["manager", "operator", "viewer"],
  isOperator: ["operator", "viewer"],
  isViewer: ["viewer"],
};

const hasExactRoles = (userRoles, requiredRoles) => {
  return (
    userRoles.length === requiredRoles.length &&
    requiredRoles.every((role) => userRoles.includes(role))
  );
};

const useRoleChecks = () => {
  const { roles } = useAuthStore();
  return {
    isAdmin: hasExactRoles(roles || [], roleSets.isAdmin),
    isManager: hasExactRoles(roles || [], roleSets.isManager),
    isOperator: hasExactRoles(roles || [], roleSets.isOperator),
    isViewer: hasExactRoles(roles || [], roleSets.isViewer),
  };
};

export default useRoleChecks;
