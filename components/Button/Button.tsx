import styled from 'styled-components'

type ButtonType = 'primary' | 'secondary'
type ButtonSize = 'large' | 'medium' | 'small'

interface ButtonProps {
  buttonType: ButtonType
  buttonSize: ButtonSize
  full?: boolean
}

const Button = styled.button<ButtonProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: normal;
  cursor: pointer;
  transition: background-color 0.2s ease;
  will-change: background-color;

  ${({ theme, buttonType }) => {
    if (buttonType === 'secondary') return `
      background-color: transparent;
      border: ${theme.borders.dark};
      color: ${theme.colors.secondary};
    `

    if (buttonType === 'primary') return `
      background-color: ${theme.colors.accent};
      color: ${theme.colors.bg};
      border: ${theme.borders.accent};
      &:hover {
        background-color: ${theme.colors.accentDark};
      }
    `
  }}

  ${({ buttonSize }) => {
    if (buttonSize === 'large') return `
      padding: 17px 20px 16px;
    `
    if (buttonSize === 'medium') return `
      padding: 11px 20px 10px;
    `
    if (buttonSize === 'small') return `
      padding: 6px 20px 5px;
    `
  }}

  ${({ full }) => full && `width: 100%;` }

`

export default Button