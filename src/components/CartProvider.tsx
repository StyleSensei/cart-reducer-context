import { useReducer, useEffect } from "react"
import { CartReducer } from "../reducers/CartReducer"
import { CartContext, CartDispatchContext } from "../contexts/CartContext"

export const CartProvder = ({ children }) => {

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