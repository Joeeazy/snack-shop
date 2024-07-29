import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSnackById } from '../../services/snack';
import SnackPage from '../../pages/SnackPage/SnackPage';

const SnackLoader = () => {
  const { id } = useParams();
  const [snack, setSnack] = useState(null);
  const [error, setError] = useState(null);
  const [fetchStatus, setFetchStatus] = useState('');

  useEffect(() => {
    setFetchStatus('LOADING');
    getSnackById(id).then((data) => {
      setFetchStatus('SUCCESS');
      setSnack(data);
    }).catch(error => {
      setFetchStatus("FAILED");
      setError(error);
    });
  }, [id]);

  console.log(snack);
  console.log(id)

  return (
    <>
      {fetchStatus === "LOADING" && <p>Loading</p>}
      {fetchStatus === "FAILED" && <p>{error.message}</p>}
      {fetchStatus === "SUCCESS" && <SnackPage snack={snack} />}
    </>
  );
}

export default SnackLoader;
