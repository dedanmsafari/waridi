import React, { useState, createContext } from "react";

export const CartDropdownContext = createContext({
  openDropdown: false,
  setOpenDropdown: () => null,
  cartItems: [],
  addItemToCart: () => null,
});

const CartDropdownProvider = ({ children }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [cartItems, setCartItems] = useState([]);

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

  console.log(cartItems);

  const value = {
    openDropdown,
    setOpenDropdown: () => setOpenDropdown(!openDropdown),
    addItemToCart,
    cartItems,
  };
  return (
    <CartDropdownContext.Provider value={value}>
      {children}
    </CartDropdownContext.Provider>
  );
};

export default CartDropdownProvider;
