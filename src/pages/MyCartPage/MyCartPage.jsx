import React, { useContext } from 'react'
import styles from './MyCartPage.module.scss'
import { CartContext } from '../../context/CartContextProvider';
import SnackCard from '../../components/SnackCard/SnackCard';

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
        {cartList.map((item) => (
          <SnackCard key={item.id} snack={item} />
        ))}
      </div>
      )}
      </>
  )
}

export default MyCartPage