import React, { useState } from 'react'
import styles from './Footer.module.scss'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Footer = () => {
  const navigate = useNavigate()
 
  const handleShopNow = () => {
    navigate('/snacks');
    setTimeout(() => {
      window.scrollTo(0, 0); // Scroll to the top of the page
    }, 0);
  };
  return (
    <div
      className={styles.footerContainer}
    >
      <div className={styles.footerTop}>
        <div>SnackLover</div>
        
        <div><p>Healthy Snacks</p></div>
        
        <div>
          <p>About us</p>
          <p>Call us on 1300 444 666</p>
        </div>

        <div>
          <button className={styles.footerBtn}
          onClick={handleShopNow}
          >Shop Now</button>
        </div>
        
           </div>
     
    
      <div className={styles.footerBottom}>
        <p>  &copy; 2024 Snack Lover. Designed by Jenny Zhong</p>
      </div>
    </div>
  )
}

export default Footer