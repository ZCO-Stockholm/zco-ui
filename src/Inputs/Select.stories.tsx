import React, { useState } from 'react'
import Select from './Select'
import { Spacer } from '../Layout/Layout'

export default {
  title: "Inputs"
}

const options = [
  { label: 'Lorem', value: 'lorem'},
  { label: 'Dolor', value: 'dolor'},
  { label: 'Ipsum', value: 'ipsum', disabled: true },
]

export const SelectDefault = () => {
  const [value, setValue] = useState<string>('ipsum')

  return <Spacer spaceVertical={20}>
    <Select
      options={options}
      label="Primary large"
      value={value}
      setValue={newOption => setValue(newOption.value)}
    />
    <Select
      options={options}
      label="Primary medium"
      value={value}
      setValue={newOption => setValue(newOption.value)}
      selectSize="medium"
    />
    <Select
      options={options}
      label="Primary small"
      value={value}
      setValue={newOption => setValue(newOption.value)}
      selectSize="small"
    />
    <Select
      options={options}
      label="Primary large rounded"
      value={value}
      setValue={newOption => setValue(newOption.value)}
      selectRounded={true}
    />
    <Select
      options={options}
      label="Secondary large"
      value={value}
      setValue={newOption => setValue(newOption.value)}
      selectColor="secondary"
    />
    <Select
      options={options}
      label="Accent large"
      value={value}
      setValue={newOption => setValue(newOption.value)}
      selectColor="accent"
    />
  </Spacer>
}