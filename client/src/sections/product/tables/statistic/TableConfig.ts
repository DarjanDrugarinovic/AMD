import { type ReactNode } from "react";
import { type TableCellProps } from "@mui/material";
import { type Statistic } from "./types/execution-history-statistic";

export type Order = "asc" | "desc";

export type Id = keyof Statistic;

export type Cell = {
  id: Id;
  tableCellProps?: TableCellProps;
  renderCell: () => ReactNode;
};
