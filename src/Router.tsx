import { createBrowserRouter } from "react-router-dom";
import { ShopPage } from "./components/ShopPage";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { Checkout } from "./pages/Checkout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/shop",
                element: <ShopPage></ShopPage>
            },
            {
                path: "/checkout",
                element: <Checkout></Checkout>
            }
        ]
    }
])