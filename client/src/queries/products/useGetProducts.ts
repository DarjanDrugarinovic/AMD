import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "./query-key";
import { getProducts } from "api/products/get-products/get-products-api";

export const useGetProducts = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => getProducts(),
    initialData: [],
  });

  return { data, isLoading };
};
