import { useTheme } from '@mui/material';
import { Separator } from 'react-resizable-panels';

type Props = {
  orientation?: 'horizontal' | 'vertical';
};

export default function PanelSeparator({ orientation = 'vertical' }: Props) {
  const theme = useTheme();

  const isVertical = orientation === 'vertical';

  return (
    <Separator
      style={{
        width: isVertical ? '3px' : undefined,
        height: isVertical ? undefined : '3px',
        margin: isVertical ? '0 14px' : '14px 0',
        cursor: isVertical ? 'col-resize' : 'row-resize',
        background: theme.palette.primary.main,
        outline: 'none'
      }}
    />
  );
}
