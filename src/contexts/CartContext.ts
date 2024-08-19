import { createContext,  useContext } from "react";
import { Item } from "../models/Item";

export const CartContext = createContext<Item[]>([])

export const useCart = () => useContext(CartContext)

