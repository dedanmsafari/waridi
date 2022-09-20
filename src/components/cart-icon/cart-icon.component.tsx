import React from "react";

import { CartContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";

export type CartIconProps = {
  cartTotal: number;
};

const CartIcon = ({ cartTotal }: CartIconProps) => {
  return (
    <CartContainer>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{cartTotal}</ItemCount>
    </CartContainer>
  );
};

export default CartIcon;
