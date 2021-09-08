import React from 'react';
declare type MenuProps = {
    items: Array<MenuItemProps>;
};
declare const Menu: (props: MenuProps) => JSX.Element;
declare type MenuItemProps = {
    title?: string;
    href?: string;
    icon: string;
    isActive: boolean;
    handleClick?: (ev: React.MouseEvent) => void;
};
export default Menu;
