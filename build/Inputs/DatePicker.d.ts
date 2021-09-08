import { ReactDatePickerProps } from 'react-datepicker';
interface DatePickerProps extends ReactDatePickerProps {
    label?: string;
    required?: boolean;
    full?: boolean;
}
declare const DatePicker: ({ label, required, full, ...rest }: DatePickerProps) => JSX.Element;
export default DatePicker;
