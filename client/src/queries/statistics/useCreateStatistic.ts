import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "./query-key";
import { createStatistic } from "api/statistics/create-statistic/create-statistic-api";
import { type CreateStatistic } from "api/statistics/create-statistic/types";

export const useCreateStatistic = () => {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync, isPending } = useMutation({
    mutationFn: (statistic: CreateStatistic) => createStatistic(statistic),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
    },
  });

  return { mutate, mutateAsync, isPending };
};
