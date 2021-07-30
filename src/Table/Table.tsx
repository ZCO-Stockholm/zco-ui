import React, { useState, useEffect, useMemo } from 'react'
import styled, { css } from 'styled-components'
import { useTable, usePagination } from 'react-table'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import { Spacer, Justify } from '../Layout/Layout'
import Label from '../Typography/Label'

const Pagination = styled(Justify)`
  margin-top: 30px;

  ${Button} {
    padding-left: 10px;
    padding-right: 10px;
  }
`

const sharedStyles = css`
  table {
    width: 100%;
    border-spacing: 0;
    font-size: 12px;
    border-spacing: 0 5px;

    thead {
      color: ${({ theme }) => theme.colors.secondary};
      text-transform: uppercase;
      font-size: 10px;
      tr:first-of-type {
        display: none;
      }
    }

    th,
    td {
      text-align: left;
      margin: 0;
      padding: 13px;

      :first-child {
        padding-left: 50px;
      }
      :last-child {
        border-right: 0;
        text-align: right;
        padding-right: 50px;
      }
    }

    input {
      background: transparent;
      font-size: 12px;
      color: ${({ theme }) => theme.colors.primary}
      padding: 0;
      margin: 0;
      border: 0;
    }

    .actions span {
      margin-left: 10px;
      cursor: pointer;
    }
  }
`

const StylesCompact = styled.div`
  ${sharedStyles}

  table {
    tbody {
      tr {
        &:nth-child(odd) {
          background-color: #fcfcfc;
        }
      }
    }
  }
`

const StylesLarge = styled.div`
  ${sharedStyles}

  table {
    tbody {
      tr {
        background-color: #fff;
        box-shadow: 0px 0px 10px rgb(0 0 0 / 10%);
      }
    }


    th,
    td {
      :first-child {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      }
      :last-child {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      }
    }
  }
`

// Create an editable cell renderer
const EditableCell = ({
  value: initialValue,
  row,
  column: { id },
  updateMyData, // This is a custom function that we supplied to our table instance
  isEditable,
}) => {
  // We need to keep and update the state of the cell normally
  const [value, setValue] = useState(initialValue)

  const onChange = e => {
    setValue(e.target.value)
  }

  const onBlur = e => {
    updateMyData(row.values, id, value)
  }

  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  if (isEditable)
    return <input value={value} onChange={onChange} onBlur={onBlur} />
  
  return <span>{value}</span>
}

const ActionCell = ({
  value: initialValue,
  row: { index, values },
  column: { id },
  rowActions,
}) => {
  if (rowActions.length < 1) return null

  return <div className="actions">
    {rowActions.map(a => <span key={a.label} onClick={ev => a.action(values)}>
      {a.label}
    </span>)}
  </div>
}

// Set our editable cell renderer as the default Cell renderer
const defaultColumn = {
  Cell: EditableCell,
  CellAction: ActionCell,
}

// Be sure to pass our updateMyData and the skipPageReset option
function Table({
  columns,
  data,
  updateMyData,
  skipPageReset,
  editableColumns = [],
  rowActions = [],
}) {
  // For this example, we're using pagination to illustrate how to stop
  // the current page from resetting when our data changes
  // Otherwise, nothing is different here.
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      // use the skipPageReset option to disable page resetting temporarily
      autoResetPage: !skipPageReset,
      // updateMyData isn't part of the API, but
      // anything we put into these options will
      // automatically be available on the instance.
      // That way we can call this function from our
      // cell renderer!
      updateMyData,
      rowActions,
    },
    usePagination
  )

  // Render the UI for your table
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  const isEditable = editableColumns.includes(cell.column.id)
                  const isAction = cell.column.id === 'actions'

                  return <td {...cell.getCellProps()}>
                    {isAction ? cell.render('CellAction') : cell.render('Cell', { isEditable })}
                  </td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>

      <Pagination className="pagination" justifyContent="space-between">
        <Spacer spaceHorizontal={10} alignItems="center">
          <Button
            buttonSize="small"
            buttonType="secondary"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            <Icon icon="ArrowLeft" />
          </Button>
          <Button
            buttonSize="small"
            buttonType="secondary"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            <Icon icon="ArrowRight" />
          </Button>
          <Label labelSize="small" labelColor="secondary">
            {`Page ${pageIndex + 1} of ${pageOptions.length}`}
          </Label>
        </Spacer>

        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </Pagination>
    </>
  )
}

interface Column {
  Header: string
  accessor: string
}

interface Row {
  [key: string]: any
}

interface Action {
  label: string
  action: (values: Row) => void
}

type TableStyle = 'compact' | 'large'

interface DataTableProps {
  columns: Array<Column>
  items: Array<Row>
  updateColumn?: (rowValues: Row, columnId: string, newValue: string) => void
  rowActions?: Array<Action>
  editableColumns?: Array<string>
  style?: TableStyle
}

const DataTable = ({
  columns = [],
  items,
  updateColumn,
  rowActions,
  editableColumns = [],
  style = 'compact',
}: DataTableProps) => {
  const finalColumns = useMemo(() => [
    {
      Header: 'Items',
      columns: rowActions?.length > 0
        ? [ ...columns, { Header: 'Actions', accessor: 'actions' } ]
        : columns,
    },
  ], [columns])

  const [data, setData] = useState(items)
  const [originalData] = useState(items)
  const [skipPageReset, setSkipPageReset] = useState(false)

  const updateMyData = (rowValues, columnId, value) => {
    setSkipPageReset(true)
    updateColumn(rowValues, columnId, value)
  }

  const resetData = () => setData(originalData)

  useEffect(() => {
    setSkipPageReset(false)
  }, [data])

  useEffect(() => {
    setData(items)
  }, [items])

  const Styles = style === 'compact' ? StylesCompact : StylesLarge

  return <Styles>
    <Table
      columns={finalColumns}
      data={data}
      updateMyData={updateMyData}
      skipPageReset={skipPageReset}
      editableColumns={editableColumns}
      rowActions={rowActions}
    />
  </Styles>
}

export default DataTable