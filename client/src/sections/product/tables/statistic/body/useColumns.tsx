import type { ReactNode } from "react";
import type { TableCellProps } from "@mui/material";
import type { Id } from "../TableConfig";
import type { Statistic } from "../types/execution-history-statistic";

type Cell = {
  id: Id;
  tableCellProps?: TableCellProps;
  renderCell: (row: Statistic) => ReactNode;
};

export const useColumns = () => {
  const cells: Cell[] = [
    {
      id: "metric",
      tableCellProps: { align: "left", sx: { fontSize: 16, width: "auto" } },
      renderCell: (row) => row.metric,
    },
    {
      id: "value",
      tableCellProps: { align: "left", sx: { fontSize: 16, width: "auto" } },
      renderCell: (row) => row.value,
    },
    {
      id: "unit",
      tableCellProps: { align: "left", sx: { fontSize: 16, width: "auto" } },
      renderCell: (row) => row.unit,
    },
    {
      id: "recorded_at",
      tableCellProps: { align: "left", sx: { fontSize: 16, width: "auto" } },
      renderCell: (row) => row.recorded_at,
    },
    {
      id: "firmware_id",
      tableCellProps: { align: "left", sx: { fontSize: 16, width: "auto" } },
      renderCell: (row) => row.firmware_id,
    },
  ];

  return cells;
};
