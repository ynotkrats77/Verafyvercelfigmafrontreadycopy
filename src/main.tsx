import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/globals.css'

// Build Version: 2025-01-14-v6 - Fixed aria-hidden + aggressive image blocking
console.log('Verafy AI Portfolio Intelligence - Build: 2025-01-14-v6');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)