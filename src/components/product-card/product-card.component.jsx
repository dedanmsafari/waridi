import React from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { addItemToCart } from "../../store/cart/cart.actions";
import { useDispatch, useSelector } from "react-redux";

import {
  Footer,
  Name,
  Price,
  ProductButton,
  ProductCardContainer,
} from "./product-card.styles";
import { selectCartItems } from "../../store/cart/cart.selectors";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>

      <ProductButton
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        ADD TO CART
      </ProductButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
