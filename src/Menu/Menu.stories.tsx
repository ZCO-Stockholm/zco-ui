import React from "react";
import Menu from "./Menu";
import styled from 'styled-components'

const Container = styled.div`
  > div {
    margin-bottom: 20px;
  }
`

export default {
  title: "Menu"
}

const menuItems = [
  { 
    title: 'Lorem',
    icon: 'Archive',
    href: '/lorem',
    isActive: true,
  },
  { 
    title: 'Ipsum',
    icon: 'File',
    href: '/ipsum',
    isActive: false,
  },
  { 
    title: 'Dolor',
    icon: 'Globe',
    href: '/dolor',
    isActive: false,
  }
]

export const MenuVertical = () => <Menu items={menuItems} />