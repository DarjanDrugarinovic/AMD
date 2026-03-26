import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "./query-key";
import { getStatisticsByFirmware } from "api/statistics/get-statistics/get-statistics-api";

export const useGetStatistics = (firmwareId: number | undefined) => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY, firmwareId],
    queryFn: () => getStatisticsByFirmware(firmwareId!),
    enabled: !!firmwareId,
    initialData: [],
  });

  return { data, isLoading };
};
