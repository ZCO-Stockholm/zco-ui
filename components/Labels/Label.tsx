import styled from 'styled-components'

const Label = styled.div`
  font-size: 0.714rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.medium};
  text-transform: uppercase;
`

export default Label