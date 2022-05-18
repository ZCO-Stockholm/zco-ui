import React, { useState } from 'react'
import styled from 'styled-components'
import LabelHover from '../Typography/LabelHover'
import Icon from '../Icon/Icon'

type MenuAlignment = 'center' | 'left' | 'right'

type MenuContainerProps = {
  alignment: MenuAlignment
}

const MenuContainer = styled.ul<MenuContainerProps>`
  padding: 5px;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: ${({ alignment }) => {
    if (alignment === 'center') return 'center'
    if (alignment === 'left') return 'flex-start'
    else return 'flex-end'
  }};
`

type MenuProps = {
  items: Array<MenuItemProps>
  withTitle?: boolean
  withHover?: boolean
  alignment?: MenuAlignment
}

const Menu = (props: MenuProps) => {
  const { items, withTitle, withHover, alignment = 'center' } = props

  return <MenuContainer alignment={alignment}>
    {items.map((item, i) => <MenuItem
      key={i}
      withTitle={withTitle}
      withHover={withHover}
      {...item}
    />)}
  </MenuContainer>
}

interface MenuItemContainer {
  isActive: boolean
  isHovered: boolean
}

const Title = styled.span`
  margin-left: 15px;
`

const MenuItemContainer = styled.li<MenuItemContainer>`
  position: relative;
  cursor: pointer;

  svg {
    opacity: ${({ isActive, isHovered }) => isActive || isHovered ? 1 : 0.5};
    width: 24px;
  }

  a {
    display: flex;
    padding: 15px;
    text-decoration: none;
  }
`

export type MenuItemProps = {
  title?: string
  href?: string
  icon: string
  isActive: boolean
  handleClick?: (ev: React.MouseEvent) => void
  withTitle?: boolean
  withHover?: boolean
}

const MenuItem = (props: MenuItemProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const { icon, href, title, isActive, handleClick = () => {}, withTitle, withHover } = props

  const handleMouseEnter = (ev: React.MouseEvent) => setIsHovered(true)
  const handleMouseLeave = (ev: React.MouseEvent) => setIsHovered(false)

  return <MenuItemContainer
    isActive={isActive}
    isHovered={isHovered}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    <a href={href} onClick={ev => handleClick(ev)}>
      {title && withHover && <LabelHover isVisible={isHovered}>{title}</LabelHover>}
      <Icon icon={icon} />
      {title && withTitle && <Title>{title}</Title>}
    </a>
  </MenuItemContainer>
}

export default Menu