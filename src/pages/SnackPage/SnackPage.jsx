import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { deleteSnack } from '../../services/snack';

const SnackPage = ({ snack }) => {
  const navigate = useNavigate();

  const handleDeleteSnack = () => {
    const confirm = window.confirm('Are you sure?');
    if (confirm) {
      deleteSnack(snack.id).then(() => {
        navigate('/snacks');
      }).catch(e => console.log(e));
    }
  }

  return (
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center' }}>
      <h3>Name: {snack.snackName}</h3>
      <h4>Stock: {snack.stock}</h4>
      <h4>Price: {snack.price}</h4>
      <h4>Description: {snack.description}</h4>
      <img src={snack.imageLink} alt="snack" style={{ width: "100px", margin: '0 auto' }} />

      <Link to='edit'>
        <button style={{ padding: '10px 20px', backgroundColor: 'green', width: '15vw', color: '#FFF', border: 'none', margin: '0 auto', marginTop: '2rem', borderRadius: '4px', cursor: 'pointer' }}>
          Edit Snack
        </button>
      </Link>

      <button onClick={handleDeleteSnack}
        style={{ padding: '10px 20px', backgroundColor: 'red', width: '15vw', color: '#FFF', border: 'none', margin: '0 auto', marginTop: '2rem', borderRadius: '4px', cursor: 'pointer' }}>
        Delete Snack
      </button>
    </div>
  );
}

export default SnackPage;
