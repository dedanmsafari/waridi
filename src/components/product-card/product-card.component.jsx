import React from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { addItemToCart } from "../../store/cart/cart.actions";
import { useDispatch, useSelector } from "react-redux";

import "./product-card.styles.scss";
import { selectCartItems } from "../../store/cart/cart.selectors";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        ADD TO CART
      </Button>
    </div>
  );
};

export default ProductCard;
