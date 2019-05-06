import React, { useState } from 'react'
import Dialog from './dialog'

export default function() {
  const [x, setX] = useState(false)

  return (
    <div>
      <button onClick={() => setX(!x)}>button</button>
      <Dialog visible={x}>div.dialog</Dialog>
    </div>
  )
}
