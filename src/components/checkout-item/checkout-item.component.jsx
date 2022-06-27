import React, { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cartDropdown.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ item }) => {
  const { removeFromCart, addItemToCart, decreaseFromCart } =
    useContext(CartDropdownContext);

  const clearItemHandler = () => {
    removeFromCart(item);
  };
  const decreaseItemHandler = () => {
    decreaseFromCart(item);
  };
  const increaseItemHandler = () => {
    addItemToCart(item);
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
