import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, NavLink } from 'react-router-dom'
import Layout, { Header, Footer, Content, Aside } from './lib/layout/layout'
import IconDemo from './lib/icon/icon.demo'
import DialogExample from './lib/dialog/dialog.example'
import LayoutExample from './lib/layout/layout.example'

import './example.scss'

ReactDOM.render(
  <Router>
    <Layout className="example-wrapper">
      <Header className="example-header">
        <div className="logo">
          <img src="./logo.jpg" width="48" alt="" />
          <span>XUI</span>
        </div>
      </Header>
      <Layout>
        <Aside className="example-aside">
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink to="/icon">Icon</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">Dialog</NavLink>
            </li>
            <li>
              <NavLink to="/layout">layout</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className="example-content">
          <Route path="/icon" component={IconDemo} />
          <Route path="/dialog" component={DialogExample} />
          <Route path="/layout" component={LayoutExample} />
        </Content>
      </Layout>
      <Footer className="example-footer">Copyright © 2019 xulishuai</Footer>
    </Layout>
  </Router>,
  document.querySelector('#root')
)
