import { useQuery } from "@tanstack/react-query";
import { getFoundedPersonsCount, getLastMissingPersons, getMissingPersonsCount } from "../api/adminApi";
import { QueryKeys } from "../enums";

const useAdmin = (params) => {
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


    const {
        data: lastMissingPersons,
        isLoading: isLoadingLastMissing,
        isError: isLastMissingError,
        isSuccess: isLastMissingSuccess,
        refetch: refetchLastMissingPersons,
    } = useQuery({
        queryKey: [QueryKeys.getLastMissingPersons, params],
        queryFn: () => getLastMissingPersons({ params }),
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

        lastMissingPersons,
        isLoadingLastMissing,
        isLastMissingError,
        isLastMissingSuccess,
        refetchLastMissingPersons,


    };
};

export default useAdmin;
