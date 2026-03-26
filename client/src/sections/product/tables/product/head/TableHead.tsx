import { TableHead as TableHeadMui } from "@mui/material";
import { TableHeadSortRow } from "./sort-row/SortRow";

export const TableHead = () => {
  return (
    <TableHeadMui>
      <TableHeadSortRow />
    </TableHeadMui>
  );
};
