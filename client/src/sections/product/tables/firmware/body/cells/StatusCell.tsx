import { Typography } from '@mui/material';
import { type SxProps } from '@mui/material';

type FirmwareStatus = 'stable' | 'beta' | 'deprecated';

type Props = {
  status: FirmwareStatus;
};

const statusSx: Record<FirmwareStatus, SxProps> = {
  stable:     { color: 'success.main', fontWeight: 'bold' },
  beta:       { color: 'warning.main', fontWeight: 'bold' },
  deprecated: { color: 'text.disabled' },
};

export const useRenderStatusCell = () => ({
  renderStatusCell: (status: FirmwareStatus) => <StatusCell status={status} />,
});

const StatusCell = ({ status }: Props) => (
  <Typography sx={statusSx[status]}>{status}</Typography>
);

export default StatusCell;
