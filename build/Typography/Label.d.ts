import React from 'react';
declare type LabelSize = 'medium' | 'small';
declare type LabelColor = 'primary' | 'secondary' | 'accent';
declare type IconAlignment = 'left' | 'right';
interface LabelContainerProps {
    labelSize: LabelSize;
    withPointer?: boolean;
    withBorder?: boolean;
    labelColor?: LabelColor;
    iconAlignment?: IconAlignment;
}
interface LabelProps extends LabelContainerProps {
    children: React.ReactNode;
    icon?: string;
    iconAlignment?: IconAlignment;
    handleClick?: (ev?: React.MouseEvent) => void;
}
declare const Label: ({ children, icon, iconAlignment, handleClick, ...rest }: LabelProps) => JSX.Element;
export default Label;
