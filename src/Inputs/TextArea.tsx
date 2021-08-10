import React from 'react'
import styled, { css } from 'styled-components'
import Label from '../Typography/Label'
import { Container } from './style'

const TextAreaTag = styled.textarea`
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary};
  border: ${({ theme }) => theme.borders.regular};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 17px 20px 16px;
  width: 100%;
  min-width: 100%;
  max-width: 100%;

  &:focus {
    border: ${({ theme }) => theme.borders.dark};
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
  }
`

interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  required?: boolean
  full?: boolean
  value: string
}

const TextArea = (props: TextAreaProps) => {
  const { label, required, full, ...rest } = props
  const labelFormatted = `${label}${required ? ' *' : ''}`

  return <Container full={full}>
    {label && <Label labelSize="small" labelColor="secondary">{labelFormatted}</Label>}
    <TextAreaTag {...rest} />
  </Container>
}

export default TextArea