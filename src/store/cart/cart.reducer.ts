import { CartTypes } from "./cart.actionTypes";

const INITIAL_STATE = {
  openDropdown: false,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CartTypes.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };

    case CartTypes.OPEN_CART_DROPDOWN:
      return {
        ...state,
        openDropdown: !state.openDropdown,
      };

    default:
      return state;
  }
};
