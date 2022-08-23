import { CategoryItem } from "../categories/categories.actionTypes";

export enum CartTypes {
  ADD_ITEM_TO_CART = "cart/ADD_ITEM_TO_CART",
  REMOVE_FROM_CART = "cart/REMOVE_FROM_CART",
  DECREASE_FROM_CART = " cart/DECREASE_FROM_CART",
  OPEN_CART_DROPDOWN = "cart/OPEN_CART_DROPDOWN",
}

export type CartItem = CategoryItem & {
  quantity: number;
};
