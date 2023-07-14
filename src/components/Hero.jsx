import { useState, useContext } from "react";

import { CartContext } from "../CartContext";

import hero from "./hero.module.scss";
import productIcon from "../images/icon-cart.svg";
import product_1_small from "../images/image-product-1-thumbnail.jpg";
import product_1 from "../images/image-product-1.jpg";
import product_2_small from "../images/image-product-2-thumbnail.jpg";
import product_2 from "../images/image-product-2.jpg";
import product_3_small from "../images/image-product-3-thumbnail.jpg";
import product_3 from "../images/image-product-3.jpg";
import product_4_small from "../images/image-product-4-thumbnail.jpg";
import product_4 from "../images/image-product-4.jpg";
import Cart from "./Cart";

const Hero = () => {
  const [counter, setCounter] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(product_1);
  const { cartItems, setCartItems } = useContext(CartContext);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
const addToCart = () => {
  if (counter === 0) {
    return; // Skip adding to cart if counter is 0
  }

  const existingItem = cartItems.find((item) => item.image === selectedProduct);

  if (existingItem) {
    const updatedCartItems = cartItems.map((item) => {
      if (item.image === selectedProduct) {
        return {
          ...item,
          quantity: item.quantity + counter,
        };
      }
      return item;
    });

    setCartItems(updatedCartItems);
  } else {
    const newItem = {
      image: selectedProduct,
      name: "Fall Limited Edition Sneakers",
      price: 125.0,
      quantity: counter,
    };
    setCartItems([...cartItems, newItem]);
  }
};


  return (
    <main className={hero.hero}>
      <div className={hero.container}>
        <Cart cartItems={cartItems} />

        <div className={hero.products}>
          <div className={hero.left}>
            <img src={selectedProduct} alt="product_1" />
            <div className={hero.left__imgs}>
              <img
                src={product_1_small}
                alt="product_1_small"
                className={selectedProduct === product_1 ? hero.active : ""}
                onClick={() => setSelectedProduct(product_1)}
              />
              <img
                src={product_2_small}
                alt="product_2_small"
                className={selectedProduct === product_2 ? hero.active : ""}
                onClick={() => setSelectedProduct(product_2)}
              />
              <img
                src={product_3_small}
                alt="product_3_small"
                className={selectedProduct === product_3 ? hero.active : ""}
                onClick={() => setSelectedProduct(product_3)}
              />
              <img
                src={product_4_small}
                alt="product_4_small"
                className={selectedProduct === product_4 ? hero.active : ""}
                onClick={() => setSelectedProduct(product_4)}
              />
            </div>
          </div>
          <div className={hero.right}>
            <h4>Sneaker Company</h4>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>
              These low-profile sneakers are your perfect casual wear companion. Featuring a durable
              rubber outer sole, they’ll withstand everything the weather can offer.
            </p>
            <div className={hero.right__price}>
              <p>$125.00</p>
              <span>50%</span>
            </div>
            <p className={hero.right__old_price}>$250.00</p>
            <div className={hero.form}>
              <div className={hero.counter}>
                <button onClick={decreaseCounter}>-</button>
                <span>{counter}</span>
                <button onClick={increaseCounter}>+</button>
              </div>
              <button onClick={addToCart} className={hero.button}>
                <img src={productIcon} alt="productIcon" />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
