import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './router/index.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { ProductsProvider } from './context/ProductsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductsProvider>
      <AuthProvider elements={<Router />} />
    </ProductsProvider>
  </StrictMode>,
)
