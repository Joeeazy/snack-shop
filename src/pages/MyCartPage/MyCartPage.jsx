import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContextProvider';
import CartItem from '../../components/CartItem/CartItem';

const MyCartPage = () => {
  const { cartList } = useContext(CartContext);
  const [subTotal, setSubTotal] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  useEffect(() => {
    // Calculate the subtotal whenever cartList changes
    const total = cartList.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setSubTotal(total.toFixed(2));
    
    // Handle responsiveness
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [cartList]);

  // Format currency for Kenyan Shillings
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 2
    }).format(amount);
  };

  // Calculate values for Kenyan market
  const shippingCost = 200; // Kshs 200 for shipping within Kenya
  const taxRate = 0.14; // 14% VAT rate in Kenya
  const freeShippingThreshold = 2000; // Free shipping for orders over Kshs 2000
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subTotal);

  return (
    <div className="min-h-screen bg-gray-50 pt-25 pb-10">
      {cartList.length === 0 ? (
        <div className="flex flex-col items-center justify-center px-4 py-16 text-center">
          <div className="text-6xl mb-6">🛒</div>
          <h1 className="text-3xl font-medium text-gray-700 mb-4">Your cart is empty</h1>
          <p className="text-lg text-gray-600 mb-8">Looks like you haven't added any snacks to your cart yet.</p>
          <a 
            href="/e-shop/#/snacks" 
            className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Browse Snacks
          </a>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-10">Shopping Cart</h1>
          
          {/* Desktop Table Headers */}
          {!isMobile && (
            <div className="hidden md:grid grid-cols-12 gap-4 py-4 border-b border-gray-200 font-medium text-gray-700">
              <div className="col-span-5 text-left">
                <span>Product</span>
              </div>
              <div className="col-span-2 text-center">
                <span>Price</span>
              </div>
              <div className="col-span-3 text-center">
                <span>Quantity</span>
              </div>
              <div className="col-span-2 text-right">
                <span>Total</span>
              </div>
            </div>
          )}
          
          {/* Cart Items */}
          <div className="mb-8">
            {cartList.map((item) => (
              <CartItem key={item.id} snack={item} setSubTotal={setSubTotal} isMobile={isMobile} />
            ))}
          </div>
          
          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
            
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-gray-800">{formatCurrency(subTotal)}</span>
            </div>
            
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Shipping</span>
              <span className="text-gray-800">{formatCurrency(shippingCost)}</span>
            </div>
            
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Tax (14% VAT)</span>
              <span className="text-gray-800">{formatCurrency(subTotal * taxRate)}</span>
            </div>
            
            <div className="border-t border-gray-200 pt-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-800">Total</span>
                <span className="text-xl font-bold text-amber-600">
                  {formatCurrency(parseFloat(subTotal) + shippingCost + (subTotal * taxRate))}
                </span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex-1 text-center">
                Proceed to Checkout
              </button>
              <a 
                href="/e-shop/#/snacks" 
                className="border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex-1 text-center"
              >
                Continue Shopping
              </a>
            </div>
            
            {/* Security Note */}
            <div className="flex items-center mt-6 text-sm text-gray-500">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>Secure checkout. All transactions are encrypted and secure.</span>
            </div>
          </div>
          
          {/* Promotional Message */}
          {amountToFreeShipping > 0 ? (
            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
              <p className="text-amber-800">
                🎉 Free shipping on orders over {formatCurrency(freeShippingThreshold)}! 
                You're {formatCurrency(amountToFreeShipping)} away.
              </p>
            </div>
          ) : (
            <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <p className="text-green-800">
                🎉 Congratulations! You've qualified for free shipping!
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyCartPage;