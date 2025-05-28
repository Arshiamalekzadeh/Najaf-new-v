import { QueryClient } from "@tanstack/react-query";
import axiosInstance from "./axios";
const defaultQueryFn = async ({ queryKey }) => {
  const [endpoint, options] = queryKey;
  const { data } = await axiosInstance({
    url: endpoint,
    method: options?.method || "GET",
    ...options,
  });
  return data;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});

export { queryClient, defaultQueryFn };