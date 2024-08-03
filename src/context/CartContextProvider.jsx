import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (snack) => {
    setCartList(prevCartList => {
      // Check if the item already exists in the cart
      const existingItem = prevCartList.find(item => item.id === snack.id);
      if (existingItem) {
        // If it exists, increment the quantity
        return prevCartList.map(item =>
          item.id === snack.id
          // If the current item's id matches the snack's id, increment the quantity
          ? { ...item, quantity: item.quantity + 1 }
          // If the current item's id does not match, return the item unchanged
          : item
        );
      } else {
        // If it doesn't exist, add the item with quantity 1
        return [...prevCartList, { ...snack, quantity: 1 }];
      }
    });
  };


    // Function to update the quantity of an item in the cart
  const updateQuantity = (id, quantity) => {
    setCartList(prevCartList =>
      prevCartList.map(item =>
        // Check if the current item's id matches the provided id
        item.id === id
          // If the id matches, return a new item object with the updated quantity
          ? { ...item, quantity: quantity }
          // If the id does not match, return the item unchanged
          : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartList, addToCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
