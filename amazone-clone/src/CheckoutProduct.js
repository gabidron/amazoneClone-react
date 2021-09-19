import React from "react";
import "./CheckoutProduct.css";

const CheckoutProduct = ({ id, image, title, price, rating }) => {
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt={title} />
      <div className="checkoutProduct__info">
        <p className="checkooutProduct__title">{title}</p>
        <p className="checkooutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="checkooutProduct__rating">{"⭐".repeat(rating)}</p>
        <button>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
