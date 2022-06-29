import React, { useContext } from "react";
import { Outlet } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import {
  LogoContainer,
  NavLink,
  NavLinksContainer,
  NavigationContainer,
} from "./navigation.styles";
import { CartDropdownContext } from "../../contexts/cartDropdown.context";

export default function Navigation() {
  const { currentUser } = useContext(UserContext);
  const { openDropdown, setOpenDropdown, cartTotal } =
    useContext(CartDropdownContext);

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
          <NavLink to="/contact">CONTACT</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={() => signOutUser()}>
              {" "}
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <div onClick={setOpenDropdown}>
            <CartIcon cartTotal={cartTotal} />
          </div>
        </NavLinksContainer>
        {openDropdown ? <CartDropdown /> : null}
      </NavigationContainer>
      <Outlet />
    </>
  );
}
