import { useContext } from "react";
import { useTypedParams } from "routes/useTypedParams";
import { useGetStatistics } from "queries/statistics/useGetStatistics";
import { TableContext } from "../../TableContext";
import { type Statistic } from "../../types/execution-history-statistic";

export const useRows = () => {
  const { firmwareId } = useTypedParams("product/:productId/firmware/:firmwareId");
  const { data, isLoading } = useGetStatistics(Number(firmwareId));
  const { order, orderBy } = useContext(TableContext);

  const rows: Statistic[] = [...data].sort((a, b) => {
    const aVal = a[orderBy as keyof Statistic];
    const bVal = b[orderBy as keyof Statistic];
    if (aVal < bVal) return order === "asc" ? -1 : 1;
    if (aVal > bVal) return order === "asc" ? 1 : -1;
    return 0;
  });

  return { rows, isLoading };
};
