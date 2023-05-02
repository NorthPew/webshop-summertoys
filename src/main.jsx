import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routeConfig'
import { createContext } from 'react'

const CartContext = createContext()

const addToCart = product => {
  setCart((prevCart) => [...prevCart, product])
}

const deleteFromCart = productId => {
  setCart((prevCart) => prevCart.filter((product) => product.id !== productId))
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartContext.Provider value={{addToCart, deleteFromCart}}>
      <RouterProvider router={router} />
    </CartContext.Provider>
  </React.StrictMode>,
)
