import React from 'react'
import ReactDOM from 'react-dom'
import Icon from './icon'

const fn: React.MouseEventHandler = e => {
  e.preventDefault()
  console.log(e.target)
}

ReactDOM.render(
  <Icon onClick={fn} name="webpack" className="icon-webpack" />,
  document.getElementById('root')
)
