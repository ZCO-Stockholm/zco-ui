import React from 'react'
import styled from 'styled-components'
import Heading from '../Typography/Heading'
import { Spacer } from '../Layout/Layout'

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

type SectionBorder = 'top' | 'left' | 'right' | 'bottom'

interface SectionProps {
  sectionWidth?: string
  sectionBorders?: Array<SectionBorder> | null
}

const Section = styled.div<SectionProps>`
  padding: 50px;
  width: ${({ sectionWidth }) => sectionWidth || '100%'};

  ${({ sectionBorders, theme }) => {
    if (!sectionBorders) return
    return sectionBorders.map(b => `border-${b}: ${theme.borders.light};`)
  }}
`

interface HeaderProps {
  title?: string
  children?: React.ReactNode
  headingSize?: 'Large' | 'Medium'
}

const Header = ({ title, children, headingSize = 'Large' }: HeaderProps) => {
  const HeadingComp = Heading[headingSize]

  return <Spacer justifyContent="space-between">
    {title && <HeadingComp>{title}</HeadingComp>}
    {children && <Spacer spaceHorizontal={10}>
      {children}
    </Spacer>}
  </Spacer>
}

const Card = {
  Container,
  Section,
  Header
}

export default Card