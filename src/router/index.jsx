import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import ProtectedRoute from "../components/ProtectedRoute";
import AdminDashboard from "../pages/AdminDashboard";
import AdminRoute from "../components/AdminRoute";
import AdminProducts from "../components/AdminProducts";
import AdminUsers from "../components/AdminUsers";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/products',
                element: <h1>Productos</h1>
            },
            {
                path: '/products/:productId',
                element: <ProductDetail />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/cart',
                element: <ProtectedRoute element={<Cart />} />
            },
            {
                path: '/admin/dashboard',
                element: <AdminRoute element={<AdminDashboard />} />, //TODO: Cambiar devuelta a AdminRoute
                children: [
                    {
                        index: true,
                        element: <Navigate to="/admin/dashboard/products"/>
                    },
                    {
                        path: '/admin/dashboard/products',
                        element: <AdminProducts />
                    },
                    {
                        path: '/admin/dashboard/users',
                        element: <AdminUsers />
                    }
                ]
            }
        ]
    },
    {
        path: "*",
        element: <div>404 Pagina no encontrada</div>
    }
])

export default function Router() {
    return <RouterProvider router={router} />
}
