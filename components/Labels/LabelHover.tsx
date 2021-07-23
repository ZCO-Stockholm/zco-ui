import { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'

interface LabelHoverContainer {
  isVisible: boolean
  labelWidth: number
}

const LabelHoverContainer = styled.div<LabelHoverContainer>`
  opacity: ${({ isVisible }) => isVisible ? '0.9' : '0'};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.bg};
  position: absolute;
  top: 12px;
  right: ${({ labelWidth }) => `-${labelWidth + 10}px`};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 12px;
  line-height: 16px;
  padding: 5px 10px;
  transition: opacity 0.3s ease;
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

interface LabelHoverProps extends LabelHoverContainer {
  children: React.ReactNode
}

const LabelHover = ({ children, isVisible }: LabelHoverProps) => {
  const refContainer = useRef<HTMLDivElement>()
  const [labelWidth, setLabelWidth] = useState<number>(0)

  useEffect(() => {
    if (!refContainer.current) return
    setLabelWidth(refContainer.current.scrollWidth)
  }, [refContainer, children])

  return <LabelHoverContainer isVisible={isVisible} ref={refContainer} labelWidth={labelWidth}>
    <Arrow />
    {children}
  </LabelHoverContainer>
}

export default LabelHover