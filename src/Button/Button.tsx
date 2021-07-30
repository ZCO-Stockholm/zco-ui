import React from 'react'
import styled from 'styled-components'

type ButtonType = 'primary' | 'secondary'
type ButtonSize = 'large' | 'medium' | 'small'

export interface ButtonProps {
  theme?: any
  buttonType: ButtonType
  buttonSize: ButtonSize
  full?: boolean
}

const Button = styled.button<ButtonProps>`
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.medium};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: normal;
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  &[disabled] {
    opacity: 0.5;
    cursor: default;
    pointer-events: none;
  }

  ${({ theme, buttonType }) => {
    if (buttonType === 'secondary') return `
      background-color: transparent;
      border: ${theme.borders.dark};
      color: ${theme.colors.secondary};
      transition: color 0.2s ease, border-color 0.2s ease;
      will-change: color, border-color;
      &:hover {
        color: ${theme.colors.primary};
        border-color: ${theme.colors.primary};
      }
    `

    else return `
      background-color: ${theme.colors.accent};
      color: ${theme.colors.bg};
      border: ${theme.borders.accent};
      transition: background-color 0.2s ease;
      will-change: background-color;
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
    else return `
      padding: 6px 20px 5px;
    `
  }}

  ${({ full }) => full && `width: 100%;` }
`

export default Button