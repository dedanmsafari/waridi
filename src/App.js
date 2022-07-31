import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getCurrentSession, setCurrentUser } from "./store/user/user.actions";
import { useDispatch } from "react-redux";

import Navigation from "./routes/navigation/navigation.component";

import Home from "./routes/Home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentSession());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
