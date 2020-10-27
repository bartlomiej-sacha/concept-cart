import React from 'react';
import {formatCurrency} from '../utils/utils';

function CartSummary({shipping, subtotal, grandTotal, handleCheckout}) {
  return (
    <div className="cart-summary">
      <div className="cart-summary__shipping-wrapper">
        <span className="cart-summary__shipping">shipping</span>
        <span className="cart-summary__money">${formatCurrency(shipping)}</span>
      </div>
      <div className="cart-summary__payment">
        <span className="cart-summary__details-header">cart totals</span>
        <div className="cart-summary__details">
          <div className="cart-summary__subtotal-wrapper">
            <span className="cart-summary__subtotal">Subtotal</span>
            <span className="cart-summary__money">
              ${formatCurrency(subtotal)}
            </span>
          </div>

          <div className="cart-summary__grandtotal-wrapper">
            <span className="cart-summary__grandtotal">Grand Total</span>
            <span className="cart-summary__money cart-summary__money--big">
              ${formatCurrency(grandTotal)}
            </span>
          </div>
          <button
            className="cart-summary__btn-checkout btn"
            onClick={handleCheckout}
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartSummary;
