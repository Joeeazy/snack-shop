import { useEffect, useState } from "react";
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
    <main className="pt-25 px-5 text-center">
      {fetchStatus === "LOADING" && (
        <div className="text-custom-yellow h-screen flex items-start justify-center pt-[33vh]">
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
          <p className="text-4xl font-medium">{pageTitle}</p>
          <div className="py-7.5 w-[60vw] mx-auto text-xl">
            <p>{pageDescription}</p>
          </div>

          <section className="flex flex-wrap justify-evenly xl:px-12.5">
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
