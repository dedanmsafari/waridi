import React, { memo } from "react";
import { useSelector } from "react-redux";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { PaymentForm } from "../../components/payment-form/payment-form.component";

import {
  selectCartItems,
  selectTotalCost,
} from "../../store/cart/cart.selectors";

import "./checkout.styles.scss";

const Checkout = memo(() => {
  const cartItems = useSelector(selectCartItems);
  const totalCost = useSelector(selectTotalCost);
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
      <PaymentForm />
    </div>
  );
});

export default Checkout;
