import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { deleteSnack } from '../../services/snack';
import { toast } from 'react-toastify';
import { CartContext } from '../../context/CartContextProvider';

const SnackPage = ({ snack }) => {
  const { cartList, addToCart } = useContext(CartContext)
  const navigate = useNavigate();

  // const handleDeleteSnack = () => {
  //   const confirm = window.confirm('Are you sure?');
  //   if (confirm) {
  //     deleteSnack(snack.id).then(() => {
  //       navigate('/snacks');
  //       window.scrollTo(0, 0); // Scroll to top after navigation
  //     }).catch(e => console.log(e));
  //   }
  // }


  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(snack)
    toast.success(`${snack.snackName} has been added to your cart`);
    
  };

  return (
    <div className="flex flex-col w-screen px-7 mt-30 lg:flex-row">

<div className="flex-1 h-[70vh] flex justify-center items-center mr-5 lg:max-w-[45%]">
        <img src={snack.imageLink} alt="snack" className="max-h-full max-w-full" />
      </div>
      <div className="flex-1 flex flex-col justify-center items-start px-7 pr-7 lg:py-7 lg:pt-7 lg:mt-5">
        <p className="text-4xl font-medium">{snack.snackName}</p>
        <p className="text-2xl font-medium my-4 mb-6">${snack.price}</p>
        <div className="flex justify-between items-center mb-6 w-full">
          <span className="text-xl">Stock: {snack.stock}</span>

          {/* can do this feather in the future */}

          {/* <div className="w-32 flex justify-between items-center">
            <button className="bg-gray-100 border border-gray-300 py-2 px-4 text-base cursor-pointer">-</button>
            <span>1</span>
            <button className="bg-gray-100 border border-gray-300 py-2 px-4 text-base cursor-pointer">+</button>
          </div> */}

        </div>
        <button className="block w-full bg-custom-yellow border border-custom-yellow-light rounded p-4 cursor-pointer text-center text-xl mb-6 transition-colors duration-300 hover:bg-custom-yellow-light"
          onClick={handleAddToCart}>
          ADD TO CART
        </button>
       
        <div className="w-full mt-6">
          <h4>Description</h4>
          <hr className="w-full border-0 border-t border-gray-300 my-4" />
          <p className="leading-relaxed">{snack.description}</p>
        </div>
      </div>

     {/* Will do later */}
      {/* <div className="hidden"
        style={{ display: "none" }}
      >
        <Link to='edit' className="text-blue-600 hover:text-blue-800">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Edit Snack</button>
        </Link>
        <button onClick={handleDeleteSnack} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Delete Snack
        </button>
        </div> */}


    </div>
  );
}

export default SnackPage;
