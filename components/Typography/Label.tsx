import styled from 'styled-components'
import * as Feather from 'react-feather'

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

    if (labelSize === 'small') return `
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
  handleClick?: (ev) => {}
}

const Label = ({
  children,
  icon,
  iconAlignment = 'right',
  handleClick,
  ...rest
}: LabelProps) => {
  const Icon = Feather[icon]

  return <LabelContainer {...rest} withPointer={handleClick ? true : false} onClick={handleClick}>
    {Icon && iconAlignment === 'left' && <Icon vector-effect="non-scaling-stroke" />}
    {children}
    {Icon && iconAlignment === 'right' && <Icon vectorEffect="non-scaling-stroke" />}
  </LabelContainer>
}

export default Label