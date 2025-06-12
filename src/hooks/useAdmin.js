import { useQuery } from "@tanstack/react-query";
import { getFoundedPersonsCount, getMissingPersonsCount } from "../api/adminApi";
import { QueryKeys } from "../enums";

const useAdmin = () => {
    const {
        data: missingPersonsCount,
        isLoading: isLoadingMissingCount,
        isError: isMissingCountError,
        isSuccess: isMissingCountSuccess,
        refetch: refetchMissingPersonsCount,
    } = useQuery({
        queryKey: [QueryKeys.getMissingPersonsCount],
        queryFn: getMissingPersonsCount,
        enabled: false,
    });
    const {
        data: foundedPersonsCount,
        isLoading: isLoadingFoundedCount,
        isError: isFoundedCountError,
        isSuccess: isFoundedCountSuccess,
        refetch: refetchFoundedPersonsCount,
    } = useQuery({
        queryKey: [QueryKeys.getFoundedPersonsCount],
        queryFn: getFoundedPersonsCount,
        enabled: false,
    });

    return {
        missingPersonsCount,
        isLoadingMissingCount,
        isMissingCountError,
        isMissingCountSuccess,
        refetchMissingPersonsCount,

        foundedPersonsCount,
        isLoadingFoundedCount,
        isFoundedCountError,
        isFoundedCountSuccess,
        refetchFoundedPersonsCount,


    };
};

export default useAdmin;
