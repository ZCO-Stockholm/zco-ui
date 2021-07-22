import styled, { css } from 'styled-components'

const sharedStyles = css`
  font-weight: normal;
  margin: 0;
`

const Large = styled.h1`
  ${sharedStyles}
  font-size: 32px;
  line-height: 38px;
  font-family: ${({ theme }) => theme.fonts.light};
`

const Medium = styled.h2`
  ${sharedStyles}
  font-size: 20px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fonts.regular};
`

const Heading = {
  Large,
  Medium
}

export default Heading