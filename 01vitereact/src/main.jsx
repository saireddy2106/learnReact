import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'

const anotherEle = <a href='https://google.com' target='_blank' >Visit Google</a>

const nextElement = "Learns from Chai aur React"

const reactElement = React.createElement(
 'a',
  {href : 'https://google.com',target:'_blank'},
  'Click me to visit google',
  nextElement
)

createRoot(document.getElementById('root')).render(
  <App />
  // reactElement
)
