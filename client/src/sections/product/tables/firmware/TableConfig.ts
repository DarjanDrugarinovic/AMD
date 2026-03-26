import type { ReactNode } from "react";
import type { TableCellProps } from "@mui/material";
import type { Firmware } from "./types/execution-history-test-cycle";

export type Order = "asc" | "desc";

export type Id = keyof Firmware;

export type Cell = {
  id: Id;
  tableCellProps?: TableCellProps;
  renderCell: () => ReactNode;
};
