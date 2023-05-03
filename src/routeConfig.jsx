import { createHashRouter } from "react-router-dom";
import { createContext, useState} from 'react'

import Root from "./routes/Root";
import Start from "./routes/Start";
import Products, {loader as productsLoader} from "./routes/Products";
import ProductDetails from "./routes/ProductDetails"
import Cart from "./routes/Cart";
import AboutUs from "./routes/AboutUs";
import CustomerSupport from "./routes/CustomerSupport";
import AdminStart from "./routes/AdminStart";
import EditProducts from "./routes/EditProducts";
import EditUsers from "./routes/EditUsers";
import Error from "./routes/Error"

export const CartContext = createContext()


const CartStuff = (product, productId) => {
    const [cart, setCart] = useState([])

    const addToCart = product => {
        setCart((prevCart) => [...prevCart, product])
    }

    const deleteFromCart = productId => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId))
    }

    return { addToCart, deleteFromCart };
}

const { addToCart, deleteFromCart } = CartStuff();

const router = createHashRouter([
    {
        path: '/',

        element: <Root />,
        children: [
        {
            path: '',
            element: <Start />
        },
         {
            path: 'products',
            element: 
                <CartContext.Provider value={{addToCart, deleteFromCart}}>
                <Products />
                </CartContext.Provider>,
            loader: productsLoader
        },
        {
            path: 'products/:id',
            element:
            <CartContext.Provider value={{addToCart, deleteFromCart}}>
                <ProductDetails />
                </CartContext.Provider>,
            loader: productsLoader
        },
        {
            path: 'cart',
            element: 
            <CartContext.Provider value={{addToCart, deleteFromCart}}>
                <Cart />
            </CartContext.Provider>
        },
        {
            path: 'about-us',
            element: <AboutUs />
        },
        {
            path: 'customer-support',
            element: <CustomerSupport />
        },
        {
            path: 'admin',
            element: <AdminStart />,
            children: [
                {
                    path: 'products',
                    element: <EditProducts />
                },
                {
                    path: 'users',
                    element: <EditUsers />
                }
            ]
        }    
    ],
        errorElement: <Error />
    }
])

export { router }