// Cart.js
import React, { useState } from 'react';

const Cart = () => {
  // Simulated cart data; replace this with Database
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price:29.99, quantity: 1, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price:39.99, quantity: 1, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price:49.99, quantity: 2, image: 'https://via.placeholder.com/150' },
  ]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id, quantity) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: parseInt(quantity) } : item
    ));
  };

  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center justify-between border-b p-4">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-500">{item.price.toFixed(2)}</p>
                    <label className="mt-2">
                      Quantity:
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                        className="ml-2 border rounded w-16 text-center"
                      />
                    </label>
                  </div>
                </div>
                <button onClick={() => handleRemove(item.id)} className="text-red-500 hover:text-red-700">
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="mt-4 text-right">
            <h3 className="text-lg font-semibold">Total: {getTotalAmount()}</h3>
          </div>
          <div className="mt-6 text-right">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
