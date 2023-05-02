import { createHashRouter } from "react-router-dom";

import Root from './routes/Root'
import Start from "./routes/Start"
import Products from "./routes/Products"

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
            element: <ProductDetails />,
            loader: productsLoader
        },
        {
            path: 'cart',
            element: <Cart />
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