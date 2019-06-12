import React from 'react'
import Demo from '../demo'
import IconExample from './icon.example'

const code = require('!!raw-loader!./icon.example.tsx').default

const IconDemo = () => {
  return (
    <Demo code={code}>
      <IconExample />
    </Demo>
  )
}

export default IconDemo
