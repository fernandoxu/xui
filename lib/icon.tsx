import React from 'react'
import './icons/wechat.svg'
import './importAllIcons'
import './icon.scss'

interface IconProps {
  name: string
  onClick: React.MouseEventHandler<SVGElement>
}

const Icon: React.FunctionComponent<IconProps> = props => {
  return (
    <i className="xui-icon">
      <svg onClick={props.onClick}>
        <use xlinkHref={`#${props.name}`} />
      </svg>
    </i>
  )
}

export default Icon
