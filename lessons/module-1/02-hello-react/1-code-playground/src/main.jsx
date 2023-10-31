import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// React.createElement is a function that accepts 3 or more arguments:
const element = React.createElement(
  'h1', // HTML Tag
  { id: 'hello' }, // ID of the element
  'Hello World George' // Element content
)

ReactDOM.createRoot(document.querySelector('#root')).render(element)
