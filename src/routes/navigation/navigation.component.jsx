import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { selectCurrentUser } from "../../store/user/user.selectors";

import {
  LogoContainer,
  NavLink,
  NavLinksContainer,
  NavigationContainer,
} from "./navigation.styles";

import { setOpenDropdown } from "../../store/cart/cart.actions";
import {
  selectCartTotal,
  selectOpenDropDown,
} from "../../store/cart/cart.selectors";
import { signOutUserStart } from "../../store/user/user.actions";

export default function Navigation() {
  const currentUser = useSelector(selectCurrentUser);
  const openDropdown = useSelector(selectOpenDropDown);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  const handleSignOut = () => dispatch(signOutUserStart());

  const toggleDropdown = () => dispatch(setOpenDropdown());
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <div>
            <Logo className="logo" />
          </div>
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={handleSignOut}>
              {" "}
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <div onClick={toggleDropdown}>
            <CartIcon cartTotal={cartTotal} />
          </div>
        </NavLinksContainer>
        {openDropdown ? <CartDropdown /> : null}
      </NavigationContainer>
      <Outlet />
    </>
  );
}
