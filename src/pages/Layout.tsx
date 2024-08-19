import { NavLink, Outlet } from "react-router-dom"
import { CartProvder } from "../components/CartProvider"
import { ITheme, ThemeContext, themes } from "../contexts/ThemeContext"
import { useState } from "react"


export const Layout = () => {
const [theme,setTheme] = useState<ITheme>(themes.sad)

const toggleTheme = ()=> {
    setTheme(theme.name === themes.happy.name ? themes.sad : themes.happy)
}

    return (
        <>
        <ThemeContext.Provider value={theme}>

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
                <button onClick={toggleTheme}>
                    byt temma :)
                </button>

                <main>
                    <Outlet></Outlet>
                </main>
            </CartProvder>
        </ThemeContext.Provider>
        </>
    )
}