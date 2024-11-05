// Shop.jsx
import React  from 'react';
import ProductCart from './ProductCard';

const Shop = () => {

      const data = [
        { id: 1, name: 'Product 1', price: '999', image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Product 2', price: '6999', image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Product 3', price: '4999', image: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Product 4', price: '9999', image: 'https://via.placeholder.com/150' },
        { id: 5, name: 'Product 5', price: '250', image: 'https://via.placeholder.com/150' },
        { id: 6, name: 'Product 6', price: '489', image: 'https://via.placeholder.com/150' },
        { id: 7, name: 'Product 7', price: '999', image: 'https://via.placeholder.com/150' },
        { id: 8, name: 'Product 8', price: '6999', image: 'https://via.placeholder.com/150' },
        { id: 9, name: 'Product 9', price: '4999', image: 'https://via.placeholder.com/150' },
        { id: 10, name: 'Product 10', price: '9999', image: 'https://via.placeholder.com/150' },
        { id: 11, name: 'Product 11', price: '250', image: 'https://via.placeholder.com/150' },
        { id: 12, name: 'Product 12', price: '489', image: 'https://via.placeholder.com/150' },
        { id: 13, name: 'Product 13', price: '999', image: 'https://via.placeholder.com/150' },
        { id: 14, name: 'Product 14', price: '6999', image: 'https://via.placeholder.com/150' },
        { id: 15, name: 'Product 15', price: '4999', image: 'https://via.placeholder.com/150' },
        { id: 16, name: 'Product 16', price: '9999', image: 'https://via.placeholder.com/150' },
        { id: 17, name: 'Product 17', price: '250', image: 'https://via.placeholder.com/150' },
        { id: 18, name: 'Product 18', price: '489', image: 'https://via.placeholder.com/150' }
      ];
      


  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Shop Our Products</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {data.map(data => (
          <ProductCart key={data.id} product={data} />
        ))}
      </div>
    </div>
  );

};
export default Shop;
