import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
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
          <button className={styles.footerBtn}>Shop Now</button>
        </div>
        
           </div>
     
    
      <div className={styles.footerBottom}>
        <p>  &copy; 2024 Snack Lover. Designed by Jenny Zhong</p>
      </div>
    </div>
  )
}

export default Footer