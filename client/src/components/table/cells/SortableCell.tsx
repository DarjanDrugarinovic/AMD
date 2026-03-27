import { type Dispatch, type SetStateAction } from 'react';
import { TableSortLabel } from '@mui/material';

export type Order = 'asc' | 'desc';

type Props = {
  sortKey: string;
  label: string;
  order: Order;
  orderBy: string;
  setOrder: Dispatch<SetStateAction<Order>>;
  setOrderBy: (key: string) => void;
};

export const useRenderSortableCell = (
  order: Order,
  orderBy: string,
  setOrder: Dispatch<SetStateAction<Order>>,
  setOrderBy: (key: string) => void
) => ({
  renderSortableCell: (key: string, label: string) => (
    <SortableCell sortKey={key} label={label} order={order} orderBy={orderBy} setOrder={setOrder} setOrderBy={setOrderBy} />
  )
});

const SortableCell = ({ sortKey, label, order, orderBy, setOrder, setOrderBy }: Props) => (
  <TableSortLabel
    active={orderBy === sortKey}
    direction={orderBy === sortKey ? order : 'asc'}
    onClick={() => {
      const isAsc = orderBy === sortKey && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(sortKey);
    }}
  >
    {label}
  </TableSortLabel>
);
