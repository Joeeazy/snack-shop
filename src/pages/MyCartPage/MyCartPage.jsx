import React, { useContext } from 'react'
import styles from './MyCartPage.module.scss'
import { CartContext } from '../../context/CartContextProvider';
import CartItem from '../../components/CartItem/CartItem';

const MyCartPage = () => {
  const { cartList } = useContext(CartContext);
  

  
  return (
  <>
    {cartList.length === 0 ? (
      <div className={styles.noItemSelectedMessage}>
        <h1>No item selected.</h1>
      </div>
      ) : (
          
          
          
          <div className={styles.myCartContainer}>

            <p className={styles.myCartP}>Shopping Cart</p>

          <div className={styles.cartItemsInformation}>
          <div className={styles.productInformation}>
            <span>Product</span>
          </div>
      

          <div className={styles.priceInformation}>
              <span >Price</span>
              <span>Quantity</span>
              <span>Total</span>
          </div>
          </div>  
          
          <div className={styles.cartItems}>
            {cartList.map((item) => (
              <CartItem key={item.id} snack={item} />
            ))}
          </div>

          </div>       



      )}
      </>
  )
}

export default MyCartPage