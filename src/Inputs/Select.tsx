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
    pointer-events: none;
  }
`

type SelectSize = 'large' | 'medium'

interface StyledSelectProps {
  selectSize: SelectSize
}

const StyledSelect = styled.select<StyledSelectProps>`
  appearance: none;
  background: transparent;
  border: ${({ theme }) => theme.borders.regular};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1rem;
  width: 100%;

  ${({ selectSize }) => {
    if (selectSize === 'medium') return css`
      padding: 11px 55px 11px 20px;
    `

    return css`
      padding: 16px 55px 16px 20px;
    `
  }}

  &:focus {
    border: ${({ theme }) => theme.borders.dark};
    outline: none;
  }
`

type SelectOption = {
  value: string
  label: string
  disabled?: boolean
}

interface SelectProps extends ContainerProps {
  label?: string
  required?: boolean
  options: Array<SelectOption>
  value: string
  setValue: (newOption: SelectOption) => void
  selectSize?: SelectSize
} 

const Select = ({
  options,
  full,
  label,
  required,
  value,
  setValue,
  selectSize = 'large',
}: SelectProps) => {
  const labelFormatted = `${label}${required ? ' *' : ''}`

  const handleChange = (ev: React.FormEvent<HTMLSelectElement>) => {
    // @ts-ignore
    const label = ev.target.value
    const newOption = options.find(o => o.label === label)
    setValue(newOption)
  }

  return <Container full={full}>
    {label && <Label labelSize="small" labelColor="secondary">{labelFormatted}</Label>}
    <SelectContainer>
      <StyledSelect value={value} onChange={handleChange} selectSize={selectSize}>
        {options.map(option => <option key={option.value} disabled={option.disabled}>
          {option.label}
        </option>)}
      </StyledSelect>
      <Icon icon="ChevronDown" />
    </SelectContainer>
  </Container>
}

export default Select