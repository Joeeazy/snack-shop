import React, { useEffect, useState } from 'react';
import SnackForm from '../../components/SnackForm/SnackForm';
import { getSnackById, updateSnackByID } from '../../services/snack';
import { useNavigate, useParams } from 'react-router-dom';
import styles from '../AddSnackPage/AddSnackPage.module.scss'

const EditSnackPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [snack, setSnack] = useState(null);

  useEffect(() => {
    if (id) {
      getSnackById(id)
        .then((data) => {
          setSnack(data);
        })
        .catch(e => console.log(e));
    }
  }, [id]);

  const handleUpdateSnack = (snack) => {
    updateSnackByID(id, snack).then(() => {
      navigate(`/snacks/${id}`);
    }).catch(e => console.log(e));
  }

  console.log(snack);

  return (
    <div className={styles.addSnackPage}>
      <h1>Edit Snack</h1>
      {snack && <SnackForm mode="Update" snack={snack} handleUpdateSnack={handleUpdateSnack} formType='edit' />}
    </div>
  );
}

export default EditSnackPage;
