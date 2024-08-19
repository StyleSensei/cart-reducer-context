import { Item } from "../models/Item";
import { ItemPresentation } from "./ItemPresentation";
import { ActionType } from "../enums/ActionType";
import {  useCart } from "../contexts/CartContext";
import { useCartDispatch } from "../contexts/CartDispatchContext";


export const Cart = () => {

  const cart = useCart()
  const dispatch = useCartDispatch()
  
  const decrease = (item: Item) => {

    dispatch({
      type: ActionType.DECREASED,
      payload: item.id.toString(),
    })
  }

  const increase = (item: Item) => {
    dispatch({
      type: ActionType.INCREASED,
      payload: item.id.toString()
    })
  }

  const remove = (item: Item) => {
    dispatch({
      type: ActionType.REMOVED,
      payload: item.id.toString()
    })
  }

  return (
    <>
      <section className="cart-container">
      <h2>Cart</h2>
      <ul className="cart">

        {cart.map((item) => (
          <ItemPresentation key={item.id} item={item} decrease={decrease} increase={increase} remove={remove} />
          
        ))}

      </ul>
        </section>
    </>
  );
};
