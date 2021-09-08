import { ContainerProps } from './style';
declare type SelectSize = 'large' | 'medium' | 'small';
declare type SelectColor = 'primary' | 'secondary' | 'accent';
declare type SelectStyle = 'default' | 'rounded';
export declare type SelectOption = {
    value: string;
    label: string;
    disabled?: boolean;
};
interface SelectProps extends ContainerProps {
    label?: string;
    required?: boolean;
    options: Array<SelectOption>;
    value: string;
    setValue: (newValue: any) => void;
    selectSize?: SelectSize;
    selectColor?: SelectColor;
    selectStyle?: SelectStyle;
    selectRounded?: boolean;
}
declare const Select: ({ options, full, label, required, value, setValue, selectSize, selectColor, selectStyle, selectRounded, }: SelectProps) => JSX.Element;
export default Select;
