import { useQuery } from "@tanstack/react-query";

import { getAllRoleAccessible, getAllRoles, getRoleAccessible } from "../api/accessibleApi";
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

  // [02] - Get All Role Accessibles
  const {
    data: allRoleAccessibles,
    isLoading: isLoadingRoleAccessibles,
    isError: isRoleAccessiblesError,
    isSuccess: isRoleAccessiblesSuccess,
    refetch: refetchRoleAccessibles,
  } = useQuery({
    queryKey: [QueryKeys.getAllRoleAccessible],
    queryFn: getAllRoleAccessible,
    enabled: false,
  });

  // [03] - Details Roles Accessible hook
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

    allRoleAccessibles,
    isLoadingRoleAccessibles,
    isRoleAccessiblesError,
    isRoleAccessiblesSuccess,
    refetchRoleAccessibles,

    getRoleAccessibleDetial,
  };
};
