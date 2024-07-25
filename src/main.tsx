import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'
import { Toaster } from './components/ui/toaster.tsx'
import { Header } from './components/Header.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <App />
    <Toaster />
  </React.StrictMode>,
)
