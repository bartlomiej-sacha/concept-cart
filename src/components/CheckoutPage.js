import React, {useEffect, useRef} from 'react';
import {ReactComponent as Scene} from '../static/images/confetti.svg';
import {animateCheckout} from '../utils/animations';

function CheckoutPage() {
  const refScene = useRef(null);

  useEffect(() => {
    animateCheckout(refScene.current);
  });

  return (
    <div className="checkout">
      <div ref={refScene} className="checkout__image">
        <Scene />
      </div>
      <h1 className="checkout__message checkout__message--successful">
        Your order has been submitted successfully
      </h1>
    </div>
  );
}

export default CheckoutPage;
