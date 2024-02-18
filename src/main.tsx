import './globals.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './app'
import { Toaster } from './components/ui/sonner'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Toaster theme="light" richColors />
  </React.StrictMode>,
)
