import React, { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import { CartDropdownContext } from "../../contexts/cartDropdown.context";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, totalCost } = useContext(CartDropdownContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Products</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}
      <span className="total">Total: ${totalCost}</span>
    </div>
  );
};

export default Checkout;
