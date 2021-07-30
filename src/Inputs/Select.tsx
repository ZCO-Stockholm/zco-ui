import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import Icon from '../Icon/Icon'
import Label from '../Typography/Label'

interface ContainerProps {
  full?: boolean | undefined
}

const Container = styled.label<ContainerProps>`
  display: block;

  ${({ full }) => full && css`
    width: 100%;
  `}

  > div {
    margin-bottom: 10px;
  }
`

const SelectContainer = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: calc(50% - 12px);
    right: 15px;
  }
`

const StyledSelect = styled.select`
  appearance: none;
  background: transparent;
  border: ${({ theme }) => theme.borders.regular};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 17px 20px 16px;
  font-size: 1rem;
  width: 100%;

  &:focus {
    border: ${({ theme }) => theme.borders.dark};
    outline: none;
  }
`

interface SelectProps extends ContainerProps {
  label?: string
  required?: boolean
  options: any
  defaultValue?: string
  onChange?: (newValue: string) => void
} 

const Select = ({ options, full, label, required, defaultValue, onChange }: SelectProps) => {
  const [value, setValue] = useState<string>(defaultValue ?? '')
  const labelFormatted = `${label}${required ? ' *' : ''}`

  const handleChange = (ev: React.FormEvent<HTMLSelectElement>) => {
    // @ts-ignore
    const newValue = ev.target.value
    setValue(newValue)
    if (onChange) onChange(newValue)
  }

  return <Container full={full}>
    {label && <Label labelSize="small" labelColor="secondary">{labelFormatted}</Label>}
    <SelectContainer>
      <StyledSelect value={value} onChange={handleChange}>
        {options.map(option => <option key={option.value}>
          {option.label}
        </option>)}
      </StyledSelect>
      <Icon icon="ChevronDown" />
    </SelectContainer>
  </Container>
}

export default Select