import type { ReactNode } from "react";
import type { TableCellProps } from "@mui/material";
import type { Id } from "../TableConfig";
import type { Product } from "../types/product";

type Cell = {
  id: Id;
  tableCellProps?: TableCellProps;
  renderCell: (row: Product) => ReactNode;
};

export const useColumns = () => {
  const cells: Cell[] = [
    {
      id: "name",
      tableCellProps: { align: "left", sx: { fontSize: 16, width: "auto" } },
      renderCell: (row) => row.name,
    },
    {
      id: "family",
      tableCellProps: { align: "left", sx: { fontSize: 16, width: "auto" } },
      renderCell: (row) => row.family,
    },
    {
      id: "category",
      tableCellProps: { align: "left", sx: { fontSize: 16, width: "auto" } },
      renderCell: (row) => row.category,
    },
    {
      id: "socket",
      tableCellProps: { align: "left", sx: { fontSize: 16, width: "auto" } },
      renderCell: (row) => row.socket,
    },
    {
      id: "release_date",
      tableCellProps: { align: "left", sx: { fontSize: 16, width: "auto" } },
      renderCell: (row) => row.release_date,
    },
    {
      id: "status",
      tableCellProps: { align: "left", sx: { fontSize: 16, width: "auto" } },
      renderCell: (row) => row.status,
    },
  ];

  return cells;
};
