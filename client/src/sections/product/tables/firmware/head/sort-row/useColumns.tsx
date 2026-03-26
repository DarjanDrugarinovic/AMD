import { useContext } from "react";
import { TableContext } from "../../TableContext";
import type { Cell, Id } from "../../TableConfig";
import { useRenderSortableCell } from "components/table/cells/SortableCell";

export const useColumns = (): Cell[] => {
  const { order, orderBy, setOrder, setOrderBy } = useContext(TableContext);
  const { renderSortableCell } = useRenderSortableCell(
    order,
    orderBy,
    setOrder,
    (key) => setOrderBy(key as Id),
  );

  const cells: Cell[] = [
    {
      id: "version",
      tableCellProps: { align: "left", sx: { width: "auto" } },
      renderCell: () => renderSortableCell("version", "Version"),
    },
    {
      id: "type",
      tableCellProps: { align: "left", sx: { width: "auto" } },
      renderCell: () => renderSortableCell("type", "Type"),
    },
    {
      id: "status",
      tableCellProps: { align: "left", sx: { width: "auto" } },
      renderCell: () => renderSortableCell("status", "Status"),
    },
    {
      id: "release_date",
      tableCellProps: { align: "left", sx: { width: "auto" } },
      renderCell: () => renderSortableCell("release_date", "Release Date"),
    },
    {
      id: "changelog",
      tableCellProps: { align: "left", sx: { width: "auto" } },
      renderCell: () => renderSortableCell("changelog", "Changelog"),
    },
  ];

  return cells;
};
