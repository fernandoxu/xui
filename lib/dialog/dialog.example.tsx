import React, { useState } from 'react'
import Dialog, { _alert, _confirm, _modal } from './dialog'

export default function() {
  const [x, setX] = useState(false)
  // const [y, setY] = useState(false)

  return (
    <>
      <div>
        <h1>example1</h1>
        <button onClick={() => setX(!x)}>button</button>
        <Dialog
          visible={x}
          onCancel={() => {
            setX(false)
          }}
          onOK={() => {
            console.log('OK')
            setX(false)
          }}
        >
          hi
        </Dialog>
      </div>
      {/* <div>
        <h1>example2</h1>
        <button onClick={() => setY(!y)}>button</button>
        <Dialog
          visible={y}
          onCancel={() => {
            setY(false)
          }}
          onOK={() => {
            console.log('OK')
            setY(false)
          }}
          maskClosable={true}
        >
          hi2
        </Dialog>
      </div>
      <div>
        <h1>example3 - alert</h1>
        <button
          onClick={() => {
            _alert('1')
          }}
        >
          alert
        </button>
        <button
          onClick={() => {
            _confirm(
              'confirm',
              () => {
                console.log('yes')
              },
              () => {
                console.log('no')
              }
            )
          }}
        >
          confirm
        </button>
        <button onClick={() => _modal(<h1>hello world</h1>)}>model</button>
      </div> */}
    </>
  )
}
