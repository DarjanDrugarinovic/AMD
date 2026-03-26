import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "./query-key";
import { getProductById } from "api/products/get-product-by-id/get-product-by-id-api";

export const useGetProductById = (productId: number | undefined) => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY, productId],
    queryFn: () => getProductById(productId!),
    enabled: !!productId,
  });

  return { data, isLoading };
};
