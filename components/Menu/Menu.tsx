import { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import LabelHover from '../Labels/LabelHover'
import * as Feather from 'react-feather'

const MenuContainer = styled.ul`
  padding: 5px;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`

type MenuProps = {
  items: Array<MenuItem>
}

const Menu = (props: MenuProps) => {
  const { pathname } = useRouter()
  const { items } = props

  return <MenuContainer>
    {items.map((item) => <MenuItem
      key={item.href}
      {...item}
      isActive={pathname === item.href}
    />)}
  </MenuContainer>
}

interface MenuItemContainer {
  isActive: boolean
  isHovered: boolean
}

const MenuItemContainer = styled.li<MenuItemContainer>`
  position: relative;

  svg {
    opacity: ${({ isActive, isHovered }) => isActive || isHovered ? 1 : 0.5};
  }

  a {
    display: flex;
    padding: 15px;
  }
`

type MenuItem = {
  title?: string
  href: string
  icon: string
  isActive: boolean
}

const MenuItem = (props: MenuItem) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const { icon, href, title, isActive } = props
  const IconComp = Feather[icon]

  const handleMouseEnter = ev => setIsHovered(true)
  const handleMouseLeave = ev => setIsHovered(false)

  return <MenuItemContainer
    isActive={isActive}
    isHovered={isHovered}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    {title && <LabelHover isVisible={isHovered}>{title}</LabelHover>}
    <Link href={href}>
      <a>
        {IconComp && <IconComp />}
      </a>
    </Link>
  </MenuItemContainer>
}

export default Menu