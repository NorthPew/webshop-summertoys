import {useState, useContext, createContext } from "react"

export const CartContext = createContext({cart: [], setCart: () => {}})

const Wrapper = ({ children }) => {

    // Cart
    const [cart, setCart] = useState([])

  
    const addToCart = product => {
      setCart((prevCart) => [...prevCart, product])
    }
    
    const deleteFromCart = productId => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId))
    }

    // Logged in
    const [isLoggedIn, setIsLoggedIn] = useState(false)
  
    return (
        <CartContext.Provider value={{cart, setIsLoggedIn, isLoggedIn, setCart, addToCart, deleteFromCart}}>
            {children}
        </CartContext.Provider>
    )
  }

export default Wrapper