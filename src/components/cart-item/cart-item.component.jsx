import React from "react";

const CartItem = ({ product }) => {
  const { name, quantity } = product;
  return (
    <div>
      <h2>{name}</h2>
      <span>{quantity}</span>
    </div>
  );
};

export default CartItem;
