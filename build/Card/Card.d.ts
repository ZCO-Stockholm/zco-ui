import React from 'react';
declare type SectionBorder = 'top' | 'left' | 'right' | 'bottom';
interface SectionProps {
    sectionWidth?: string;
    sectionBorders?: Array<SectionBorder> | null;
    withPadding?: boolean;
}
interface HeaderProps {
    title?: string;
    children?: React.ReactNode;
    headingSize?: 'Large' | 'Medium';
}
declare const Card: {
    Container: import("styled-components").StyledComponent<"div", any, {}, never>;
    Section: import("styled-components").StyledComponent<"div", any, SectionProps, never>;
    Header: ({ title, children, headingSize }: HeaderProps) => JSX.Element;
};
export default Card;
