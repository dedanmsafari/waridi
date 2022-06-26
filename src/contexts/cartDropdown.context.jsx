import React, { useState, createContext, useEffect } from "react";

export const CartDropdownContext = createContext({
  openDropdown: false,
  setOpenDropdown: () => null,
  cartItems: [],
  addItemToCart: () => null,
  cartTotal: 0,
});

const CartDropdownProvider = ({ children }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

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

  useEffect(() => {
    const getItems = (cartCount, cartItem) => {
      return cartCount + cartItem.quantity;
    };
    const totalCartItems = cartItems.reduce(getItems, 0);

    setCartTotal(totalCartItems);
  }, [cartItems]);

  const value = {
    openDropdown,
    setOpenDropdown: () => setOpenDropdown(!openDropdown),
    addItemToCart,
    cartItems,
    cartTotal,
  };
  return (
    <CartDropdownContext.Provider value={value}>
      {children}
    </CartDropdownContext.Provider>
  );
};

export default CartDropdownProvider;
