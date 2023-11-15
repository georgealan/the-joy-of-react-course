import React from 'react'
import { createRoot } from 'react-dom/client'

function FriendlyGreeting() {
  return (
    <p style={{ fontSize: '1.25rem', textAlign: 'center', color: 'sienna', }}>
      Greetings, weary travelers!
    </p>
  )
}

const container = document.querySelector('#root')
const root = createRoot(container)
root.render(<FriendlyGreeting />)
