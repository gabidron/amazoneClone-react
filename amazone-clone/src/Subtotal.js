import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

const Subtotal = ({ bascket }) => {
  console.log(bascket);
  const subTotalValue = bascket.reduce(
    (partial_sum, a) => partial_sum + a.price,
    0
  );
  console.log(subTotalValue);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({bascket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={subTotalValue}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
