declare const ListItem: import("styled-components").StyledComponent<"li", any, {}, never>;
interface ListItem {
    key: string;
    value: string;
    label: string;
    [key: string]: any;
}
interface ListProps {
    items: Array<ListItem>;
    className?: string;
}
declare const List: ({ items, className }: ListProps) => JSX.Element;
export default List;
