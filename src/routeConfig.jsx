import { createHashRouter } from "react-router-dom";


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
            element: <Products />,
            loader: productsLoader
        },
        {
            path: 'products/:id',
            element:<ProductDetails />,
            loader: productsLoader
        },
        {
            path: 'cart',
            element: <Cart />
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