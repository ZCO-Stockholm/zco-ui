import styled from 'styled-components'
import Label from '../Labels/Label'

const Container = styled.label`
  display: block;

  ${Label} {
    margin-bottom: 10px;
  }
`

const InputTag = styled.input`
  font-size: 1rem;
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
}

const Input = (props: InputProps) => {
  const { label, required, ...rest } = props
  const labelFormatted = `${label}${required ? ' *' : ''}`

  return <Container>
    {label && <Label>{labelFormatted}</Label>}
    <InputTag {...rest} />
  </Container>
}

export default Input