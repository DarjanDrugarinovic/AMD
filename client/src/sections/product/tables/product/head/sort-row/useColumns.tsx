import { useContext } from 'react';
import { TableContext } from '../../TableContext';
import type { Cell, Id } from '../../TableConfig';
import { useRenderSortableCell } from 'components/table/cells/SortableCell';

export const useColumns = (): Cell[] => {
  const { order, orderBy, setOrder, setOrderBy } = useContext(TableContext);
  const { renderSortableCell } = useRenderSortableCell(order, orderBy, setOrder, (key) => setOrderBy(key as Id));

  const cells: Cell[] = [
    {
      id: 'name',
      tableCellProps: { align: 'left', sx: { width: 'auto' } },
      renderCell: () => renderSortableCell('name', 'Name'),
    },
    {
      id: 'family',
      tableCellProps: { align: 'left', sx: { width: 'auto' } },
      renderCell: () => renderSortableCell('family', 'Family'),
    },
    {
      id: 'category',
      tableCellProps: { align: 'left', sx: { width: 'auto' } },
      renderCell: () => renderSortableCell('category', 'Category'),
    },
    {
      id: 'socket',
      tableCellProps: { align: 'left', sx: { width: 'auto' } },
      renderCell: () => renderSortableCell('socket', 'Socket'),
    },
    {
      id: 'release_date',
      tableCellProps: { align: 'left', sx: { width: 'auto' } },
      renderCell: () => renderSortableCell('release_date', 'Release Date'),
    },
    {
      id: 'status',
      tableCellProps: { align: 'left', sx: { width: 'auto' } },
      renderCell: () => renderSortableCell('status', 'Status'),
    },
  ];

  return cells;
};
