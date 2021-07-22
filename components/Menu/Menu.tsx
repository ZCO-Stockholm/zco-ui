import { useState } from 'react'
import styled from 'styled-components'
import { Inbox } from 'react-feather'
import Link from 'next/link'
import { useRouter } from 'next/router'
import LabelHover from '../Labels/LabelHover'

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

type MenuItem = {
  title?: string
  href: string
  icon: string
  isActive?: boolean
}

const MenuItemContainer = styled.li`
  position: relative;
  opacity: ${({ isActive }) => isActive ? 1 : 0.5};

  ${LabelHover} {
    display: none;
  }

  &:hover {
    ${LabelHover} {
      display: block;
    }
  }

  a {
    display: flex;
    padding: 15px;
  }
`

const MenuItemLabel = styled.div`
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

const MenuItem = (props: MenuItem) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const { icon, href, title, isActive } = props

  const handleMouseEnter = ev => setIsHovered(true)
  const handleMouseLeave = ev => setIsHovered(false)

  return <MenuItemContainer
    isActive={isActive}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    {title && <LabelHover isVisible={isHovered}>{title}</LabelHover>}
    <Link href={href}>
      <a>
        <Inbox />
      </a>
    </Link>
  </MenuItemContainer>
}

export default Menu