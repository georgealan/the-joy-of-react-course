import React from 'react'
import { createRoot } from 'react-dom/client'

// JSX sintax
const element = (
  <p id='hello'>
    Hello World George!
  </p>
)

const container = document.querySelector('#root')
const root = createRoot(container)
root.render(element)
