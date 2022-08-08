import React from "react";
import { useDispatch } from "react-redux";

import {
  removeFromCart,
  addItemToCart,
  decreaseFromCart,
} from "../../store/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ item }) => {
  const dispatch = useDispatch();

  const clearItemHandler = () => {
    dispatch(removeFromCart(item));
  };
  const decreaseItemHandler = () => {
    dispatch(decreaseFromCart(item));
  };
  const increaseItemHandler = () => {
    dispatch(addItemToCart(item));
  };

  const { imageUrl, name, quantity, price } = item;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={decreaseItemHandler}>
          {" "}
          &#10096;{" "}
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={increaseItemHandler}>
          {" "}
          &#10097;{" "}
        </div>
      </span>

      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10006;
      </div>
    </div>
  );
};

export default CheckoutItem;
