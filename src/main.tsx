import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.tsx'
import CheckMate from './CheckMate.tsx'

const path = window.location.pathname

const Page = path === '/work/checkmate' ? CheckMate : App

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)