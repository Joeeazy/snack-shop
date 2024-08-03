import { createContext, useState } from "react";

export const ItemQuantityContext = createContext([]);

const ItemQuantityContextProvider = ({ children }) => {
  const [quantity,setQuantity]=useState(1)

  return (
    <ItemQuantityContext.Provider value={{ quantity,setQuantity }}>
      {children}
    </ItemQuantityContext.Provider>
  );
};

export default ItemQuantityContextProvider;
