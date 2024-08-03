import { Link, useNavigate } from "react-router-dom"
import styles from './SnackCard.module.scss'
import { CartContext } from "../../context/CartContextProvider";
import { useContext } from "react";

const SnackCard = ({ snack }) => {
  const { cartList, setCartList } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCardClick = () => {
   navigate(`/snacks/${snack.id}`)
  }
   
  const isInCart = (snack) => {
   return cartList.some((m)=>m.id===snack.id)
 }

   const handleAddToCart = (e) =>{
     e.stopPropagation()
     console.log('Added to cart:', snack.snackName);
     if (!isInCart(snack)) {
       const newSnackList = [...cartList, snack]
       setCartList(newSnackList)
      }
   }
  
  
  console.log('cardList',cartList)
    
   
  return (
    <div className={styles.card} onClick={handleCardClick}>
      <div className={styles.imgAndBtnContainer}>
        <img src={snack.imageLink} alt="snack" className={styles.image} />
        <button className={styles.button}
        onClick={handleAddToCart}>Quick Buy</button>
      </div>
   
      <div className={styles.details}>
      <p className={styles.brand}>{snack.brand}</p>
      <p className={styles.name}>{snack.snackName}</p>
      {/* <p className={styles.description}>{snack.description}</p> */}
      {/* <p className={styles.stock}>{snack.stock}</p> */}
      <p className={styles.price}>$ {snack.price}</p>
     
    </div>
  </div>
   
  )
}

export default SnackCard