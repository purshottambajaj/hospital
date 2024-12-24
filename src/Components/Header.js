import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header
      style={{ backgroundColor: '#FFF7E2' }}
      className="flex items-center justify-between px-10 py-4 shadow-md"
    >
      {/* Logo Section */}
      <h1 className="text-green-700 text-3xl font-bold">Amrutum</h1>

      {/* Navigation Section */}
      <nav>
        <ul className="flex space-x-8 text-lg">
          <li className="hover:text-green-700 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-green-700 cursor-pointer">
            <Link to="/404">About Us</Link>
          </li>
          <li className="hover:text-green-700 cursor-pointer">
            <Link to="/404">Extra</Link>
          </li>
        </ul>
      </nav>

      {/* Buttons Section */}
      <div className="space-x-4">
        <button
          className="px-4 py-2 border-2 border-black text-black rounded hover:bg-black hover:text-white transition"
        >
          Login
        </button>
        <button
          className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition"
        >
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
