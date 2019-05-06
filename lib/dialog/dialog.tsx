import React from 'react'
import './dialog.scss'

interface Props {
  visible: boolean
}

const Dialog: React.FunctionComponent<Props> = props => {
  return props.visible ? (
    <>
      <div className="xui-dialog-mask" />
      <div className="xui-dialog">{props.children}</div>
    </>
  ) : null
}

export default Dialog
