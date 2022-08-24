import { CategoryItem } from "../categories/categories.actionTypes";

export enum CartTypes {
  SET_CART_ITEMS = "cart/SET_CART_ITEMS",
  OPEN_CART_DROPDOWN = "cart/OPEN_CART_DROPDOWN",
}

export type CartItem = CategoryItem & {
  quantity: number;
};
