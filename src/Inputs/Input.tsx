import React from 'react'
import styled, { css } from 'styled-components'
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

const InputTag = styled.input`
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary};
  border: ${({ theme }) => theme.borders.regular};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 17px 20px 16px;
  width: 100%;


  &:focus {
    border: ${({ theme }) => theme.borders.dark};
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
  }
`

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  required?: boolean
  full?: boolean
}

const Input = (props: InputProps) => {
  const { label, required, full, ...rest } = props
  const labelFormatted = `${label}${required ? ' *' : ''}`

  return <Container full={full}>
    {label && <Label labelSize="small" labelColor="secondary">{labelFormatted}</Label>}
    <InputTag {...rest} />
  </Container>
}

export default Input