import React from 'react'
import List from './List'

export default {
  title: 'List'
};

const items = [
  { key: 'street1', label: 'Street', value: 'Lorem ipsum 1'},
  { key: 'storeId', label: 'Store', value: 'Dolor store'},
]

export const ListDefault = () => <List items={items} />