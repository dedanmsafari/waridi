import React, { memo } from "react";
import "./cart-item.styles.scss";

const CartItem = memo(({ product }) => {
  const { name, quantity, imageUrl, price } = product;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <h2 className="name">{name}</h2>
        <span className="price">
          {quantity} * ${price}
        </span>
      </div>
    </div>
  );
});

export default CartItem;
