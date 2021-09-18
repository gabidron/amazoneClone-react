import React from "react";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/google-display-ads-example-2-final.png?oV7qevVB2XtFyF_O64TG6L27AFM3M2oL&itok=TBfuuTM_"
          alt="ad"
        />

        <div>
          <h2 className="checkout__title">Your shoping basket</h2>
        </div>
      </div>
      <div className="checkout__right">
        <h2>The subtotal will go here:</h2>
      </div>
    </div>
  );
};

export default Checkout;
