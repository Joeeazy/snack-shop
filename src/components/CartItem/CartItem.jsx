import React, { useState, useEffect } from 'react';
import styles from './CartItem.module.scss';

const CartItem = ({ snack }) => {
  const [quantity, setQuantity] = useState(1); // Initialize quantity state for each item
  const [total, setTotal] = useState((snack.price * 1).toFixed(2)); // Initialize total based on initial quantity

  useEffect(() => {
    setTotal((snack.price * quantity).toFixed(2));
  }, [quantity, snack.price]);

  const handleAddItem = () => {
    setQuantity(prev => prev + 1);
  };

  const handleReduceItem = () => {
    setQuantity(prev => Math.max(prev - 1, 1)); // Ensure quantity doesn't go below 1
  };

  return (
    <div className={styles.cartItemsInformation}>
      <div className={styles.productInformation}>
        <img src={snack.imageLink} alt="snack" />
        <span>{snack.snackName}</span>
      </div>

      <div className={styles.priceInformation}>
        <span>$ {snack.price.toFixed(2)}</span>
        <div className={styles.quantityControls}>
          <button className={styles.quantityBtn} onClick={handleReduceItem}>-</button>
          {quantity}
          <button className={styles.quantityBtn} onClick={handleAddItem}>+</button>
        </div>
        <span>$ {total}</span>
      </div>
    </div>
  );
};

export default CartItem;
