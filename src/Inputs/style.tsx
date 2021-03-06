import styled, { css } from 'styled-components'

export interface ContainerProps {
  full?: boolean | undefined
}

export const Container = styled.label<ContainerProps>`
  display: block;

  ${({ full }) => full && css`
    width: 100%;
  `}

  & > div:first-of-type {
    margin-bottom: 10px;
  }
`