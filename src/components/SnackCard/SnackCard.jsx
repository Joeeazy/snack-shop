import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContextProvider";
import { toast } from 'react-toastify';

const SnackCard = ({ snack }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/snacks/${snack.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(snack);
    toast.success(`${snack.snackName} has been added to your cart`);
  };

  return (
    <div className="relative bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 m-2 flex flex-col h-full max-w-xs mx-auto">
      {/* Image Container */}
      <div 
        className="relative h-56 w-full overflow-hidden group"
        onClick={handleCardClick}
      >
        <img 
          src={snack.imageLink} 
          alt={snack.snackName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        
        {/* Quick Buy Button */}
        <button 
          className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-300 opacity-0 group-hover:opacity-100"
          onClick={handleAddToCart}
        >
          Quick Buy
        </button>
        
        {/* Price Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm py-1 px-3 rounded-full shadow-sm">
          <span className="font-bold text-amber-700">Kshs {snack.price.toFixed(2)}</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">{snack.brand}</p>
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 leading-tight">
          {snack.snackName}
        </h3>
        
        {/* Rating (if available) - optional enhancement */}
        {/* <div className="flex items-center mt-1 mb-3">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">(24)</span>
        </div> */}
        
        {/* Add to Cart Button (visible on mobile) */}
        <button 
          className="mt-auto bg-amber-100 hover:bg-amber-200 text-amber-800 font-medium py-2 px-4 rounded-lg transition-colors duration-200 lg:hidden"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SnackCard;