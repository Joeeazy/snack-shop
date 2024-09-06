import React, { useState, useContext, useEffect } from "react";
import styles from "./CartItem.module.scss";
import { CartContext } from "../../context/CartContextProvider";
import { useNavigate } from "react-router-dom";

const CartItem = ({ snack }) => {
  const { updateQuantity } = useContext(CartContext);
  const [quantity, setQuantity] = useState(snack.quantity);
  const navigate = useNavigate();

  useEffect(() => {
    setQuantity(snack.quantity);
  }, [snack.quantity]);

  const handleCardClick = () => {
    navigate(`/snacks/${snack.id}`);
  };

  const handleAddItem = () => {
    // Increment the quantity of the current snack item by 1
    // Call the updateQuantity function from the context with the new quantity
    updateQuantity(snack.id, quantity + 1);
  };

  const handleReduceItem = () => {
    updateQuantity(snack.id, Math.max(quantity - 1, 0));
  };

  return (
    <div className={styles.cartItemsInformation}>
      <div className={styles.productInformation} onClick={handleCardClick}>
        <img src={snack.imageLink} alt="snack" />
        <span className={styles.snackNameShowOnBigScreen}>
          {snack.snackName}
        </span>
      </div>

      <div className={styles.priceInformation}>
        <span className={styles.snackNameShowOnSmallScreen}>
          {snack.snackName}
        </span>
        <span>$ {snack.price.toFixed(2)}</span>
        <div className={styles.quantityControls}>
          <button className={styles.quantityBtn} onClick={handleReduceItem}>
            -
          </button>
          {quantity}
          <button className={styles.quantityBtn} onClick={handleAddItem}>
            +
          </button>
        </div>
        <span className={styles.totalPrice}>
          $ {(snack.price * quantity).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
