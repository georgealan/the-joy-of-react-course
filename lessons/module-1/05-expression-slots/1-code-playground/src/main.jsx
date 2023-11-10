import React from 'react'
import { createRoot } from 'react-dom/client'

const shoppingList = ['apple', 'banana', 'carrot', 'pineaple']
const uniqueId = 'content-wrapper'

// This code...
const element = (
  <div id={uniqueId}>
    Items left to purchase: {shoppingList.length}
    {/* Here we can add comments to our jsx dont use sigle line comments // because it escape all sintax */}
  </div>
)

// Is equivalent to this code
const compiledElement = React.createElement(
  'div',
  {},
  'Items left to purchase: ',
  shoppingList.length
)

const container = document.querySelector('#root')
const root = createRoot(container)
root.render(element)