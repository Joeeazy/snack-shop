import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { deleteSnack } from '../../services/snack';
import styles from './SnackPage.module.scss'; 
import { toast } from 'react-toastify';
import { CartContext } from '../../context/CartContextProvider';

const SnackPage = ({ snack }) => {
  const { cartList, addToCart } = useContext(CartContext)
  const navigate = useNavigate();

  // const handleDeleteSnack = () => {
  //   const confirm = window.confirm('Are you sure?');
  //   if (confirm) {
  //     deleteSnack(snack.id).then(() => {
  //       navigate('/snacks');
  //       window.scrollTo(0, 0); // Scroll to top after navigation
  //     }).catch(e => console.log(e));
  //   }
  // }


  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(snack)
    toast.success(`${snack.snackName} has been added to your cart`);
    
  };

  return (
    <div className={styles.container}>

<div className={styles.imageContainer}>
        <img src={snack.imageLink} alt="snack" className={styles.image} />
      </div>
      <div className={styles.details}>
        <p className={styles.title}>{snack.snackName}</p>
        <p className={styles.price}>${snack.price}</p>
        <div className={styles.quantity}>
          <span>{snack.stock}</span>

          {/* can do this feather in the future */}

          {/* <div className={styles.quantityControls}>
            <button className={styles.quantityBtn}>-</button>
            <span>1</span>
            <button className={styles.quantityBtn}>+</button>
          </div> */}

        </div>
        <button className={styles.addToCartBtn}
          onClick={handleAddToCart}>
          ADD TO CART
        </button>
       
        <div className={styles.description}>
          <h4>Description</h4>
          <hr className={styles.separator} />
          <p>{snack.description}</p>
        </div>
      </div>

     {/* Will do later */}
      {/* <div className={styles.onlyAdminCanAccess}
        style={{ display: "none" }}
      >
        <Link to='edit' className={styles.editLink}>
          <button className={styles.editBtn}>Edit Snack</button>
        </Link>
        <button onClick={handleDeleteSnack} className={styles.deleteBtn}>
          Delete Snack
        </button>
        </div> */}


    </div>
  );
}

export default SnackPage;
