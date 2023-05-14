import { createHashRouter } from "react-router-dom";

import Root from "./routes/Root";
import Start from "./routes/Start";
import Products, {loader as productsLoader} from "./routes/Products";
import ProductDetails from "./routes/ProductDetails"
import Cart from "./routes/Cart";
import CustomerSupport from "./routes/CustomerSupport";
import AdminStart from "./routes/AdminStart";
import EditUsers, {loader as usersLoader} from "./routes/EditUsers";
import UserStart from "./routes/UserStart";
import Error from "./routes/Error"
import AddProduct from "./routes/AddProduct";
import EditProducts from "./routes/EditProducts";
import AddUser from "./routes/AddUser";



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
            path: 'customer-support',
            element: <CustomerSupport />
        },
        {
            path: 'user',
            element: <UserStart />
        },
        {
            path: 'admin',
            element: <AdminStart />,
            children: [
                {
                    path: 'products',
                    element: <EditProducts />,
                    loader: productsLoader
                },
                {
                    path: 'users',
                    element: <EditUsers />,
                    loader: usersLoader
                },
                {
                    path: 'add-product',
                    element: <AddProduct />
                },
                {
                    path: 'edit-products',
                    element: <EditProducts />,
                    loader: productsLoader
                },
                {
                    path: 'add-user',
                    element: <AddUser />
                },
                {
                    path: 'edit-users',
                    element: <EditUsers />,
                    loader: usersLoader
                }
            ]
        }    
    ],
        errorElement: <Error />
    }
])

export { router }