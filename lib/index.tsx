import React from 'react'
import ReactDOM from 'react-dom'
import Icon from './icon'

const fn = () => {
  console.log('fn')
}

ReactDOM.render(
  <Icon onClick={fn} name="webpack" />,
  document.getElementById('root')
)
