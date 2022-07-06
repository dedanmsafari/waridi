import React from "react";

import { CartContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles.jsx";

const CartIcon = ({ cartTotal }) => {
  return (
    <CartContainer>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{cartTotal}</ItemCount>
    </CartContainer>
  );
};

export default CartIcon;
