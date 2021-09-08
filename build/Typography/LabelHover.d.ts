import React from 'react';
interface LabelHoverProps {
    children: React.ReactNode;
    isVisible: boolean;
    labelWidth?: number;
}
declare const LabelHover: ({ children, isVisible }: LabelHoverProps) => JSX.Element;
export default LabelHover;
