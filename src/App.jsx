import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
// import RegisterPage from './components/RegisterPage'
// import LoginPage from './components/LoginPage'
import Cart from './pages/Cart'
import Pizza from './pages/Pizza'
import Footer from './components/Footer'

function App() {
  return (
    <div className="layout">
      {/* SOLO SE MOSTRARÁN LOS COMPONENTES NAVBAR, HOME Y FOOTER */}
      <Navbar />
      <Home />
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      {/* <Cart /> */}
      {/* <Pizza /> */}
      <Footer />
    </div>
  )
}

export default App
