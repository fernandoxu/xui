import React, { ReactElement } from 'react'
import { scopedClassCreator } from '../utils'
import Aside from './aside'
import Content from './content'
import Header from './header'
import Footer from './footer'

import './layout.scss'

const sc = scopedClassCreator('xui-layout')

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>
}

const Layout: React.FunctionComponent<Props> = props => {
  const { className, ...rest } = props
  const children = props.children as Array<ReactElement>
  const hasAside =
    'length' in children &&
    children.reduce((result, node) => result || node.type === Aside, false)
  return (
    <div className={sc({ '': true, hasAside }, { extra: className })} {...rest}>
      {props.children}
    </div>
  )
}

export default Layout

export { Header, Footer, Aside, Content }
