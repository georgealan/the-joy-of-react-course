import React from 'react'
import { createRoot } from 'react-dom/client'
import video from './videos/cat-skateboarding.mp4'

const element = (
  <video
    src={video}
    autoPlay={true}
  />
)

const container = document.querySelector('#root')
const root = createRoot(container)
root.render(element)
