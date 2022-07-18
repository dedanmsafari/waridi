import React, { useState, createContext, useEffect, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";
export const CartDropdownContext = createContext({
  openDropdown: false,
  setOpenDropdown: () => null,
  cartItems: [],
  addItemToCart: () => null,
  removeFromCart: () => null,
  decreaseFromCart: () => null,
  cartTotal: 0,
  totalCost: 0,
});
const INITIAL_STATE = {
  openDropdown: false,
  cartItems: [],
  cartTotal: 0,
  totalCost: 0,
};

const CartAction = {
  ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  DECREASE_FROM_CART: " DECREASE_FROM_CART",
  OPEN_CART_DROPDOWN: "OPEN_CART_DROPDOWN",
  GET_TOTAL_CART_ITEMS: "GET_TOTAL_CART_ITEMS",
  GET_TOTAL_PRICE: "GET_TOTAL_PRICE",
  UPDATE_CART_REDUCER: "UPDATE_CART_REDUCER",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CartAction.ADD_ITEM_TO_CART:
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

    case CartAction.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: payload.remainingProducts,
      };

    case CartAction.DECREASE_FROM_CART:
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

    case CartAction.OPEN_CART_DROPDOWN:
      return {
        ...state,
        openDropdown: !state.openDropdown,
      };

    case CartAction.UPDATE_CART_REDUCER:
      return {
        ...state,
        totalCost: payload.updatedTotal,
        cartTotal: payload.totalCartItems,
      };

    default:
      throw new Error(`Could not handle type ${type} of  cartReducer`);
  }
};

const CartDropdownProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { openDropdown, cartItems, cartTotal, totalCost } = state;
  const addItemToCart = (payload) => {
    dispatch(createAction(CartAction.ADD_ITEM_TO_CART, payload));
  };

  const removeFromCart = (payload) => {
    const remainingProducts = cartItems.filter(
      (cartItem) => cartItem !== payload
    );
    const leftProducts = { remainingProducts };

    dispatch(createAction(CartAction.REMOVE_FROM_CART, leftProducts));
  };

  const decreaseFromCart = (payload) => {
    dispatch(createAction(CartAction.DECREASE_FROM_CART, payload));
  };

  const setOpenDropdown = () => {
    dispatch(createAction(CartAction.OPEN_CART_DROPDOWN));
  };

  const updateCartItemsReducer = (state) => {
    const getTotal = (cartCount, cartItem) => {
      return cartCount + cartItem.quantity * cartItem.price;
    };
    const updatedTotal = state.cartItems.reduce(getTotal, 0);

    const getItems = (cartCount, cartItem) => {
      return cartCount + cartItem.quantity;
    };
    const totalCartItems = state.cartItems.reduce(getItems, 0);
    const payload = {
      updatedTotal, //CartTotal
      totalCartItems, //CartCount.
    };
    return createAction(CartAction.UPDATE_CART_REDUCER, payload);
  };

  useEffect(() => {
    dispatch(updateCartItemsReducer(state));
  }, [cartItems]);

  const value = {
    openDropdown,
    setOpenDropdown,
    addItemToCart,
    cartItems,
    cartTotal,
    removeFromCart,
    decreaseFromCart,
    totalCost,
  };
  return (
    <CartDropdownContext.Provider value={value}>
      {children}
    </CartDropdownContext.Provider>
  );
};

export default CartDropdownProvider;
