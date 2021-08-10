import React, { useState } from 'react'
import Select from './Select'
import styled from 'styled-components'

const Container = styled.div`
  > div {
    margin-bottom: 20px;
  }
`

export default {
  title: "Inputs"
}

const options = [
  { label: 'Lorem', value: 'lorem'},
  { label: 'Dolor', value: 'dolor'},
  { label: 'Ipsum', value: 'ipsum', disabled: true },
]

export const SelectDefault = () => {
  const [value, setValue] = useState('ipsum')

  return <Select
    options={options}
    label="Lorem ipsum"
    value={value}
    setValue={newOption => setValue(newOption.value)}
  />
}

export const SelectSecondary = () => {
  const [value, setValue] = useState('ipsum')

  return <Select
    options={options}
    label="Lorem ipsum"
    value={value}
    setValue={newOption => setValue(newOption.value)}
    selectColor="secondary"
  />
}