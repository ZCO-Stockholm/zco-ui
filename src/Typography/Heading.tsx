import styled, { css } from 'styled-components'
import media from '../styles/media'

const sharedStyles = css`
  font-weight: normal;
  margin: 0;
`

const Large = styled.h1`
  ${sharedStyles}
  font-size: 32px;
  line-height: 38px;
  font-family: ${({ theme }) => theme.fonts.light};

  ${media.smallMax} {
    font-size: 24px;
    line-height: 32px;
  }
`

const Medium = styled.h2`
  ${sharedStyles}
  font-size: 20px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fonts.regular};

  ${media.smallMax} {
    font-size: 18px;
    line-height: 24px;
  }
`

const Heading = {
  Large,
  Medium
}

export default Heading