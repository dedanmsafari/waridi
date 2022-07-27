import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

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
    const getTotal = (cartCount, cartItem) => {
      return cartCount + cartItem.quantity * cartItem.price;
    };
    return cartItems.reduce(getTotal, 0);
  }
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => {
    const getItems = (cartCount, cartItem) => {
      return cartCount + cartItem.quantity;
    };
    return cartItems.reduce(getItems, 0);
  }
);
