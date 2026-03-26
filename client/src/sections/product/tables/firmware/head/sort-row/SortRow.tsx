import { FC } from 'react';
import { TableCell, TableRow } from '@mui/material';
import { useColumns } from './useColumns';

export const TableHeadSortRow: FC = () => {
  const columns = useColumns();

  return (
    <TableRow>
      {columns.map(({ id, tableCellProps, renderCell }) => (
        <TableCell key={id} sx={{ fontWeight: 'bold' }} {...tableCellProps}>
          {renderCell()}
        </TableCell>
      ))}
    </TableRow>
  );
};
