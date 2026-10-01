import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'

// Apply saved theme before first paint
const savedTheme = (() => {
  try { return localStorage.getItem('scribble_neet_theme') || 'light'; }
  catch { return 'light'; }
})();
if (savedTheme === 'dark') {
  document.documentElement.classList.add('dark');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
