// this is the entry point of the app
// vite looks for this file first (check index.html, it links to this)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// StrictMode just helps catch bugs during development, doesn't affect production
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
