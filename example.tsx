import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import IconExample from './lib/icon/icon.example'
import DialogExample from './lib/dialog/dialog.example'
import LayoutExample from './lib/layout/layout.example'

ReactDOM.render(
  <Router>
    <header>
      <div className="logo">xui</div>
    </header>
    <div>
      <aside>
        <ul>
          <li>
            <Link to="/icon">Icon</Link>
          </li>
          <li>
            <Link to="/dialog">Dialog</Link>
          </li>
          <li>
            <Link to="/layout">layout</Link>
          </li>
        </ul>
      </aside>
      <main>
        <Route path="/icon" component={IconExample} />
        <Route path="/dialog" component={DialogExample} />
        <Route path="/layout" component={LayoutExample} />
      </main>
    </div>
  </Router>,
  document.querySelector('#root')
)
