import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { type SelectChangeEvent } from '@mui/material/Select';

type Item = {
  id: string | number;
  label: string;
  value: string;
};

type Props = {
  value: string[];
  onChange: (value: string[]) => void;
  items: Item[];
  placeholder?: string;
};

export const useFilterMultiSelectCell = (value: string[], onChange: (value: string[]) => void, items: Item[]) => ({
  renderFilterMultiSelectCell: (placeholder?: string) => (
    <FilterMultiSelectCell value={value} onChange={onChange} items={items} placeholder={placeholder} />
  )
});

const FilterMultiSelectCell = ({ value, onChange, items, placeholder = 'Select...' }: Props) => {
  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const v = event.target.value;
    onChange(typeof v === 'string' ? v.split(',') : v);
  };

  return (
    <FormControl sx={{ width: 200, height: 32 }}>
      <Select
        fullWidth
        multiple
        displayEmpty
        value={value}
        onChange={handleChange}
        renderValue={(selected) => {
          if (selected.length === 0) return <span style={{ color: '#aaa' }}>{placeholder}</span>;
          return selected.join(', ');
        }}
        input={<OutlinedInput sx={{ height: 32 }} />}
      >
        {items.map(({ id, label, value: itemValue }) => (
          <MenuItem key={id} value={itemValue}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
