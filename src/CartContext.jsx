/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => {
    setCartOpen((prevCart) => !prevCart);
  };

  return (
    <CartContext.Provider value={{ cartOpen, toggleCart, cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
