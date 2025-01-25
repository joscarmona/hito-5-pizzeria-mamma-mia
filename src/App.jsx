import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
// import RegisterPage from './components/RegisterPage'
// import LoginPage from './components/LoginPage'
import Cart from './components/Cart'
import Pizza from './components/Pizza'
import Footer from './components/Footer'

function App() {
  return (
    <div className="layout">
      {/* SOLO SE MOSTRARÁN LOS COMPONENTES NAVBAR, HOME Y FOOTER */}
      <Navbar />
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      {/* <Cart /> */}
      <Pizza />
      <Footer />
    </div>
  )
}

export default App
