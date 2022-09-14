import { createSelector } from "reselect";
import { CartState } from "./cart.reducer";

const selectCartReducer = (state): CartState => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectOpenDropDown = createSelector(
  [selectCartReducer],
  (cart) => cart.openDropdown
);

export const selectTotalCost = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((cartCount, cartItem) => {
      return cartCount + cartItem.quantity * cartItem.price;
    }, 0);
  }
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((cartCount, cartItem) => {
      return cartCount + cartItem.quantity;
    }, 0);
  }
);
