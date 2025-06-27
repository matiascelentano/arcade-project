import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";

const router = createBrowserRouter([
   { path:"/",
    element:<App/>,
    children:[
        {
            index:true,
            element:<Home/>
        },
        {
            path:'/products',
            element:<h1>Productos</h1>
        },
        {
            path: '/products/:productId',
            element: <ProductDetail/>
        },

    ]},
    {
        path:"*",
        element:<div>404 Pagina no encontrada</div>
    }
])

export default function Router(){
    return <RouterProvider router={router}/>
}
