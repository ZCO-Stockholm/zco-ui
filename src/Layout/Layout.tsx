import styled, { css } from 'styled-components'

type JustifyTypes = 'space-between' | 'space-around' | 'space-evenly'

interface JustifyProps {
  justifyContent?: JustifyTypes
}

export const Justify = styled.div<JustifyProps>`
  display: flex;
  align-items: center;
  width: 100%;

  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent};`}
`

interface SpacerProps {
  spaceHorizontal?: number
  spaceVertical?: number
  alignItems?: string
}

export const Spacer = styled.div<SpacerProps>`
  display: flex;
  flex-wrap: wrap;

  ${({ alignItems }) => alignItems && css`
    align-items: ${alignItems};
  `}

  ${({ spaceHorizontal }) => spaceHorizontal && css`
    > * {
      margin: 0 ${spaceHorizontal / 2}px;
    }
    > *:first-child {
      margin-left: 0;
    }
    > *:last-child {
      margin-right: 0;
    }
  `}

  ${({ spaceVertical }) => spaceVertical && css`
    flex-direction: column;
    align-items: center;

    > * {
      margin: ${spaceVertical / 2}px 0;
    }
    *:first-child {
      margin-top: 0;
    }
    *:last-child {
      margin-bottom: 0;
    }
  `}
`