import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './router/index.jsx'
import AuthContext from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext.Provider value={{user:{id:1, name:'Juan'}}}>
      <Router />
    </AuthContext.Provider>
  </StrictMode>,
)
