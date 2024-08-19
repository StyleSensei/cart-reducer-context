import { NavLink, Outlet } from "react-router-dom"
import { CartProvder } from "../components/CartProvider"

export const Layout = () => {
    return (
        <>
            <CartProvder>

                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to={"/"}>Home</NavLink>
                            </li>

                            <li>
                                <NavLink to={"/shop"}>Shop</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/checkout"}>Checkout</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>

                <main>
                    <Outlet></Outlet>
                </main>
            </CartProvder>
        </>
    )
}