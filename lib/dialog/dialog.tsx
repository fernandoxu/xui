import React from 'react'
import ReactDOM from 'react-dom'
import './dialog.scss'
import { scopedClassCreator } from '../utils'
import { Icon } from '../index'

interface Props {
  visible: boolean
  onCancel: React.MouseEventHandler
  onOK: React.MouseEventHandler
  maskClosable?: boolean
}

const scopedClass = scopedClassCreator('xui-dialog')
const sc = scopedClass

const Dialog: React.FunctionComponent<Props> = props => {
  const onCancel: React.MouseEventHandler = e => props.onCancel(e)
  const onOK: React.MouseEventHandler = e => props.onOK(e)
  const onMaskClick: React.MouseEventHandler = e => {
    if (props.maskClosable) {
      props.onCancel(e)
    }
  }

  const x = props.visible ? (
    <>
      <div className={sc('mask')} onClick={onMaskClick} />
      <div className={sc('')}>
        <div className={sc('close')} onClick={onCancel}>
          <Icon name="close" />
        </div>
        <header className={sc('header')}>提示</header>
        <main className={sc('main')}>{props.children}</main>
        <footer className={sc('footer')}>
          <button onClick={onOK}>ok</button>
          <button onClick={onCancel}>cancel</button>
        </footer>
      </div>
    </>
  ) : null

  return ReactDOM.createPortal(x, document.body)
}

export default Dialog
