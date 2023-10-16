import './App.css';
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Home from './pages/Home'
import Footer from './components/Footer'
import Login from './pages/MonCompte/Login'
import Register from './pages/MonCompte/Register'
import ProductList from './components/ProductList'
import { useState } from 'react'
import Cart from './components/Cart'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [cart, updateCart] = useState([])
  return (
    <>
      <Router>
        <Navbar />
        <Intro />
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='Login' element = {<Login />}/>
          <Route path='Register' element = {<Register />}/>
        </Routes>      
        <div>
          <Cart cart={cart} updateCart={updateCart}/>
          <ProductList cart={cart} updateCart={updateCart}/>
        </div>
        <Footer />
      </Router>     
    </>
  );
}

export default App;
