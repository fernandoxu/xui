import React from 'react'
import { scopedClassCreator } from '../utils'
import './layout.scss'

const sc = scopedClassCreator('xui-layout')

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Footer: React.FunctionComponent<Props> = props => {
  const { className, ...rest } = props
  return (
    <div className={sc('footer', { extra: className })} {...rest}>
      {props.children}
    </div>
  )
}

export default Footer
