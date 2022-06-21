import React from "react";

import { ReactComponent as Shopping } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  return (
    <div className="cart-icon-container">
      <Shopping className="shopping-icon" />
      <span className="item-count">10</span>
    </div>
  );
};

export default CartIcon;
