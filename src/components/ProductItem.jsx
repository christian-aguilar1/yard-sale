import React, { useState } from "react";
import "../styles/components/ProductItem.scss";

import iconCart from "@icons/bt_add_to_cart.svg";

const ProductItem = () => {
  const [cart, setCart] = useState("");

  const handleClick = () => {
    setCart("cart");
  };

  return (
    <div className="ProductItem">
      <img
        src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
      <div className="product-info">
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure
          className="ProductItem__button-add-to-cart"
          onClick={handleClick}
        >
          <img src={iconCart} alt="Add to cart" />
        </figure>
        {cart}
      </div>
    </div>
  );
};

export default ProductItem;
