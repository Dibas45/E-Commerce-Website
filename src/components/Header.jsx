import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false); // Close menu on link click (mobile)

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold">
              DibasShop
            </Link>
          </div>

          {/* Main links - centered */}
          <div className="flex-grow hidden md:flex justify-center space-x-4">
            <Link to="/" className="hover:text-gray-400">Home</Link>
            <Link to="/shop" className="hover:text-gray-400">Shop</Link>
            <Link to="/cart" className="hover:text-gray-400">Cart</Link>
          </div>

          {/* Login button - aligned to the right */}
          <div className="hidden md:flex items-center">
            <Link to="/login" className="hover:text-gray-400 px-4 py-2 border border-gray-500 rounded">Login</Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-800`}>
        <Link to="/" className="block px-4 py-2 hover:bg-gray-700" onClick={closeMenu}>Home</Link>
        <Link to="/shop" className="block px-4 py-2 hover:bg-gray-700" onClick={closeMenu}>Shop</Link>
        <Link to="/cart" className="block px-4 py-2 hover:bg-gray-700" onClick={closeMenu}>Cart</Link>
        <Link to="/login" className="block w-full text-left px-4 py-2 hover:bg-gray-700" onClick={closeMenu}>Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
