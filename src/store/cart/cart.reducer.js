import { CartTypes } from "./cart.actionTypes";

const INITIAL_STATE = {
  openDropdown: false,
  cartItems: [],
  cartTotal: 0,
  totalCost: 0,
};

export const cartReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CartTypes.ADD_ITEM_TO_CART:
      const existingItem = state.cartItems.find(
        (item) => item.id === payload.id
      );

      if (existingItem) {
        const updatedCart = state.cartItems.map((item) => {
          if (item.id === payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
        return { ...state, cartItems: updatedCart };
      } else {
        const updatedCart = [...state.cartItems, { ...payload, quantity: 1 }];

        return { ...state, cartItems: updatedCart };
      }

    case CartTypes.REMOVE_FROM_CART:
      const remainingProducts = state.cartItems.filter(
        (cartItem) => cartItem !== payload
      );
      return {
        ...state,
        cartItems: remainingProducts,
      };

    case CartTypes.DECREASE_FROM_CART:
      const includedItem = state.cartItems.find(
        (item) => item.id === payload.id
      );

      if (includedItem.quantity === 1) {
        const savedProducts = state.cartItems.filter(
          (cartItem) => cartItem !== includedItem
        );

        return {
          ...state,
          cartItems: savedProducts,
        };
      }

      const decreasedCart = state.cartItems.map((item) => {
        if (item.id === payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      return {
        ...state,
        cartItems: decreasedCart,
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
