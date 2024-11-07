import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500">{product.price}</p>
        <Link
          to={`/products/${product.id}`}
          className="mt-2 block bg-blue-500 hover:bg-blue-600 text-white text-center py-2 rounded"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
