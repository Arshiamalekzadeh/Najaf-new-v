export const hasPermission = (roles=[], requiredRoles) => {
  return requiredRoles.some((role) => roles.includes(role));
};
