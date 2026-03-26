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
      id: "metric",
      tableCellProps: { align: "left", sx: { width: "auto" } },
      renderCell: () => renderSortableCell("metric", "Metric"),
    },
    {
      id: "value",
      tableCellProps: { align: "left", sx: { width: "auto" } },
      renderCell: () => renderSortableCell("value", "Value"),
    },
    {
      id: "unit",
      tableCellProps: { align: "left", sx: { width: "auto" } },
      renderCell: () => renderSortableCell("unit", "Unit"),
    },
    {
      id: "recorded_at",
      tableCellProps: { align: "left", sx: { width: "auto" } },
      renderCell: () => renderSortableCell("recorded_at", "Recorded At"),
    },
    {
      id: "firmware_id",
      tableCellProps: { align: "left", sx: { width: "auto" } },
      renderCell: () => renderSortableCell("firmware_id", "Firmware ID"),
    },
  ];

  return cells;
};
