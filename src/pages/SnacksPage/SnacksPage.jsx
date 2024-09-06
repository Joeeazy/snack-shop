import { useEffect, useState } from "react";
import styles from "./SnacksPage.module.scss";
import SnackCard from "../../components/SnackCard/SnackCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const SnacksPage = ({ fetchSnacks, pageTitle, pageDescription }) => {
  const [snacks, setSnacks] = useState([]);
  const [fetchStatus, setFetchStatus] = useState("LOADING");
  const [error, setError] = useState(null);

  useEffect(() => {
    setFetchStatus("LOADING");
    fetchSnacks()
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
          <FontAwesomeIcon icon={faSpinner} spin size="4x" />
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
          <p className={styles.snacksPageBigP}>{pageTitle}</p>
          <div className={styles.pContainer}>
            <p className={styles.p}>{pageDescription}</p>
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
