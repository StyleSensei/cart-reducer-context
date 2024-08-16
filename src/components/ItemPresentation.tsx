import { Item } from "../models/Item";


interface IItemProps {
  item: Item;
  decrease: (decItem: Item) => void
  increase: (incItem: Item) => void
  remove: (remItem: Item) => void
}

export const ItemPresentation = ({ item, decrease, increase, remove }: IItemProps) => {




  return (
    <>
      <li>
        {item.amount <=1 && <button onClick={() => remove(item)}>–</button>}
        {item.amount >1 && <button onClick={() => decrease(item)}>–</button>}
        <span>{item.text}</span>
        <span> {item.amount} st</span>
        <button onClick={() => increase(item)}>+</button>
      </li>
    </>
  );
};
