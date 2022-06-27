import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartDropdownContext } from "../../contexts/cartDropdown.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems, setOpenDropdown } = useContext(CartDropdownContext);
  const navigate = useNavigate();

  const onCheckOutHandler = () => {
    setOpenDropdown();
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem product={item} key={item.id} />
        ))}
      </div>

      <Button onClick={onCheckOutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
