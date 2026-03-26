import { ChangeEvent } from 'react';
import { OutlinedInput } from '@mui/material';

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export const useFilterTextCell = (value: string, onChange: (value: string) => void) => ({
  renderFilterTextCell: (placeholder?: string) => <FilterTextCell value={value} onChange={onChange} placeholder={placeholder} />
});

const FilterTextCell = ({ value, onChange, placeholder }: Props) => (
  <OutlinedInput
    placeholder={placeholder}
    value={value}
    onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
    sx={{ width: 140, height: 32 }}
  />
);
