import {
  Select as MuiSelect,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

interface IOption {
  id: any;
  name: string;
}

interface SelectProps {
  label: string;
  placeholder?: string;
  options: IOption[];
  value?: any;
  onChange?: any;
  onSelect?: any;
  defaultValue?: any;
  style?: any;
  sx?: any;
  variant?: 'filled' | 'outlined' | 'standard'
}

export const Select = (props: SelectProps) => {
  const { label, options, value, style, onChange, onSelect, defaultValue, sx, variant } =
    props;

  return (
    <FormControl sx={{ width: "100%", ...sx }} size="small" style={style}>
      <InputLabel id="label">{label}</InputLabel>
      <MuiSelect
        label={label}
        labelId="label"
        placeholder={label}
        value={value}
        onChange={onChange}
        onSelect={onSelect}
        defaultValue={defaultValue}
        variant={variant}
      >
        <MenuItem value="" style={{ height: 33 }}></MenuItem>
        {options.map(({ id, name }) => {
          return (
            <MenuItem
              style={{ fontFamily: "Inter", fontSize: 14 }}
              key={id}
              value={id}
            >
              {name}
            </MenuItem>
          );
        })}
      </MuiSelect>
    </FormControl>
  );
};

Select.defaultProps = {
  label: "",
  placeholder: "",
  defaultValue: "",
};
