import React from 'react'
import styled, { css } from 'styled-components'
import Icon from '../Icon/Icon'
import Label from '../Typography/Label'
import { Container, ContainerProps } from './style'

interface SelectContainerProps {
  selectSize: SelectSize
  selectColor: SelectColor
}

const SelectContainer = styled.span<SelectContainerProps>`
  position: relative;
  display: block;

  svg {
    position: absolute;
    top: calc(50% - 12px);
    right: 15px;
    pointer-events: none;
    ${({ selectColor, theme }) => selectColor === 'accent' && css`
      color: ${theme.colors.bg};
    `}
    ${({ selectSize }) => selectSize === 'small' && css`
      width: 18px;
    `}
  }
`

type SelectSize = 'large' | 'medium' | 'small'
type SelectColor = 'primary' | 'secondary' | 'accent'
type SelectStyle = 'default' | 'rounded'

interface StyledSelectProps {
  selectSize: SelectSize
  selectColor: SelectColor
  selectStyle: SelectStyle
  selectRounded: boolean
}

const StyledSelect = styled.select<StyledSelectProps>`
  appearance: none;
  border: ${({ theme }) => theme.borders.regular};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1rem;
  width: 100%;

  ${({ selectColor, theme }) => {
    if (selectColor === 'secondary') return css`
      background: transparent;
      color: ${theme.colors.secondary};
      font-family: ${theme.fonts.medium};
    `

    if (selectColor === 'accent') return css`
      background-color: ${theme.colors.accent};
      color: ${theme.colors.bg};
      font-family: ${theme.fonts.medium};
      border: ${({ theme }) => theme.borders.accent};
    `

    return css`
      background: ${theme.colors.bg};
      color: ${theme.colors.primary};
    `
  }}

  ${({ selectSize }) => {
    if (selectSize === 'small') return css`
      padding: 6px 55px 6px 15px;
    `

    if (selectSize === 'medium') return css`
      padding: 11px 55px 11px 20px;
    `

    return css`
      padding: 16px 55px 16px 20px;
    `
  }}

  ${({ selectRounded }) => selectRounded && css`
    border-radius: 30px;
  `}

  &:focus {
    border: ${({ theme, selectColor }) =>
      selectColor === 'accent' ? theme.borders.accent : theme.borders.dark};
    outline: none;
  }
`

export type SelectOption = {
  value: string
  label: string
  disabled?: boolean
}

interface SelectProps extends ContainerProps {
  label?: string
  required?: boolean
  options: Array<SelectOption>
  value: string
  setValue: (newValue: any) => void
  selectSize?: SelectSize
  selectColor?: SelectColor 
  selectStyle?: SelectStyle
  selectRounded?: boolean
} 

const Select = ({
  options,
  full,
  label,
  required,
  value,
  setValue,
  selectSize = 'large',
  selectColor = 'primary',
  selectStyle = 'default',
  selectRounded = false,
}: SelectProps) => {
  const labelFormatted = `${label}${required ? ' *' : ''}`

  const handleChange = (ev: React.FormEvent<HTMLSelectElement>) => {
    // @ts-ignore
    setValue(ev.target.value)
  }

  return <Container full={full}>
    {label && <Label labelSize="small" labelColor="secondary">{labelFormatted}</Label>}
    <SelectContainer selectSize={selectSize} selectColor={selectColor}>
      <StyledSelect
        value={value}
        onChange={handleChange}
        selectSize={selectSize}
        selectColor={selectColor}
        selectStyle={selectStyle}
        selectRounded={selectRounded}
      >
        {options.map(option => <option
          key={option.value}
          disabled={option.disabled}
          value={option.value}
        >
          {option.label}
        </option>)}
      </StyledSelect>
      <Icon icon="ChevronDown" />
    </SelectContainer>
  </Container>
}

export default Select