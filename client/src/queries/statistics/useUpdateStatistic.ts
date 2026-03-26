import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "./query-key";
import { updateStatistic } from "api/statistics/update-statistic/update-statistic-api";
import { type UpdateStatistic } from "api/statistics/update-statistic/types";

export const useUpdateStatistic = () => {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync, isPending } = useMutation({
    mutationFn: ({ statisticId, statistic }: { statisticId: number; statistic: UpdateStatistic }) =>
      updateStatistic(statisticId, statistic),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
    },
  });

  return { mutate, mutateAsync, isPending };
};
