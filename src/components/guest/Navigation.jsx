import React from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';
import { IoSearchOutline, IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';


const NavigationBar = () => {
  return (
    <header className="border-b shadow-sm bg-white">

      {/* Header with contact information and social media links */}
      <div className="relative flex justify-between items-center bg-white py-4 px-10">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-gray-700">
            <MdEmail className="w-4 h-4 text-gray-700" />
            <span className="text-sm">info@sedap.com</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <MdPhone className="w-4 h-4 text-gray-700" />
            <span className="text-sm">92 666 888 0000</span>
          </div>
        </div>
        <div className="text-4xl font-extrabold text-black font-serif tracking-widest uppercase">
          SEDAP
        </div>
        <div className="flex items-center space-x-4 text-gray-700">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="w-6 h-6" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="w-6 h-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="bg-gray-200 h-[1px]" />

      {/* Main Navigation Menu */}
      <nav className="flex justify-center items-center py-3 bg-gray-100 shadow-md">
        <Link to="/" className="px-6 py-2 text-lg font-semibold text-gray-800 hover:text-green-700 transition-colors">
          Home
        </Link>
        <Link to="/about" className="px-6 py-2 text-lg font-semibold text-gray-800 hover:text-green-700 transition-colors">
          About
        </Link>
        <Link to="/shop" className="px-6 py-2 text-lg font-semibold text-gray-800 hover:text-green-700 transition-colors">
          Shop
        </Link>
        <Link to="/news" className="px-6 py-2 text-lg font-semibold text-gray-800 hover:text-green-700 transition-colors">
          News
        </Link>
        <Link to="/contact" className="px-6 py-2 text-lg font-semibold text-gray-800 hover:text-green-700 transition-colors">
          Contact
        </Link>
      </nav>

      {/* Login/Register and Search Cart */}
      <div className="flex justify-between items-center px-10 py-2">
        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-gray-700 hover:text-green-700 transition-colors">
            Login / Register
          </Link>
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-green-700 transition-colors">
              <IoSearchOutline className="w-6 h-6" />
            </button>
            <button className="text-gray-700 hover:text-green-700 transition-colors">
              <IoCartOutline className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="flex items-center">
          {/* Language Selector */}
          <select className="text-gray-700 border p-1 rounded">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
