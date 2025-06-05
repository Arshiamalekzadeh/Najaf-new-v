import { useQuery } from "@tanstack/react-query";

import { getAllRoles } from "../api/accessibleApi";
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

  return {
    roles,
    isLoadingRoles,
    isRolesError,
    isRolesSuccess,
    refetchRoles,
  };
};
