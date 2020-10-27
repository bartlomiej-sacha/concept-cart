import React from 'react';
import CheckoutPage from './components/CheckoutPage';
import ShoppingCart from './components/ShoppingCart';
import Image from './static/images/headphones.png';

function App() {
  const data = [
    {id: 1, image: Image, name: 'Headphones', price: 11.9, quantity: 1},
    {id: 2, image: Image, name: 'Good headphones', price: 22, quantity: 0},
    {id: 3, image: Image, name: 'Cool headphones', price: 33, quantity: 0},
  ];

  return (
    <div className="App">
      <CheckoutPage />
      <ShoppingCart items={data} />
    </div>
  );
}

export default App;
