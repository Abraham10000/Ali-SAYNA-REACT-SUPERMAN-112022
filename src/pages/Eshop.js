import React from 'react'
import ProductList from '../components/ProductList'
import { useState } from 'react'
import Cart from '../components/Cart'


function Eshop() {
  const [cart, updateCart] = useState([])
    return (
        <>
          <div>
          <Cart cart={cart} updateCart={updateCart}/>
          <ProductList cart={cart} updateCart={updateCart}/>
          </div> 
        </>
  )
}

export default Eshop
