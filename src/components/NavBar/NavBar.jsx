import React from "react";
import { NavLink } from "react-router-dom";
import shoppingCartIcon from "../../assets/shopping-cart.png";

const NavBar = () => {
  return (
    <div className="flex justify-around items-center fixed z-100 top-0 left-0 w-full bg-yellow-300 px-5 py-2.5 shadow-custom font-cambria">
      <NavLink to="/" className="text-custom-gray no-underline p-2.5 text-xl relative navlink hover:text-black focus:text-black transition-colors duration-300">
        Home
      </NavLink>
      <NavLink to="/snacks" className="text-custom-gray no-underline p-2.5 text-xl relative navlink hover:text-black focus:text-black transition-colors duration-300">
        Snacks
      </NavLink>

      {/* need to do Healthy and Gift path later too!  */}
      <NavLink to="/snacks/healthySnacks" className="text-custom-gray no-underline p-2.5 text-xl relative navlink hover:text-black focus:text-black transition-colors duration-300">
        Healthy Snacks
      </NavLink>
      <NavLink to="/snacks/giftPackSnacks" className="text-custom-gray no-underline p-2.5 text-xl relative navlink hover:text-black focus:text-black transition-colors duration-300">
        Gift Packages
      </NavLink>

      {/* <NavLink to="/snacks/add" className={styles.navlink} >Add Snacks</NavLink> */}

      <NavLink to="/snacks/my-cart" className="text-custom-gray no-underline p-2.5 text-xl relative navlink hover:text-black focus:text-black transition-colors duration-300">
        <img src={shoppingCartIcon} alt="Cart" className="w-8" />
      </NavLink>
    </div>
  );
};

export default NavBar;
