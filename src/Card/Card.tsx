import React from 'react'
import styled from 'styled-components'
import Heading from '../Typography/Heading'
import { Spacer } from '../Layout/Layout'
import media from '../styles/media'

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
  withPadding?: boolean
}

const Section = styled.div<SectionProps>`
  ${({ withPadding, theme }) => withPadding === false ? '' : theme.padding}
  width: ${({ sectionWidth }) => sectionWidth || '100%'};

  ${({ sectionBorders, theme }) => {
    if (!sectionBorders) return ''
    return sectionBorders.map(b => `border-${b}: ${theme.borders.light};`)
  }}

  ${media.smallMax} {
    width: 100%;
  }
`

const HeaderContainer = styled(Spacer)`
  flex-wrap: nowrap;

  ${media.smallMax} {
    h1 {
      font-size: 18px;
      line-height: 24px;
    }

    > div {
      flex-wrap: nowrap;
      max-height: 30px;
      margin-left: 20px;
    }
  }
`

interface HeaderProps {
  title?: string
  children?: React.ReactNode
  headingSize?: 'Large' | 'Medium'
}

const Header = ({ title, children, headingSize = 'Large' }: HeaderProps) => {
  const HeadingComp = Heading[headingSize]

  return <HeaderContainer justifyContent="space-between">
    {title && <HeadingComp>{title}</HeadingComp>}
    {children && <Spacer spaceHorizontal={10}>
      {children}
    </Spacer>}
  </HeaderContainer>
}

const Card = {
  Container,
  Section,
  Header
}

export default Card