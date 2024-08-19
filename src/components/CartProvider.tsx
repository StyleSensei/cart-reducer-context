import { useReducer, useEffect } from "react"
import { CartReducer } from "../reducers/CartReducer"
import { CartContext } from "../contexts/CartContext"
import { CartDispatchContext } from "../contexts/CartDispatchContext"

interface ICardProviderProps{
    children: JSX.Element | JSX.Element[]
}

export const CartProvder = ({ children }:ICardProviderProps) => {

    const [cart, dispatch] = useReducer(CartReducer,
        JSON.parse(localStorage.getItem('cart') || '[]')
    )
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))

    }, [cart])

    return (
        <CartContext.Provider value={cart}>
            <CartDispatchContext.Provider value={dispatch}>
                {children}
            </CartDispatchContext.Provider>
        </CartContext.Provider>
    )
}