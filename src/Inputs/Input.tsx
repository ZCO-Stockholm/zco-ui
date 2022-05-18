import React from 'react'
import styled  from 'styled-components'
import Label from '../Typography/Label'
import { Container } from './style'
import media from '../styles/media'

const InputTag = styled.input`
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary};
  border: ${({ theme }) => theme.borders.regular};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 16px 20px 15px;
  width: 100%;

  &[type=checkbox] {
    width: auto;
    margin: 0 0 3px;
  }

  ${media.smallMax} {
    padding: 12px 15px 9px;
  }

  &:focus {
    border: ${({ theme }) => theme.borders.dark};
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
  }
`

const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

const CheckboxLabel = styled.span`
  padding-left: 10px;
`

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  required?: boolean
  full?: boolean
}

const Input = (props: InputProps) => {
  const { label, required, full, ...rest } = props
  const labelFormatted = `${label}${required ? ' *' : ''}`
  const checkboxLabel = props.value === 'true' ? 'Yes' : 'No'

  const restProps = {
    ...rest,
    ...props.type === 'checkbox' ? {
      checked: props.value === 'true'
    } : {},
  }

  return <Container full={full}>
    {label && <Label labelSize="small" labelColor="secondary">{labelFormatted}</Label>}
    <InputContainer>
      <InputTag {...restProps} />
      {props.type === 'checkbox' && <CheckboxLabel>
        {checkboxLabel}
      </CheckboxLabel>}
    </InputContainer>
  </Container>
}

export default Input