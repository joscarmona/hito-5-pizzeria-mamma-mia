import Navbar from './components/Navbar'
import Footer from './components/Footer'

/* PAGES */
import Home from './pages/Home'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import Cart from './pages/Cart'
import Pizza from './pages/Pizza'
import ProfilePage from './pages/ProfilePage'
import NotFound from './pages/NotFound'

/* COMPONENTES Routes & Route */
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <section className="layout">
      {/* SIEMPRE SE MOSTRARAN LOS COMPONENTES NAVBAR & FOOTER */}
      {/* *** Navbar *** */}
      <Navbar />      
      {/* RUTAS */}
      <Routes>
        {/* *** Home *** */}
        <Route path='/' element={<Home />} />
        {/* *** RegisterPage *** */}
        <Route path='/register' element={<RegisterPage />} />
        {/* *** LoginPage *** */}
        <Route path='/login' element={<LoginPage />} />
        {/* *** Cart *** */}
        <Route path='/cart' element={<Cart />} />
        {/* *** Pizza *** */}
        <Route path='/pizza' element={<Pizza />} />
        {/* *** ProfilePage *** */}
        <Route path='/profile' element={<ProfilePage /> } />
        {/* *** NotFound *** */}
        <Route path='*' element={<NotFound />} />
      </Routes>    
      {/* *** Footer *** */}
      <Footer />      
    </section>
  )
}

export default App
