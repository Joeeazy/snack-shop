import { useEffect, useState } from "react"
import { getAllSnack } from "../../services/snack"

import styles from './SnacksPage.module.scss'
import { SnackCard } from '../../components/SnackCard/SnackCard'




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
      <h1 className={styles.h1}>Snack Boxes and Subscriptions</h1>
      <div className={styles.pContainer}>
      <p className={styles.p}>Snack Proud has curated healthy snack boxes full of delicious products that will keep
you satiated between meals. Each box contains small batch of Aussie snacks that are free of common-allergens but big on flavour. Discover new snacks each month.
Buy for yourself  or your team, or give as a gift.</p>
</div>
    <section className={styles.section}>
      {snacks.map((snack) => (
        <SnackCard key={snack.id} snack={snack} />
      ))}
    </section>
  </main>

    


  )
}

export default SnacksPage