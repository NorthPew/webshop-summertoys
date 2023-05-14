import {useState, useContext, createContext } from "react"

export const CartContext = createContext({cart: [], setCart: () => {}})

const Wrapper = ({ children }) => {

    // Cart
    const [cart, setCart] = useState([])

  
    const addToCart = product => {

      const productExistInCart = cart.find((item) => item.id === product.id)

      if (productExistInCart) {
        const changedProductAmount = cart.map((item) => item.id === product.id ? {...item, amount: item.amount + 1} : item)
        setCart(changedProductAmount)
        console.log("updated item with new amount");
      } else {
        setCart((prevCart) => [...prevCart, {...product, amount: 1}])
        console.log("added new item");
      }

    }
    
    const deleteFromCart = productId => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId))
    }

    // Logged in
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  
    return (
        <CartContext.Provider value={{cart, setIsLoggedIn, isLoggedIn, isUserLoggedIn, setIsUserLoggedIn, setCart, addToCart, deleteFromCart}}>
            {children}
        </CartContext.Provider>
    )
  }

export default Wrapper