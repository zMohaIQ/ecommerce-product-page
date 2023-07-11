/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return <CartContext.Provider value={{ cartOpen, toggleCart }}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
