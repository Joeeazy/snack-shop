import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { deleteSnack } from '../../services/snack';
import styles from './SnackPage.module.scss'; 

const SnackPage = ({ snack }) => {
  const navigate = useNavigate();

  const handleDeleteSnack = () => {
    const confirm = window.confirm('Are you sure?');
    if (confirm) {
      deleteSnack(snack.id).then(() => {
        navigate('/snacks');
        window.scrollTo(0, 0); // Scroll to top after navigation
      }).catch(e => console.log(e));
    }
  }

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
        <button className={styles.addToCartBtn}>ADD TO CART</button>
       
        <div className={styles.description}>
          <h4>Description</h4>
          <hr className={styles.separator} />
          <p>{snack.description}</p>
        </div>
      </div>

     {/* Will do later */}
      <div className={styles.onlyAdminCanAccess}
        style={{ display: "none" }}
      >
        <Link to='edit' className={styles.editLink}>
          <button className={styles.editBtn}>Edit Snack</button>
        </Link>
        <button onClick={handleDeleteSnack} className={styles.deleteBtn}>
          Delete Snack
        </button>
        </div>


    </div>
  );
}

export default SnackPage;
