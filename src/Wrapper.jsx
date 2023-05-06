import {useState, useContext, createContext } from "react"

export const CartContext = createContext({cart: [], setCart: () => {}})

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

export default Wrapper