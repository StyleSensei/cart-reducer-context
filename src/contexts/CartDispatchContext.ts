import { createContext, Dispatch, useContext } from "react"
import { IAction } from "../models/IAction"

export const CartDispatchContext = createContext<Dispatch<IAction>>(()=>{return})

export const useCartDispatch = () => useContext(CartDispatchContext)

