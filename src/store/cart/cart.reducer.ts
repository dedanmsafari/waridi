import { CartItem } from "./cart.actionTypes";
import { AnyAction } from "redux";
import { setOpenDropdown, setCartItems } from "./cart.actions";

export type CartState = {
  openDropdown: boolean;
  cartItems: CartItem[];
};
const INITIAL_STATE: CartState = {
  openDropdown: false,
  cartItems: [],
};

export const cartReducer = (
  state = INITIAL_STATE,
  action: AnyAction
): CartState => {
  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }
  if (setOpenDropdown.match(action)) {
    return {
      ...state,
      openDropdown: !state.openDropdown,
    };
  }

  return state;
};
