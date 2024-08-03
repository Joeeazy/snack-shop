import React, { useEffect, useState } from 'react'
import styles from './CartItem.module.scss'

const CartItem = ({ snack }) => {
  const [total, setTotal] = useState(snack.price*1)
  const [quantity,setQuantity]=useState(1)
  
  useEffect(() => {
    setTotal((snack.price*quantity).toFixed(2))
  },[quantity,snack.price])
  

  return (

    <div className={styles.cartItemsInformation}>
    <div  className={styles.productInformation}>
        <img src={snack.imageLink} alt="snack" />
        <span>{snack.snackName}</span>
    </div>
      

    <div className={styles.priceInformation}>
        <span>$ {snack.price.toFixed(2)}</span>
        <span>1</span>
        <span>$ {total}</span>
    </div>
   
 
      
      </div>
  )
}

export default CartItem