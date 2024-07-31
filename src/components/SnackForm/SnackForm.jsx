import React, { useEffect, useState } from 'react';

const SnackForm = ({ handleUpdateSnack, handleAddSnack, formType, mode = 'Add', snack }) => {
  const [formData, setFormData] = useState({
    snackName: '',
    imageLink: '',
    description: '',
    price: '',
    brand:'',
    stock: ''
  });

  useEffect(() => {
    if (snack) {
      setFormData({
        snackName: snack.snackName || '',
        imageLink: snack.imageLink || '',
        description: snack.description || '',
        price: snack.price || '',
        stock: snack.stock || '',
        brand: snack.brand || '',
      });
    }
  }, [snack]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.name === 'price' ? Number(event.target.value) : event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formType === 'add') {
      handleAddSnack(formData);
    } else if (formType === 'edit') {
      handleUpdateSnack(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="nameInput" style={{ display: 'block', marginBottom: '5px' }}>Snack Name</label>
        <input
          type="text"
          id="nameInput"
          name="snackName"
          value={formData.snackName}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="imageLinkInput" style={{ display: 'block', marginBottom: '5px' }}>Image Link</label>
        <input
          type="text"
          id="imageLinkInput"
          name="imageLink"
          value={formData.imageLink}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="brandInput" style={{ display: 'block', marginBottom: '5px' }}>Brand</label>
        <input
          type="text"
          id="brandInput"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="priceInput" style={{ display: 'block', marginBottom: '5px' }}>Price</label>
        <input
          type="number"
          id="priceInput"
          name="price"
          value={formData.price}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="descriptionInput" style={{ display: 'block', marginBottom: '5px' }}>Description</label>
        <textarea
          type="text"
          id="descriptionInput"
          name="description"
          value={formData.description}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="stockInput" style={{ display: 'block', marginBottom: '5px' }}>Stock</label>
        <input
          type="text"
          id="stockInput"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>

      <div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#FFF', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>{mode} Snack</button>
      </div>
    </form>
  );
};

export default SnackForm;
