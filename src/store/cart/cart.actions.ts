import { CategoryItem } from "../categories/categories.actionTypes";
import { createAction, withMatcher } from "../../utils/reducer/reducer.utils";
import { CartTypes, CartItem } from "./cart.actionTypes";

const addCartItem = (cartItems, productToAdd) => {
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

const removeCartItem = (cartItems, cartItemToRemove) => {
  const remainingProducts = cartItems.filter(
    (cartItem) => cartItem !== cartItemToRemove
  );
  return remainingProducts;
};

const decreaseCartItem = (cartItems, cartItemToReduce) => {
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

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);

  return createAction(CartTypes.SET_CART_ITEMS, newCartItems);
};
export const removeFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);

  return createAction(CartTypes.SET_CART_ITEMS, newCartItems);
};
export const decreaseFromCart = (cartItems, cartItemtoReduce) => {
  const newCartItems = decreaseCartItem(cartItems, cartItemtoReduce);
  return createAction(CartTypes.SET_CART_ITEMS, newCartItems);
};
export const setOpenDropdown = () => createAction(CartTypes.OPEN_CART_DROPDOWN);
