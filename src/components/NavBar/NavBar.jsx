import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";
import shoppingCartIcon from "../../assets/shopping-cart.png";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <NavLink to="/" className={styles.navlink}>
        Home
      </NavLink>
      <NavLink to="/snacks" className={styles.navlink}>
        Snacks
      </NavLink>

      {/* need to do Healthy and Gift path later too!  */}
      <NavLink to="/snacks/healthySnacks" className={styles.navlink}>
        Healthy Snacks
      </NavLink>
      <NavLink to="/snacks/giftPackSnacks" className={styles.navlink}>
        Gift Packages
      </NavLink>

      {/* <NavLink to="/snacks/add" className={styles.navlink} >Add Snacks</NavLink> */}

      <NavLink to="/snacks/my-cart" className={styles.navlink}>
        <img src={shoppingCartIcon} alt="Cart" />
      </NavLink>
    </div>
  );
};

export default NavBar;
