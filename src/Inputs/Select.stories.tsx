import React from 'react'
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
  { label: 'Ipsum', value: 'ipsum'},
]
export const SelectDefault = () => <Select options={options} label="Lorem ipsum" />