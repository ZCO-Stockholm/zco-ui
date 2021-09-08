interface Column {
    Header: string;
    accessor: string;
}
interface Row {
    [key: string]: any;
}
interface Action {
    label: string;
    action: (values: Row) => void;
    icon?: string;
}
declare type TableStyle = 'compact' | 'large';
interface DataTableProps {
    columns: Array<Column>;
    items: Array<Row>;
    updateColumn?: (rowValues: Row, columnId: string, newValue: string) => void;
    rowActions?: Array<Action>;
    editableColumns?: Array<string>;
    filterableColumns?: Array<string>;
    style?: TableStyle;
}
declare const DataTable: ({ columns, items, updateColumn, rowActions, editableColumns, filterableColumns, style, }: DataTableProps) => JSX.Element;
export default DataTable;
