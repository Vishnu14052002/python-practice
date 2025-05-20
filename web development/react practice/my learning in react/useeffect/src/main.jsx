import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Testing from './Testing.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    {/* <Testing/> */}
  </>
)
