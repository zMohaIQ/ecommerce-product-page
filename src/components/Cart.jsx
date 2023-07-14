/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { CartContext } from "../CartContext";
import cart from "./cart.module.scss";

const Cart = ({ cartItems }) => {
  const { cartOpen, setCartItems } = useContext(CartContext);

  const removeItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  return (
    <div className={cart.cart}>
      {cartOpen && (
        <div className={cart.cartOpen}>
          <h3>Cart</h3>
          {cartItems.length > 0 ? (
            <div>
              {cartItems.map((item, index) => (
                <div key={index} className={cart.item}>
                  <div className={cart.item__holder}>
                    <img src={item.image} alt={item.name} />
                    <div className={cart.itemDetails}>
                      <h4>{item.name}</h4>
                      <p>${item.price}</p>
                      <p>{item.quantity}</p>
                    </div>
                    <button className={cart.delete} onClick={() => removeItem(index)}>
                      Delete
                    </button>
                  </div>
                  <button className={cart.check}>Check Out</button>
                </div>
              ))}
            </div>
          ) : (
            <div className={cart.empty}>
              <p>Your cart is empty.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
