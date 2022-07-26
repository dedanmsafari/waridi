import React, { useContext } from "react";
import { useSelector } from "react-redux";

import { Outlet } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { selectCurrentUser } from "../../store/user/user.selectors";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import {
  LogoContainer,
  NavLink,
  NavLinksContainer,
  NavigationContainer,
} from "./navigation.styles";
import { CartDropdownContext } from "../../contexts/cartDropdown.context";

export default function Navigation() {
  const currentUser = useSelector(selectCurrentUser);
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
