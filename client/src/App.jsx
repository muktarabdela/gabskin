import { BrowserRouter, HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Works from './pages/Works'
import "./app.css"
import Cart from './pages/Cart'
import Footer from './components/footer/Footer'
import Account from './components/Account/account'
import CheckoutPage from "./components/checkOut/CheckOut"
import Admin from './pages/Admin'
import Page404 from './pages/Page404'
import AdminAuth from './components/Account/AdminAuth'
import About from './pages/About'
import Mini_stickers from './pages/Mini_stickers'
import Catalog from './components/catelog/Catalog'
import Transform from './pages/Transform'


const PrivateRoute = ({ element }) => {
  const token = localStorage.getItem('token');
  const isValidToken = typeof token === 'string' && token.length > 0;

  if (!isValidToken) {
    return <Navigate to="/login" />;
  }
  return element;
};

const App = () => {
  console.log('Rendering App');

  return (
    <>
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path="/cart" element={
            <>
              <Cart />
              <Footer />
            </>
          } />
          <Route path="/pricing" element={
            <>
              <Pricing />
              <Footer />
            </>
          } />
          <Route path="/catalog" element={
            <>
              <Mini_stickers />
              <Footer />
            </>
          } />
          <Route path="/works" element={
            <>
              <Works />
              <Footer />
            </>
          } />
          <Route path="/about" element={
            <>
              <About />
              <Footer />
            </>
          } />
          <Route path="/catalog" element={
            <>
              <Catalog />
              <Footer />
            </>
          } />
          <Route path="/transform" element={
            <>
              <Transform />
              <Footer />
            </>
          } />
          <Route path="/account/:userId" element={
            <>
              <Account />
              <Footer />
            </>
          } />
          <Route path="/login" element={<AdminAuth />} />
          <Route path="/admin" element={<PrivateRoute element={<Admin />} />} />
          <Route path='/checkout' element={
            <>
              <CheckoutPage />
              <div className='mt-[12em]'>
                <Footer />
              </div>
            </>
          } />
          <Route path="/" element={
            <>
              <Home />
              <Footer />
            </>
          } />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
