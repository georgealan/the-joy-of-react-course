import React from 'react'
import { createRoot } from 'react-dom/client'

// What happens if we pass both "forms" of the children prop?
const element = (
  <div children="As an attribute">
    Between the brackets
  </div>
)
/*
It appears that React chooses to prioritize the children passed in-between the 
open/close tags. This seems like the right call to me, since that's the 
more-conventional way to set an element's children!

was this an intentional design choice by the React team, or is it more that the 
children props get merged together, and the 2nd one wins?

Well, let's consider what the compiled JS would look like:

const element = React.createElement(
  'div',
  {
    children: 'As an attribute',
  },
  'Between the brackets',
);

We see that they're passed to the createElement function as two different arguments! 
This strongly suggests to me that the React team made an intentional decision, to 
manually overwrite the children value in the props object with the children argument 
supplied afterwards.
*/

const root = createRoot(document.querySelector('#root'))
root.render(element)
