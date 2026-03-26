import { TableCell, TableRow } from '@mui/material';

type Props = {
  colSpan: number;
};

export const NoDataRow = ({ colSpan }: Props) => {
  return (
    <TableRow>
      <TableCell colSpan={colSpan} align="center">
        NO DATA
      </TableCell>
    </TableRow>
  );
};
