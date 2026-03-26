import { type ReactNode } from "react";
import { type TableCellProps } from "@mui/material";
import { type Product } from "./types/product";

export type Order = "asc" | "desc";

export type Id = keyof Product;

export type Cell = {
  id: Id;
  tableCellProps?: TableCellProps;
  renderCell: () => ReactNode;
};
