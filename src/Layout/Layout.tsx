import styled, { css } from 'styled-components'

type Justify = 'space-between' | 'space-around' | 'space-evenly'
type Align =  'stretch' | 'center' | 'flex-start' | 'flex-end' |  'baseline' | 'initial' | 'inherit'

interface SpacerProps {
  spaceHorizontal?: number
  spaceVertical?: number
  alignItems?: Align
  justifyContent?: Justify
}

export const Spacer = styled.div<SpacerProps>`
  display: flex;
  flex-wrap: wrap;

  ${({ alignItems }) => alignItems && css`
    align-items: ${alignItems};
  `}

  ${({ justifyContent }) => justifyContent && css`
    justify-content: ${justifyContent};
  `}

  ${({ spaceHorizontal }) => spaceHorizontal && css`
    & > * {
      margin: 0 ${spaceHorizontal / 2}px !important;
    }
    & > *:first-child {
      margin-left: 0 !important;
    }
    & > *:last-child {
      margin-right: 0 !important;
    }
  `}

  ${({ spaceVertical }) => spaceVertical && css`
    flex-direction: column;

    & > * {
      margin: ${spaceVertical / 2}px 0 !important;
    }
    & *:first-child {
      margin-top: 0 !important;
    }
    & *:last-child {
      margin-bottom: 0 !important;
    }
  `}
`