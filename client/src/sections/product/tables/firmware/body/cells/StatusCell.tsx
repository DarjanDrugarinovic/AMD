import { Typography } from '@mui/material';
import { ExecutionResult } from 'enums/ExecutionResult';
import { useStatusSx } from 'sections/main/reports-history/execution-details/useStatusSx';

type Props = {
  status: ExecutionResult;
};

export const useRenderStatusCell = () => {
  const getStatusSx = useStatusSx();
  return {
    renderStatusCell: (status: ExecutionResult) => <StatusCell status={status} getStatusSx={getStatusSx} />
  };
};

type StatusCellProps = Props & {
  getStatusSx: ReturnType<typeof useStatusSx>;
};

const StatusCell = ({ status, getStatusSx }: StatusCellProps) => <Typography sx={getStatusSx(status)}>{status}</Typography>;

export default StatusCell;
