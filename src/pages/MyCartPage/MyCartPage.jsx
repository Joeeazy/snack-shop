import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContextProvider';
import CartItem from '../../components/CartItem/CartItem';
import { useEffect } from 'react';

const MyCartPage = () => {
  const { cartList } = useContext(CartContext);
  const [subTotal,setSubTotal]=useState(0)
  
  useEffect(() => {
    // Calculate the subtotal whenever cartList changes
    const total = cartList.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setSubTotal(total.toFixed(2));
  }, [cartList]);

  
  return (
  <>
    {cartList.length === 0 ? (
      <div className="mt-25 px-17 text-[#616161] md:px-12.5">
        <h1>No item selected.</h1>
      </div>
      ) : (
          
          
          
          <div className="mt-25 px-17 text-[#616161] md:px-12.5">

            <p className="text-center text-4xl font-medium md:text-2xl">Shopping Cart</p>

          <div className="flex justify-between items-center py-5 pt-5 pb-2.5 md:hidden">
          <div className="flex-1 text-left">
            <span className="text-xl">Product</span>
          </div>
      

          <div className="flex justify-between items-center flex-[0.3] text-right lg:flex-[0.7]">
              <span className="text-xl text-center">Price</span>
              <span className="text-xl text-center">Quantity</span>
              <span className="text-xl text-center">Total</span>
          </div>
          </div>  
          
          <div className="w-full md:mt-10">
            {cartList.map((item) => (
              <CartItem key={item.id} snack={item} setSubTotal={setSubTotal} />
            ))}
            </div>
            
            <div className="flex flex-col items-end w-full py-4 border-t border-gray-300 mt-4">
              <p className="text-4xl font-medium mb-4 md:text-2xl">Subtotal: ${subTotal}</p>
              <button className="bg-custom-yellow border border-custom-yellow-light rounded p-5 cursor-pointer transition-all duration-300 hover:bg-custom-yellow-light">CHECK OUT</button>
            </div>

          </div>       



      )}
      </>
  )
}

export default MyCartPage