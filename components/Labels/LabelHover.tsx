import { useRef } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: ${({ isVisible }) => isVisible ? 'block' : 'none'};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.bg};
  position: absolute;
  right: calc(-100% - 10px);
  top: calc(50% - 14px);
  border-radius: ${({ theme }) => theme.borderRadius};
  opacity: 0.9;
  font-size: 12px;
  padding: 2px 10px;
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

const LabelHover = ({ children, isVisible }) => {
  const refContainer = useRef()

  return <Container isVisible={isVisible} ref={refContainer}>
    <Arrow />
    {children}
  </Container>
}

export default LabelHover