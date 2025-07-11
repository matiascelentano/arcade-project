import './App.css'
import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import Footer from './components/Footer'
import CartModal from './components/CartModal'

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartModal/>
    </>
  )
}

export default App

