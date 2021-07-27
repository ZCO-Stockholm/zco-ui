import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon/Icon'

type LabelSize = 'medium' | 'small'

interface LabelContainerProps {
  labelSize: LabelSize,
  withPointer?: boolean
}

const LabelContainer = styled.div<LabelContainerProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.medium};
  cursor: ${({ withPointer }) => withPointer ? 'cursor' : 'auto'};
  
  ${({ theme, labelSize }) => {
    if (labelSize === 'medium') return `
      color: ${theme.colors.accent};
      font-size: 12px;
    `

    return `
      font-size: 10px;
      text-decoration: uppercase;
      color: ${theme.colors.secondary};
    `
  }}

  svg {
    width: 18px;
    margin: 0 10px;
  }
`

interface LabelProps extends LabelContainerProps {
  children: React.ReactNode
  icon?: string
  iconAlignment?: 'left' | 'right'
  handleClick?: (ev: React.MouseEvent) => {}
}

const Label = ({
  children,
  icon,
  iconAlignment = 'right',
  handleClick,
  ...rest
}: LabelProps) => {

  return <LabelContainer {...rest} withPointer={handleClick ? true : false} onClick={handleClick}>
    {icon && iconAlignment === 'left' && <Icon icon={icon} />}
    {children}
    {icon && iconAlignment === 'right' && <Icon icon={icon} />}
  </LabelContainer>
}

export default Label