import { useEffect, useState } from "react";
import { getAllSnack } from "../../services/snack";

import styles from "./SnacksPage.module.scss";
import SnackCard from "../../components/SnackCard/SnackCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const SnacksPage = () => {
  const [snacks, setSnacks] = useState([]);
  const [fetchStatus, setFetchStatus] = useState("LOADING");
  const [error, setError] = useState(null);

  useEffect(() => {
    setFetchStatus("LOADING");
    getAllSnack()
      .then((data) => {
        setSnacks(data);
        setFetchStatus("SUCCESS");
      })
      .catch((error) => {
        setError(error);
        setFetchStatus("FAILURE");
      });
  }, []);

  console.log(snacks);

  return (
    <main className={styles.main}>
      {fetchStatus === "LOADING" && (
        <div className={styles.spinnerContainer}>
          <FontAwesomeIcon icon={faSpinner} spin size="2x" />
        </div>
      )}
      {fetchStatus === "FAILURE" && (
        <>
          <p>Failed to load snacks.</p>
          <p>{error?.message}</p>
        </>
      )}

      {fetchStatus === "SUCCESS" && (
        <>
          <p className={styles.snacksPageBigP}>Snack Boxes and Subscriptions</p>
          <div className={styles.pContainer}>
            <p className={styles.p}>
              Snack Proud has curated healthy snack boxes full of delicious
              products that will keep you satiated between meals. Each box
              contains small batch of Aussie snacks that are free of common
              allergens but big on flavour. Discover new snacks each month. Buy
              for yourself or your team, or give as a gift.
            </p>
          </div>

          <section className={styles.section}>
            {snacks.map((snack) => (
              <SnackCard key={snack.id} snack={snack} />
            ))}
          </section>
        </>
      )}
    </main>
  );
};

export default SnacksPage;
