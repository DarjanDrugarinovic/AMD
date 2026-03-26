import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "./query-key";
import { getStatisticById } from "api/statistics/get-statistic-by-id/get-statistic-by-id-api";

export const useGetStatisticById = (statisticId: number | undefined) => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY, statisticId],
    queryFn: () => getStatisticById(statisticId!),
    enabled: !!statisticId,
  });

  return { data, isLoading };
};
