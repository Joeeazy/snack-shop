import React, { useState, useContext, useEffect } from 'react';
import styles from './CartItem.module.scss';
import { CartContext } from '../../context/CartContextProvider';

const CartItem = ({ snack }) => {

const { updateQuantity } = useContext(CartContext);
const [quantity, setQuantity] = useState(snack.quantity); // Initialize quantity from snack

useEffect(() => {
  setQuantity(snack.quantity);
}, [snack.quantity]);

  
const handleAddItem = () => {
    // Increment the quantity of the current snack item by 1
  // Call the updateQuantity function from the context with the new quantity
  updateQuantity(snack.id, quantity + 1);
};

const handleReduceItem = () => {
  updateQuantity(snack.id, Math.max(quantity - 1, 1));
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
      <span>$ {(snack.price * quantity).toFixed(2)}</span>
    </div>
  </div>
);
};

export default CartItem;
