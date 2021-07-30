import React from 'react'
import * as Feather from 'react-feather'

interface IconProps {
  icon: string | undefined
}

const Icon = ({ icon, ...rest }: IconProps) => {
  // @ts-ignore
  const IconComp = Feather[icon]

  if (!icon || !IconComp) return null

  return <IconComp {...rest} />
}

export default Icon