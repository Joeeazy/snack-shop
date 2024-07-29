import { Link } from "react-router-dom"
import styles from './SnackCard.module.scss'

export const Snack = ({snack}) => {
  return (
    <div  style={{padding:'2rem', display:'flex',flexDirection:'column',justifyContent:'center',alignContent:'center'}}>
      <h3>Name: {snack.snackName}</h3>
      <p>{snack.description}</p>
      <p>{snack.stock}</p>
      <p>{snack.price}</p>
      {/* <h4>Type: {snack.type}</h4>
      <h4>Special Attack: {snack['special-attack']}</h4> */}
      <img src={snack.imageLink} alt="snack" style={{ width: "100px", margin:'0 auto'}} />
      <Link to={snack.id} style={{marginTop:'1rem'}}>See more</Link>
</div>
   
  )
}
