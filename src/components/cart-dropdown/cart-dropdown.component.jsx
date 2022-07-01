import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartDropdownContext } from "../../contexts/cartDropdown.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {
  CartContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const { cartItems, setOpenDropdown } = useContext(CartDropdownContext);
  const navigate = useNavigate();

  const onCheckOutHandler = () => {
    setOpenDropdown();
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
