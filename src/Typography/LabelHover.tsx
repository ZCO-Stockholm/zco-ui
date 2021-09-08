import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'

interface LabelHoverContainer {
  isVisible: boolean
}

const LabelHoverContainer = styled.div<LabelHoverContainer>`
  opacity: ${({ isVisible }) => isVisible ? '0.9' : '0'};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.bg};
  position: absolute;
  top: 12px;
  left: calc(100% + 10px);
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 12px;
  line-height: 16px;
  padding: 5px 10px;
  transition: opacity 0.3s ease;
  white-space: nowrap;
  z-index: 100;
`

const Arrow = styled.span`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 8px;
  height: 8px;
  position: absolute;
  left: -4px;
  transform: rotate(45deg);
  top: 9px;
`

interface LabelHoverProps {
  children: React.ReactNode
  isVisible: boolean
  labelWidth?: number
}

const LabelHover = ({ children, isVisible }: LabelHoverProps) => {
  return <LabelHoverContainer isVisible={isVisible}>
    <Arrow />
    {children}
  </LabelHoverContainer>
}

export default LabelHover