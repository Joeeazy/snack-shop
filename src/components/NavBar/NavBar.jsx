import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <NavLink to="/" className={styles.navlink} activeClassName={styles.active}>Home</NavLink>
      <NavLink to="/snacks" className={styles.navlink} activeClassName={styles.active}>Snacks</NavLink>
      <NavLink to="/snacks/add" className={styles.navlink} activeClassName={styles.active}>Add Snacks</NavLink>
    </div>
  );
}

export default NavBar;
