import { useEffect, useState } from "react"
import { getAllSnack } from "../../services/snack"
import { Snack } from "../../components/SnackCard/SnackCard"
import styles from './SnacksPage.module.scss'




const SnacksPage = () => {
const [snacks,setSnacks]=useState([])


  useEffect(() => {
    getAllSnack()
      .then((data) => setSnacks(data))
      .catch(e => console.log(e))
  
  }, [])
  
  console.log(snacks);
  

  return (
    <main className={styles.main}>
    <h1 className={styles.h1}>Snacks</h1>
    <section className={styles.section}>
      {snacks.map((snack) => (
        <Snack key={snack.id} snack={snack} />
      ))}
    </section>
  </main>

    


  )
}

export default SnacksPage