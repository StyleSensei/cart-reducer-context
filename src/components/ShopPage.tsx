import { Item } from "../models/Item"
import { ActionType } from "../enums/ActionType"
import { IAction } from "../models/IAction"
import { useCart, useCartDispatch } from "../contexts/CartContext"


export const ShopPage = () => {

const cart = useCart()
const dispatch = useCartDispatch()

  const items: Item[] = [
    new Item("Banan"),
    new Item("Melon"),
    new Item("Kiwi"),
    new Item("Citron")
  ]

  const handleAdd = (item: Item) => {
    let action: IAction
    const notInCart = !cart.find((cartItem) => cartItem.text === item.text)
    if (notInCart) {

      action = {
        type: ActionType.ADDED,
        payload: item.text
      }
    } else {
      const matchingCartItem = cart.find((cItem) => cItem.text === item.text) as Item

      action = {
        type: ActionType.INCREASED,
        payload: matchingCartItem.id.toString()
      }
    }
    dispatch(action)
  }

  return (
    <>
      <h2>List</h2>
      <div className="list-container">
        <ul>
          {items.map((item, i) => (
            <li key={i} onClick={() => handleAdd(item)}>
              <button>{item.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}