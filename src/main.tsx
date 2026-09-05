import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.tsx'
import CheckMate from './CheckMate.tsx'

const redirect = sessionStorage.getItem('redirect')

if (redirect) {
  sessionStorage.removeItem('redirect')
  window.history.replaceState(null, '', redirect)
}

const path = window.location.pathname

const Page =
  path === '/portfolio/work/checkmate' ? CheckMate : App

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)