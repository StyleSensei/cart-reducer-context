import { ActionType } from '../enums/ActionType';
import { IAction } from '../models/IAction';
import { Item } from '../models/Item';

export const CartReducer = (cart: Item[], action: IAction): Item[] => {
  switch (action.type) {
    case ActionType.DECREASED:
      return cart.map((item) => {
        if (item.id === +action.payload) {
          if (item.amount > 1) {
            return { ...item, amount: item.amount - 1 };
          }
        }
        return item;
      });

    case ActionType.INCREASED:
      return cart.map((item) => {
        if (item.id === +action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });

    case ActionType.ADDED:
      
      return [...cart, new Item(action.payload)];

      
      case ActionType.REMOVED:
        return cart.filter((item) => item.id !== +action.payload);
        
        default:
          return cart;
  }
};
