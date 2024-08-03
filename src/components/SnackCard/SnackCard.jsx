import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContextProvider";
import styles from './SnackCard.module.scss';
import { toast } from 'react-toastify';

// use react-toastify to set an alert! Place  { ToastContainer } in app.js so the alert only shows to the top right of screen on the snacksPage. If place  { ToastContainer }  in snack card component, it will show both inside card and top right of screen.

const SnackCard = ({ snack }) => {
  const { cartList, setCartList } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/snacks/${snack.id}`);
  };
   
  const isInCart = (snack) => {
    return cartList.some((m) => m.id === snack.id);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    console.log('Added to cart:', snack.snackName);
    if (!isInCart(snack)) {
      const newSnackList = [...cartList, snack];
      setCartList(newSnackList);
      toast.success(`${snack.snackName} has been added to your cart`);
    }
  };

  console.log('cartList', cartList);
    
  return (
    <div className={styles.card} onClick={handleCardClick}>
      <div className={styles.imgAndBtnContainer}>
        <img src={snack.imageLink} alt="snack" className={styles.image} />
        <button className={styles.button} onClick={handleAddToCart}>
          Quick Buy
        </button>
      </div>
   
      <div className={styles.details}>
        <p className={styles.brand}>{snack.brand}</p>
        <p className={styles.name}>{snack.snackName}</p>
        <p className={styles.price}>${snack.price}</p>
      </div>
    </div>
  );
};

export default SnackCard;
