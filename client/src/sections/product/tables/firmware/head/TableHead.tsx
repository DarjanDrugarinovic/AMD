import { FC } from 'react';
import { TableHead as TableHeadMui } from '@mui/material';
import { TableHeadSortRow } from './sort-row/SortRow';

type TableProps = {};

export const TableHead: FC<TableProps> = () => {
  return (
    <TableHeadMui>
      <TableHeadSortRow />
    </TableHeadMui>
  );
};
