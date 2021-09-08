import React, { useState } from 'react'
import styled from 'styled-components'
import LabelHover from '../Typography/LabelHover'
import Icon from '../Icon/Icon'

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
  items: Array<MenuItemProps>
}

const Menu = (props: MenuProps) => {
  const { items } = props

  return <MenuContainer>
    {items.map((item, i) => <MenuItem
      key={i}
      {...item}
    />)}
  </MenuContainer>
}

interface MenuItemContainer {
  isActive: boolean
  isHovered: boolean
}

const MenuItemContainer = styled.li<MenuItemContainer>`
  position: relative;
  cursor: pointer;

  svg {
    opacity: ${({ isActive, isHovered }) => isActive || isHovered ? 1 : 0.5};
  }

  a {
    display: flex;
    padding: 15px;
  }
`

type MenuItemProps = {
  title?: string
  href?: string
  icon: string
  isActive: boolean
  handleClick?: (ev: React.MouseEvent) => void
}


const MenuItem = (props: MenuItemProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const { icon, href, title, isActive, handleClick = () => {} } = props

  const handleMouseEnter = (ev: React.MouseEvent) => setIsHovered(true)
  const handleMouseLeave = (ev: React.MouseEvent) => setIsHovered(false)

  return <MenuItemContainer
    isActive={isActive}
    isHovered={isHovered}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    <a href={href} onClick={ev => handleClick(ev)}>
      {title && <LabelHover isVisible={isHovered}>{title}</LabelHover>}
      <Icon icon={icon} />
    </a>
  </MenuItemContainer>
}

export default Menu