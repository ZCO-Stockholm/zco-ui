import React from 'react'
import Table from './Table'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #fff;
`

export default {
  title: "Table"
}


const tableColumns = [
  {
    Header: 'ID',
    accessor: 'id',
  },
  {
    Header: 'Store ID',
    accessor: 'storeId',
  },
  {
    Header: 'Street',
    accessor: 'street1',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
]

const items = [
  { id: '10001', storeId: 'dolor', street1: 'Lorem 12', status: 'open' },
  { id: '10002', storeId: 'amet', street1: 'Lorem 10', status: 'open' },
  { id: '10003', storeId: 'dolor', street1: 'Lorem 12', status: 'open' },
  { id: '10004', storeId: 'amet', street1: 'Lorem 10', status: 'open' },
]

export const TableCompact = () => <Container>
  <Table
    columns={tableColumns}
    items={items}
  />
</Container>

const tableActions = [
  { label: 'View', action: (values) => console.log(values), icon: 'Eye' },
  { label: 'Remove', action: (values) => console.log(values), icon: 'Trash' },
]

export const TableCompactActions = () => <Container>
  <Table
    columns={tableColumns}
    rowActions={tableActions}
    items={items}
  />
</Container>

export const TableCompactEditable = () => <Container>
  <Table
    columns={tableColumns}
    items={items}
    editableColumns={['street1', 'storeId']}
    updateColumn={(row, columnId, newValue) => console.log(row, columnId, newValue)}
  />
</Container>

export const TableCompactFilters = () => <Container>
  <Table
    columns={tableColumns}
    items={items}
    filterableColumns={['storeId', 'street1']}
  />
</Container>

export const TableLarge = () => <Table
  columns={tableColumns}
  items={items}
  style="large"
/>
