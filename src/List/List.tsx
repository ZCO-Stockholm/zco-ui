import React from 'react'
import styled from 'styled-components'
import Label from '../Typography/Label'
import media from '../styles/media'

const ListContainer = styled.ul`
  margin: 0;
  padding: 0;
`

const ListItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const ListLabel = styled(Label)`
  padding-right: 30px;
  ${media.smallMax} {
    padding-right: 0;
    width: 100%;
  }
`

const ListValue = styled.div`
`

interface ListItem {
  key: string
  value: string
  label: string
  [key: string]: any
}

interface ListProps {
  items: Array<ListItem>
  className?: string
}

const List = ({ items, className }: ListProps) => {
  return <ListContainer className={className ?? ''}>
    {items.map((item) => <ListItem key={item.key}>
      <ListLabel labelColor="secondary" labelSize="small">{item.label}</ListLabel>
      <ListValue>{item.value}</ListValue>
    </ListItem>)}
  </ListContainer>
}

export default List