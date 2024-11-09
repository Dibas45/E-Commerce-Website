import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard'
const Shop = () => {
  const [products, setProducts] = useState([]); 

  useEffect(() => {

    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data)) 
      .catch(error => console.error('Error fetching products:', error));
  }, []); 

  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Shop Our Products</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} /> 
        ))}
      </div>
    </div>
  );
};

export default Shop;
