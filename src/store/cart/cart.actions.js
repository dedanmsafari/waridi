import { CategoryItem } from "../categories/categories.actionTypes";
import { createAction, withMatcher } from "../../utils/reducer/reducer.utils";
import { CartTypes, CartItem } from "./cart.actionTypes";

export const addItemToCart = (payload) =>
  createAction(CartTypes.ADD_ITEM_TO_CART, payload);

export const removeFromCart = (payload) =>
  createAction(CartTypes.REMOVE_FROM_CART, payload);

export const decreaseFromCart = (payload) =>
  createAction(CartTypes.DECREASE_FROM_CART, payload);

export const setOpenDropdown = () => createAction(CartTypes.OPEN_CART_DROPDOWN);
