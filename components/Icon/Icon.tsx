import * as Feather from 'react-feather'

interface IconProps {
  icon: string | undefined
}

const Icon = ({ icon }: IconProps) => {
  // @ts-ignore
  const IconComp = Feather[icon]

  if (!icon || !IconComp) return null

  return <IconComp />
}

export default Icon