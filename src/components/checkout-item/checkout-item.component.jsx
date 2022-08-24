import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selectors";
import {
  removeFromCart,
  addItemToCart,
  decreaseFromCart,
} from "../../store/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const clearItemHandler = () => {
    dispatch(removeFromCart(cartItems, item));
  };
  const decreaseItemHandler = () => {
    dispatch(decreaseFromCart(cartItems, item));
  };
  const increaseItemHandler = () => {
    dispatch(addItemToCart(cartItems, item));
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
