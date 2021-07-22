import styled from 'styled-components'

type JustifyTypes = 'space-between' | 'space-around' | 'space-evenly'

interface SpacerProps {
  justifyContent?: JustifyTypes
}

const Spacer = styled.div<SpacerProps>`
  display: flex;
  align-items: center;

  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent};`}
`

export default Spacer