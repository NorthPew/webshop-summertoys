import React, { useState, useContext, createContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routeConfig'

const Wrapper = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = product => {
    setCart((prevCart) => [...prevCart, product])
  }
  
  const deleteFromCart = productId => {
  setCart((prevCart) => prevCart.filter((product) => product.id !== productId))
  }

  return (
      <CartContext.Provider value={{cart, setCart, addToCart, deleteFromCart}}>
          {children}
      </CartContext.Provider>
  )
}

export const CartContext = createContext({cart: [], setCart: () => {}})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Wrapper>
        <RouterProvider router={router} />
    </Wrapper>
  </React.StrictMode>,
)
