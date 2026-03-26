import type { ReactNode } from 'react';
import { TableBody, TableCell, TableRow } from '@mui/material';
import type { TableCellProps } from '@mui/material';
import { NoDataRow } from './NoDataRow';

export type BodyCell<T> = {
  id: string;
  tableCellProps?: TableCellProps;
  renderCell: (item: T) => ReactNode;
};

type Props<T> = {
  columns: BodyCell<T>[];
  rows: T[];
  getRowKey: (item: T) => string | number;
  onRowClick?: (item: T) => void;
  selectedRowKey?: string | number;
};

export const TableBodyWrapper = <T,>({ columns, rows, getRowKey, onRowClick, selectedRowKey }: Props<T>) => {
  return (
    <TableBody>
      {rows.length === 0 && <NoDataRow colSpan={columns.length} />}
      {rows.map((item) => (
        <TableRow
          key={getRowKey(item)}
          hover={!!onRowClick}
          selected={getRowKey(item) === selectedRowKey}
          onClick={() => onRowClick?.(item)}
        >
          {columns.map(({ id, tableCellProps, renderCell }) => (
            <TableCell key={id} {...tableCellProps}>
              {renderCell(item)}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};
