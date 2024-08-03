import React from 'react'
import styles from './CartItem.module.scss'

const CartItem = ({snack}) => {
  return (

    <div className={styles.cartItemsInformation}>
    <div  className={styles.productInformation}>
        <img src={snack.imageLink} alt="snack" />
        <span>{snack.snackName}</span>
    </div>
      

    <div className={styles.priceInformation}>
        <span>$ {snack.price}</span>
        <span>quantity</span>
        <span>$ total amount</span>
    </div>
   
 
      
      </div>
  )
}

export default CartItem