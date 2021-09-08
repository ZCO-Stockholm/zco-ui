declare type ButtonType = 'primary' | 'secondary';
declare type ButtonSize = 'large' | 'medium' | 'small';
export interface ButtonProps {
    theme?: any;
    buttonType: ButtonType;
    buttonSize: ButtonSize;
    full?: boolean;
}
declare const Button: import("styled-components").StyledComponent<"button", any, ButtonProps, never>;
export default Button;
