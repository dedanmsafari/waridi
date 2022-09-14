import { CategoryItem } from "../categories/categories.actionTypes";

import {
  createAction,
  withMatcher,
  Action,
  ActionWithPayload,
} from "../../utils/reducer/reducer.utils";

import { CartTypes, CartItem } from "./cart.actionTypes";
import { create } from "domain";

const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
  const existingItem = cartItems.find((item) => item.id === productToAdd.id);

  if (existingItem) {
    const updatedCart = cartItems.map((item) => {
      if (item.id === productToAdd.id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
    return updatedCart;
  } else {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

const removeCartItem = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem
): CartItem[] => {
  const remainingProducts = cartItems.filter(
    (cartItem) => cartItem !== cartItemToRemove
  );
  return remainingProducts;
};

const decreaseCartItem = (
  cartItems: CartItem[],
  cartItemToReduce: CartItem
): CartItem[] => {
  const includedItem = cartItems.find(
    (item) => item.id === cartItemToReduce.id
  );

  if (includedItem && includedItem.quantity === 1) {
    const savedProducts = cartItems.filter(
      (cartItem) => cartItem !== includedItem
    );

    return savedProducts;
  }

  const decreasedCart = cartItems.map((item) => {
    if (item.id === cartItemToReduce.id) {
      return { ...item, quantity: item.quantity - 1 };
    } else {
      return item;
    }
  });
  return decreasedCart;
};

export type setIsCartOpen = Action<CartTypes.OPEN_CART_DROPDOWN>;

export type setCartItems = ActionWithPayload<
  CartTypes.SET_CART_ITEMS,
  CartItem[]
>;

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): setCartItems =>
    createAction(CartTypes.SET_CART_ITEMS, cartItems)
);

export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
) => {
  const newCartItems = addCartItem(cartItems, productToAdd);

  return setCartItems(newCartItems);
};

export const removeFromCart = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem
) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);

  return setCartItems(newCartItems);
};

export const decreaseFromCart = (
  cartItems: CartItem[],
  cartItemtoReduce: CartItem
) => {
  const newCartItems = decreaseCartItem(cartItems, cartItemtoReduce);
  return setCartItems(newCartItems);
};

export const setOpenDropdown = withMatcher(
  (): setIsCartOpen => createAction(CartTypes.OPEN_CART_DROPDOWN)
);
