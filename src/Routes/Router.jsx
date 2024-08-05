import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../Pages/AboutUs";
import Home from "../Pages/Home";
import MyCart from "../Pages/MyCart";
import ProductDetails from "../Pages/ProductDetails";
import MainLayout from "../Components/MainLayout";

const router=createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path:"/about-us",
                element:<AboutUs/>
            },
            {
                path:"/my-cart",
                element:<MyCart/>
            },
            {
                path:"/product-detail",
                element:<ProductDetails/>
            }
        ]
    }
]);

export default router