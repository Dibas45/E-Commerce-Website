// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const products = [
    { id: 1, name: 'Product 1', price: '999', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: '499', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: '5999', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', price: '7999', image: 'https://via.placeholder.com/150' },

  
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to DibasShop</h1>
          <p className="text-xl mb-8">
            Discover amazing products at unbeatable prices!
          </p>
          <Link to="/shop" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Shop Now
          </Link>
        </div>
      </div>

      {/* Product Showcase */}
      <div className="py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Products</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {products.map(product => (
            <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-500">{product.price}</p>
                <Link to={`/products/${product.id}`} className="mt-2 block bg-blue-500 hover:bg-blue-600 text-white text-center py-2 rounded">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
