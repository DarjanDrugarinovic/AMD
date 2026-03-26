import type { ReactNode } from "react";
import type { TableCellProps } from "@mui/material";
import type { Id } from "../TableConfig";
import type { Firmware } from "../types/execution-history-test-cycle";

type Cell = {
  id: Id;
  tableCellProps?: TableCellProps;
  renderCell: (row: Firmware) => ReactNode;
};

export const useColumns = () => {
  const cells: Cell[] = [
    {
      id: "version",
      tableCellProps: { align: "left", sx: { fontSize: 16, width: "auto" } },
      renderCell: (row) => row.version,
    },
    {
      id: "type",
      tableCellProps: { align: "left", sx: { fontSize: 16, width: "auto" } },
      renderCell: (row) => row.type,
    },
    {
      id: "status",
      tableCellProps: { align: "left", sx: { fontSize: 16, width: "auto" } },
      renderCell: (row) => row.status,
    },
    {
      id: "release_date",
      tableCellProps: { align: "left", sx: { fontSize: 16, width: "auto" } },
      renderCell: (row) => row.release_date,
    },
    {
      id: "changelog",
      tableCellProps: { align: "left", sx: { fontSize: 16, width: "auto" } },
      renderCell: (row) => row.changelog,
    },
  ];

  return cells;
};
