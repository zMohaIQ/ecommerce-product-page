/* eslint-disable no-unused-vars */
import { useState } from "react";
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

const Hero = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <main className={hero.container}>
      <div className={hero.left}>
        <img src={product_1} alt="product_1" />
        <div className={hero.left__imgs}>
          <img src={product_1_small} alt="product_1_small" />
          <img src={product_2_small} alt="product_2_small" />
          <img src={product_3_small} alt="product_3_small" />
          <img src={product_4_small} alt="product_4_small" />
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
          <button className={hero.button}>
            <img src={productIcon} alt="productIcon" />
            Add to cart
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
