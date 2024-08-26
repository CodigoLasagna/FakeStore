import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './pages/app'
import Navbar from './components/layout/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
