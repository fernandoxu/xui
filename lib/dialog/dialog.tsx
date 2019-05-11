import React, { ReactFragment, ReactNode } from 'react'
import ReactDOM from 'react-dom'
import './dialog.scss'
import { scopedClassCreator } from '../utils'
import { Icon } from '../index'

interface Props {
  visible: boolean
  onCancel: React.MouseEventHandler
  onOK: React.MouseEventHandler
  maskClosable?: boolean
  isAlert?: boolean
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
        {props.isAlert ? null : (
          <footer className={sc('footer')}>
            <button onClick={onOK}>ok</button>
            <button onClick={onCancel}>cancel</button>
          </footer>
        )}
      </div>
    </>
  ) : null

  return ReactDOM.createPortal(x, document.body)
}

Dialog.defaultProps = {
  maskClosable: false,
  isAlert: false
}

const _alert = (content: string) => {
  const wrapper = document.createElement('div')

  const component = (
    <Dialog
      visible={true}
      isAlert={true}
      onCancel={() => {
        ReactDOM.render(
          React.cloneElement(component, { visible: false }),
          wrapper
        )
        ReactDOM.unmountComponentAtNode(wrapper)
        wrapper.remove()
      }}
      onOK={() => {}}
    >
      {content}
    </Dialog>
  )
  document.body.append(wrapper)
  ReactDOM.render(component, wrapper)
}

const _confirm = (content: string, yes?: () => void, no?: () => void) => {
  const wrapper = document.createElement('div')
  const component = (
    <Dialog
      visible={true}
      onCancel={() => {
        ReactDOM.render(
          React.cloneElement(component, { visible: false }),
          wrapper
        )
        ReactDOM.unmountComponentAtNode(wrapper)
        wrapper.remove()
        no && no()
      }}
      onOK={() => {
        ReactDOM.render(
          React.cloneElement(component, { visible: false }),
          wrapper
        )
        ReactDOM.unmountComponentAtNode(wrapper)
        wrapper.remove()
        yes && yes()
      }}
    >
      {content}
    </Dialog>
  )
  document.body.append(wrapper)
  ReactDOM.render(component, wrapper)
}

const _modal = (content: ReactNode | ReactFragment) => {
  const wrapper = document.createElement('div')

  const component = (
    <Dialog
      visible={true}
      onCancel={() => {
        ReactDOM.render(
          React.cloneElement(component, { visible: false }),
          wrapper
        )
        ReactDOM.unmountComponentAtNode(wrapper)
        wrapper.remove()
      }}
      onOK={() => {
        ReactDOM.render(
          React.cloneElement(component, { visible: false }),
          wrapper
        )
        ReactDOM.unmountComponentAtNode(wrapper)
        wrapper.remove()
      }}
    >
      {content}
    </Dialog>
  )
  document.body.append(wrapper)
  ReactDOM.render(component, wrapper)
}

export { _alert, _confirm, _modal }

export default Dialog

//TODO: 三个api 按钮显示优化和代码重构
