import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook,FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About Us */}
          <div>
            <h2 className="text-lg font-semibold mb-4">About Us</h2>
            <p className="text-gray-400">
              DibasShop is a premier online store providing high-quality products at the best prices.
            </p>
          </div>
          
          {/* Customer Service */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Customer Service</h2>
            <ul className="space-y-2">
              <li><Link to="/faq" className="hover:text-gray-400">FAQ</Link></li>
              <li><Link to="/returns" className="hover:text-gray-400">Returns</Link></li>
              <li><Link to="/shipping" className="hover:text-gray-400">Shipping</Link></li>
              <li><Link to="/terms" className="hover:text-gray-400">Terms & Conditions</Link></li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-400">Email: DibasPoudel45@Gmail.com</p>
            <p className="text-gray-400">Phone:9812887404</p>
            <p className="text-gray-400">Address:Ghorahi-15-Dang</p>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/Dibas45/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaFacebook size={24} />
              </a>

              <a href="https://www.instagram.com/dibaspoudel45/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
          &copy; {new Date().getFullYear()} DibasPoudel. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
