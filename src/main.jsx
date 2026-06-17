import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MotionConfig } from 'framer-motion'

const isMobile = window.matchMedia("(pointer: coarse)").matches;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MotionConfig reducedMotion={isMobile ? "always" : "never"}>
      <App />
    </MotionConfig>
  </StrictMode>,
)
