import React, { useState, createContext, useEffect, useReducer } from "react";

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
      const savedProducts = state.cartItems.filter(
        (cartItem) => cartItem !== payload
      );

      return {
        ...state,
        cartItems: savedProducts,
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
    case CartAction.GET_TOTAL_CART_ITEMS:
      const getItems = (cartCount, cartItem) => {
        return cartCount + cartItem.quantity;
      };
      const totalCartItems = state.cartItems.reduce(getItems, 0);
      return {
        ...state,
        cartTotal: totalCartItems,
      };

    case CartAction.GET_TOTAL_PRICE:
      const getTotal = (cartCount, cartItem) => {
        return cartCount + cartItem.quantity * cartItem.price;
      };
      const updatedTotal = state.cartItems.reduce(getTotal, 0);

      return {
        ...state,
        totalCost: updatedTotal,
      };

    default:
      throw new Error(`Could not handle type ${type} of  cartReducer`);
  }
};

const CartDropdownProvider = ({ children }) => {
  const [{ openDropdown, cartItems, cartTotal, totalCost }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const addItemToCart = (payload) => {
    dispatch({ type: CartAction.ADD_ITEM_TO_CART, payload: payload });
  };

  const removeFromCart = (payload) => {
    dispatch({ type: CartAction.REMOVE_FROM_CART, payload: payload });
  };

  const decreaseFromCart = (payload) => {
    dispatch({ type: CartAction.DECREASE_FROM_CART, payload: payload });
  };

  const setOpenDropdown = () => {
    dispatch({ type: CartAction.OPEN_CART_DROPDOWN });
  };

  useEffect(() => {
    dispatch({ type: CartAction.GET_TOTAL_CART_ITEMS });
  }, [cartItems]);

  useEffect(() => {
    dispatch({ type: CartAction.GET_TOTAL_PRICE });
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
