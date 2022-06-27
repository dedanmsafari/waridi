import React, { useState, createContext, useEffect } from "react";

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

const CartDropdownProvider = ({ children }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const addItemToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCart = cartItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      setCartItems(updatedCart);
    } else {
      const updatedCart = [...cartItems, { ...product, quantity: 1 }];

      return setCartItems(updatedCart);
    }
  };

  const removeFromCart = (product) => {
    const savedProduct = cartItems.filter((cartItem) => cartItem !== product);

    setCartItems(savedProduct);
  };

  const decreaseFromCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem.quantity === 1) {
      return removeFromCart(existingItem);
    }

    const decreasedCart = cartItems.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    });
    setCartItems(decreasedCart);
  };

  useEffect(() => {
    const getItems = (cartCount, cartItem) => {
      return cartCount + cartItem.quantity;
    };
    const totalCartItems = cartItems.reduce(getItems, 0);

    setCartTotal(totalCartItems);
  }, [cartItems]);

  useEffect(() => {
    const getTotal = (cartCount, cartItem) => {
      return cartCount + cartItem.quantity * cartItem.price;
    };
    const totalCost = cartItems.reduce(getTotal, 0);

    setTotalCost(totalCost);
  }, [cartItems]);

  const value = {
    openDropdown,
    setOpenDropdown: () => setOpenDropdown(!openDropdown),
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
