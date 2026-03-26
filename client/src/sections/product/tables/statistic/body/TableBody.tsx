import { useColumns } from "./useColumns";
import { TableBodyWrapper } from "components/table/TableBodyWrapper";
import type { Statistic } from "../types/execution-history-statistic";
import { useRows } from "../hooks/useRows/useRows";

export const TableBody = () => {
  const { rows } = useRows();
  const columns = useColumns();

  return (
    <TableBodyWrapper
      columns={columns}
      rows={rows}
      getRowKey={(row: Statistic) => row.id}
    />
  );
};
