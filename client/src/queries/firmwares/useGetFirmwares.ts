import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "./query-key";
import { getFirmwares } from "api/firmwares/get-firmwares/get-firmwares-api";

export const useGetFirmwares = (productId: number | undefined) => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY, productId],
    queryFn: () => getFirmwares(productId!),
    enabled: !!productId,
    initialData: [],
  });

  return { data, isLoading };
};
