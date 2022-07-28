import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setOpenDropdown } from "../../store/cart/cart.actions";
import { selectCartItems } from "../../store/cart/cart.selectors";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {
  CartContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onCheckOutHandler = () => {
    dispatch(setOpenDropdown());
    navigate("/checkout");
  };
  return (
    <CartContainer>
      {cartItems.length ? (
        <CartItems>
          {cartItems.map((item) => (
            <CartItem product={item} key={item.id} />
          ))}
        </CartItems>
      ) : (
        <EmptyMessage>Your Cart is Empty</EmptyMessage>
      )}
      <Button onClick={onCheckOutHandler}>GO TO CHECKOUT</Button>
    </CartContainer>
  );
};

export default CartDropdown;
