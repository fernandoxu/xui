import React from 'react'
import './icons/wechat.svg'
import './importAllIcons'
import './icon.scss'
import classnames from './utils/classnames'

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string
  onClick: React.MouseEventHandler<SVGElement>
}

const Icon: React.FunctionComponent<IconProps> = ({
  className,
  name,
  ...otherProps
}) => {
  return (
    <svg className={classnames(`xui-icon ${className}`)} {...otherProps}>
      <use xlinkHref={`#${name}`} />
    </svg>
  )
}

export default Icon
