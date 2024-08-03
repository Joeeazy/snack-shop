import React, { useContext, useState } from 'react'
import styles from './MyCartPage.module.scss'
import { CartContext } from '../../context/CartContextProvider';
import CartItem from '../../components/CartItem/CartItem';
import { useEffect } from 'react';

const MyCartPage = () => {
  const { cartList } = useContext(CartContext);
  const [subTotal,setSubTotal]=useState(0)
  
  useEffect(() => {
    // Calculate the subtotal whenever cartList changes
    const total = cartList.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setSubTotal(total.toFixed(2));
  }, [cartList]);

  
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
              <CartItem key={item.id} snack={item} setSubTotal={setSubTotal} />
            ))}
            </div>
            
            <div className={styles.cartCheckOutContainer}>
              <p className={styles.subTotal}>Subtotal: ${subTotal}</p>
              <button className={styles.checkOutBtn}>CHECK OUT</button>
            </div>

          </div>       



      )}
      </>
  )
}

export default MyCartPage