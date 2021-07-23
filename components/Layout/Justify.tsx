import styled from 'styled-components'

type JustifyTypes = 'space-between' | 'space-around' | 'space-evenly'

interface SpacerProps {
  justifyContent?: JustifyTypes
}

const Justify = styled.div<SpacerProps>`
  display: flex;
  align-items: center;
  width: 100%;

  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent};`}
`

export default Justify