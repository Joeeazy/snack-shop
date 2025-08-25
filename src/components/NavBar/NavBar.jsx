import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import shoppingCartIcon from "../../assets/shopping-cart.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="flex justify-between items-center fixed z-50 top-0 left-0 w-full bg-yellow-400 px-4 py-3 shadow-md font-cambria md:px-5 md:py-2.5">
      {/* Logo/Brand - Optional */}
      <div className="hidden md:block text-xl font-bold text-gray-800">
        SnackLover
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-around items-center flex-1 max-w-2xl">
        <NavLink 
          to="/" 
          className="text-gray-700 no-underline p-2 text-lg relative hover:text-black focus:text-black transition-colors duration-300"
          activeClassName="text-black font-bold"
        >
          Home
        </NavLink>
        <NavLink 
          to="/snacks" 
          className="text-gray-700 no-underline p-2 text-lg relative hover:text-black focus:text-black transition-colors duration-300"
          activeClassName="text-black font-bold"
        >
          Snacks
        </NavLink>
        <NavLink 
          to="/snacks/healthySnacks" 
          className="text-gray-700 no-underline p-2 text-lg relative hover:text-black focus:text-black transition-colors duration-300"
          activeClassName="text-black font-bold"
        >
          Healthy Snacks
        </NavLink>
        <NavLink 
          to="/snacks/giftPackSnacks" 
          className="text-gray-700 no-underline p-2 text-lg relative hover:text-black focus:text-black transition-colors duration-300"
          activeClassName="text-black font-bold"
        >
          Gift Packages
        </NavLink>
        <NavLink 
          to="/admin" 
          className="text-gray-700 no-underline p-2 text-lg relative hover:text-black focus:text-black transition-colors duration-300"
          activeClassName="text-black font-bold"
        >
          Admin Panel
        </NavLink>
      </div>

      {/* Shopping Cart - Always visible */}
      <NavLink 
        to="/snacks/my-cart" 
        className="text-gray-700 no-underline p-2 relative hover:text-black focus:text-black transition-colors duration-300 flex items-center"
        activeClassName="text-black"
      >
        <img src={shoppingCartIcon} alt="Cart" className="w-7 h-7 md:w-8 md:h-8" />
        {/* Optional cart counter badge */}
        {/* <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          3
        </span> */}
      </NavLink>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 p-2 rounded focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-gray-800 my-1.5 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Mobile Navigation Menu */}
      <div className={`fixed top-16 left-0 w-full bg-yellow-400 shadow-lg transition-transform duration-300 ease-in-out md:hidden z-50 ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
        <div className="flex flex-col py-4">
          <NavLink 
            to="/" 
            className="text-gray-700 no-underline py-3 px-6 text-lg hover:text-black focus:text-black transition-colors duration-300 border-b border-yellow-500"
            activeClassName="text-black font-bold bg-yellow-500"
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink 
            to="/snacks" 
            className="text-gray-700 no-underline py-3 px-6 text-lg hover:text-black focus:text-black transition-colors duration-300 border-b border-yellow-500"
            activeClassName="text-black font-bold bg-yellow-500"
            onClick={closeMenu}
          >
            Snacks
          </NavLink>
          <NavLink 
            to="/snacks/healthySnacks" 
            className="text-gray-700 no-underline py-3 px-6 text-lg hover:text-black focus:text-black transition-colors duration-300 border-b border-yellow-500"
            activeClassName="text-black font-bold bg-yellow-500"
            onClick={closeMenu}
          >
            Healthy Snacks
          </NavLink>
          <NavLink 
            to="/snacks/giftPackSnacks" 
            className="text-gray-700 no-underline py-3 px-6 text-lg hover:text-black focus:text-black transition-colors duration-300 border-b border-yellow-500"
            activeClassName="text-black font-bold bg-yellow-500"
            onClick={closeMenu}
          >
            Gift Packages
          </NavLink>
          <NavLink 
            to="/admin" 
            className="text-gray-700 no-underline py-3 px-6 text-lg hover:text-black focus:text-black transition-colors duration-300 border-b border-yellow-500"
            activeClassName="text-black font-bold bg-yellow-500"
            onClick={closeMenu}
          >
            Admin Panel
          </NavLink>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMenu}
        ></div>
      )}
    </nav>
  );
};

export default NavBar;