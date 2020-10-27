import React from 'react';
import {formatCurrency} from '../utils/utils';

function Product({
  imageSrc,
  name,
  price,
  remove,
  position,
  quantity,
  onIncrementQuantity,
  onDecrementQuantity,
  id,
  update,
}) {
  const decrementQuantity = () => {
    onDecrementQuantity(id);
  };

  const incrementQuantity = () => {
    onIncrementQuantity(id);
  };

  const removeMyself = () => {
    remove(position);
  };

  return (
    <>
      <div className="product">
        <div className="product__column-wrapper">
          <button
            className="product__btn-delete"
            onClick={removeMyself}
          ></button>
          <img className="product__image" src={imageSrc} alt="headphones"></img>
        </div>
        <span className="product__name">{name}</span>
        <span className="product__price">${formatCurrency(price)}</span>
        <div className="product__quantity-wrapper">
          <button className="product__btn-quantity" onClick={decrementQuantity}>
            -
          </button>
          <span className="product__quantity-field">{quantity}</span>
          <button className="product__btn-quantity" onClick={incrementQuantity}>
            +
          </button>
          <button
            className="product__btn-quantity-edit"
            onClick={update}
          ></button>
        </div>
      </div>
      <div className="product__bottom-wrapper">
        <button className="product__btn-update btn" onClick={update}>
          Update Shopping Cart
        </button>
      </div>
    </>
  );
}

export default Product;
