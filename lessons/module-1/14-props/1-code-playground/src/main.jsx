import React from 'react'
import { createRoot } from 'react-dom/client'

// We can specify default values for each prop
function FriendlyGreeting({ name = 'there' }) {
  return (
    <p style={{ fontSize: '1.25rem', textAlign: 'center', color: 'sienna', }}>
    Greetings, {name}!
    </p>
  )
}

const root = createRoot(document.querySelector('#root'))

root.render(
  <div>
    <FriendlyGreeting name="George" />
    <FriendlyGreeting />
  </div>
)
