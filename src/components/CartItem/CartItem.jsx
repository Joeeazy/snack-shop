import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContextProvider";
import { useNavigate } from "react-router-dom";

const CartItem = ({ snack }) => {
  const { updateQuantity } = useContext(CartContext);
  const [quantity, setQuantity] = useState(snack.quantity);
  const navigate = useNavigate();

  useEffect(() => {
    setQuantity(snack.quantity);
  }, [snack.quantity]);

  const handleCardClick = () => {
    navigate(`/snacks/${snack.id}`);
  };

  const handleAddItem = () => {
    // Increment the quantity of the current snack item by 1
    // Call the updateQuantity function from the context with the new quantity
    updateQuantity(snack.id, quantity + 1);
  };

  const handleReduceItem = () => {
    if (quantity === 1) {
      const confirmed = window.confirm(
        "Are you sure you want to remove this snack?"
      );
      if (confirmed) {
        updateQuantity(snack.id, 0);
      }
    } else {
      updateQuantity(snack.id, quantity - 1);
    }
  };

  return (
    <div className="flex justify-between items-center border-t border-gray-300 py-10">
      <div className="flex items-center flex-1 text-left cursor-pointer" onClick={handleCardClick}>
        <img src={snack.imageLink} alt="snack" className="w-25 h-25 mr-5 md:w-15 md:h-15" />
        <span className="block text-xl md:hidden">
          {snack.snackName}
        </span>
      </div>

      <div className="flex justify-between items-center flex-[0.3] text-right text-xl lg:flex-[0.7] md:flex-col md:items-start md:text-base md:flex-1 md:flex-row md:flex-1.5">
        <span className="hidden text-xl md:block md:text-xs">
          {snack.snackName}
        </span>
        <span>$ {snack.price.toFixed(2)}</span>
        <div className="w-28 flex justify-between items-center">
          <button className="bg-gray-100 border border-gray-300 py-2 px-4 text-base cursor-pointer md:text-sm md:py-1.5 md:px-3" onClick={handleReduceItem}>
            -
          </button>
          {quantity}
          <button className="bg-gray-100 border border-gray-300 py-2 px-4 text-base cursor-pointer md:text-sm md:py-1.5 md:px-3" onClick={handleAddItem}>
            +
          </button>
        </div>
        <span className="md:hidden">
          $ {(snack.price * quantity).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
