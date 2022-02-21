import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TextField } from "@mui/material";
import { get as _get } from "lodash";

interface DatePickerProps {
  inputFormat?: string;
  style?: any;
  label?: string;
}

export const DatePicker = (props: DatePickerProps) => {
  const { label, inputFormat } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileDatePicker
        label={label}
        inputFormat={inputFormat}
        cancelText="Cancelar"
        okText="Ok"
        onChange={(teste: any) => console.log(teste)}
        value={undefined}
        renderInput={(params: any) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};
