import { createContext, useContext } from "react";
import { Item } from "../models/Item";
import { IAction } from "../models/IAction";

export const CartContext = createContext<Item[]>([])
export const CartDispatchContext = createContext((obj:IAction)=>{})

export const useCart = () => useContext(CartContext)
export const useCartDispatch = () => useContext(CartDispatchContext)

