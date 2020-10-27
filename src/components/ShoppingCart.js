import React, {useEffect, useRef, useState} from 'react';
import {animateEnterCheckout} from '../utils/animations';
import CartSummary from './CartSummary';
import Product from './Product';

function ShoppingCart({items}) {
  const [products, setProducts] = useState(items);
  const [shipping, setShipping] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const cartRef = useRef(null);

  useEffect(() => {
    update();
  }, [products.length]);

  const update = () => {
    setSubtotal(calculateSubtotal(calculateShipping));
  };

  const calculateShipping = value => {
    setShipping(value <= 100 && value !== 0 ? 23.8 : 0);
  };

  const handleDecrementQuantity = index => {
    setProducts(prevState => {
      return prevState.map(product => {
        if (product.id === index) {
          console.log(product.quantity);
          return {
            ...product,
            quantity: product.quantity >= 1 ? product.quantity - 1 : 0,
          };
        }
        return product;
      });
    });
  };

  const handleIncrementQuantity = index => {
    setProducts(prevState => {
      return prevState.map(product => {
        if (product.id === index) {
          console.log(product.quantity);
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
    });
  };

  const handleCheckout = () => {
    animateEnterCheckout(cartRef.current);
  };

  const calculateSubtotal = funCallback => {
    let sum = products.reduce(function (prev, cur) {
      return prev + cur.quantity * cur.price;
    }, 0);

    funCallback(sum);
    return sum;
  };

  const handleRemoveItem = index => {
    setProducts(prevState => {
      return prevState.filter((_, i) => i !== index);
    });
  };

  return (
    <div ref={cartRef} className="shopping-cart">
      <div className="shopping-cart__bar">
        <h1 className="shopping-cart__title">Shopping Cart</h1>
        <button
          className="shopping-cart__btn-checkout btn"
          onClick={handleCheckout}
          disabled={!subtotal}
        >
          Proceed to checkout
        </button>
      </div>
      {products.length === 0 ? (
        <div className="shopping-cart__content shopping-cart__content--empty">
          EMPTY
        </div>
      ) : (
        <div className="shopping-cart__content">
          <span className="shopping-cart__header-name">Product Name</span>
          <span className="shopping-cart__header-price">Unit Price</span>
          <span className="shopping-cart__header-qty">Qty</span>
          <div className="shopping-cart__products">
            {products.map((el, i) => {
              return (
                <Product
                  id={el.id}
                  imageSrc={el.image}
                  name={el.name}
                  price={el.price}
                  quantity={el.quantity}
                  onIncrementQuantity={handleIncrementQuantity}
                  onDecrementQuantity={handleDecrementQuantity}
                  remove={handleRemoveItem}
                  update={update}
                  position={i}
                  key={el.id}
                />
              );
            })}
          </div>
        </div>
      )}
      <CartSummary
        shipping={shipping}
        subtotal={subtotal}
        grandTotal={shipping + subtotal}
        handleCheckout={handleCheckout}
      />
    </div>
  );
}

export default ShoppingCart;
