import React from 'react';
declare type MenuAlignment = 'center' | 'left' | 'right';
declare type MenuProps = {
    items: Array<MenuItemProps>;
    withTitle?: boolean;
    withHover?: boolean;
    alignment?: MenuAlignment;
};
declare const Menu: (props: MenuProps) => JSX.Element;
export declare type MenuItemProps = {
    title?: string;
    href?: string;
    icon: string;
    isActive: boolean;
    handleClick?: (ev: React.MouseEvent) => void;
    withTitle?: boolean;
    withHover?: boolean;
};
export default Menu;
