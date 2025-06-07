import { useQuery } from "@tanstack/react-query";

import { getAllRoles, getRoleAccessible } from "../api/accessibleApi";
import { QueryKeys } from "../enums";

export const useAccessible = () => {
  // [0] - Get All Roles
  const {
    data: roles,
    isLoading: isLoadingRoles,
    isError: isRolesError,
    isSuccess: isRolesSuccess,
    refetch: refetchRoles,
  } = useQuery({
    queryKey: [QueryKeys.getAllRoles],
    queryFn: getAllRoles,
    enabled: false,
  });

    // [02] - Details Roles hook
  const getRoleAccessibleDetial = (RoleId) => {
    return useQuery({
      queryKey: [QueryKeys.getAllRoles, RoleId],
      queryFn: () => getRoleAccessible(RoleId),
      enabled: !!RoleId,
    });
  };
  

  return {
    roles,
    isLoadingRoles,
    isRolesError,
    isRolesSuccess,
    refetchRoles,

    getRoleAccessibleDetial,
  };
};
