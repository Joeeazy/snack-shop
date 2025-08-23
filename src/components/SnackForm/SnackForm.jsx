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
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-5 border border-gray-300 rounded-lg">
      <div className="mb-4">
        <label htmlFor="nameInput" className="block mb-1">Snack Name</label>
        <input
          type="text"
          id="nameInput"
          name="snackName"
          value={formData.snackName}
          onChange={handleChange}
          className="w-full p-2 box-border"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="imageLinkInput" className="block mb-1">Image Link</label>
        <input
          type="text"
          id="imageLinkInput"
          name="imageLink"
          value={formData.imageLink}
          onChange={handleChange}
          className="w-full p-2 box-border"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="brandInput" className="block mb-1">Brand</label>
        <input
          type="text"
          id="brandInput"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          className="w-full p-2 box-border"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="priceInput" className="block mb-1">Price</label>
        <input
          type="text"
          id="priceInput"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 box-border"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="descriptionInput" className="block mb-1">Description</label>
        <textarea
          type="text"
          id="descriptionInput"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 box-border"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="stockInput" className="block mb-1">Stock</label>
        <input
          type="text"
          id="stockInput"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          className="w-full p-2 box-border"
        />
      </div>

      <div>
        <button type="submit" className="px-5 py-2.5 bg-blue-600 text-white border-none rounded cursor-pointer">{mode} Snack</button>
      </div>
    </form>
  );
};

export default SnackForm;
