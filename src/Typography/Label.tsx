import React from 'react'
import styled, { css } from 'styled-components'
import Icon from '../Icon/Icon'

type LabelSize = 'medium' | 'small'
type LabelColor = 'primary' | 'secondary' | 'accent'
type IconAlignment = 'left' | 'right'

interface LabelContainerProps {
  labelSize: LabelSize,
  withPointer?: boolean
  withBorder?: boolean
  labelColor?: LabelColor
  iconAlignment?: IconAlignment
}

const LabelContainer = styled.div<LabelContainerProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  font-family: ${({ theme }) => theme.fonts.medium};
  cursor: ${({ withPointer }) => withPointer ? 'cursor' : 'auto'};
  
  ${({ theme, labelColor }) => {
    if (labelColor === 'secondary') return css`
      color: ${theme.colors.secondary};
      border-color: #ccc;
    `

    if (labelColor === 'accent') return css`
      color: ${theme.colors.accent};
      border-color: ${theme.colors.accent};
    `

    return css`
      color: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
    `
  }}

  ${({ withBorder }) => {
    if (withBorder) return css`
      border: 1px solid;
      border-radius: 50px;
      padding: 2px 15px;
    `
  }}

  ${({ labelSize }) => {
    if (labelSize === 'medium') return css`
      font-size: 12px;
    `

    return css`
      font-size: 10px;
      text-transform: uppercase;
    `
  }}

  svg {
    width: 18px;
    ${({ iconAlignment }) => {
      if (iconAlignment === 'right') return css`
        margin-left: 10px;
      `

      return css`
        margin-right: 10px;
      `
    }}
  }
`

interface LabelProps extends LabelContainerProps {
  children: React.ReactNode
  icon?: string
  iconAlignment?: IconAlignment
  handleClick?: (ev: React.MouseEvent) => {}
}

const Label = ({
  children,
  icon,
  iconAlignment = 'right',
  handleClick,
  ...rest
}: LabelProps) => {

  return <LabelContainer
    {...rest}
    iconAlignment={iconAlignment}
    withPointer={handleClick ? true : false}
    onClick={handleClick}
  >
    {icon && iconAlignment === 'left' && <Icon icon={icon} />}
    {children}
    {icon && iconAlignment === 'right' && <Icon icon={icon} />}
  </LabelContainer>
}

export default Label