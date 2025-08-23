import React, { useEffect, useState } from "react";
import { getAllSnack, getCheapSnack } from "../../services/snack";
import SnackCard from "../../components/SnackCard/SnackCard";
import { useNavigate } from "react-router-dom";
import rightArrow from "../../assets/right.png";
import leftArrow from "../../assets/back.png";

const LandingPage = () => {
  const [allSnacks, setAllSnacks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(4); // Will be updated based on screen size

  const [cheapSnacks, setCheapSnacks] = useState([]);
  const navigate = useNavigate();

  // Handle responsive items per page
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 768) {
        setItemsPerPage(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(4);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  useEffect(() => {
    getCheapSnack()
      .then((data) => setCheapSnacks(data))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    getAllSnack()
      .then((data) => setAllSnacks(data))
      .catch((e) => console.log(e));
  }, []);

  const prevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.ceil(allSnacks.length / itemsPerPage) - 1
        : prevIndex - 1
    );
    
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.ceil(allSnacks.length / itemsPerPage) - 1
        ? 0
        : prevIndex + 1
    );
    
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleShopNow = () => {
    navigate("/snacks");
  };

  return (
    <main className="mt-[54px]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#f1e3dd] to-[#f8f1ee] min-h-screen flex flex-col justify-center items-center py-12 px-4 md:py-16 lg:flex-row lg:justify-between lg:items-center lg:px-8 xl:px-16">
        <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl lg:w-1/2 flex justify-center lg:justify-start lg:order-2 mb-8 lg:mb-0">
          <img
            src="https://shop.snackproud.com.au/cdn/shop/products/SnackBoxes-ProteinSnackBundle.png?v=1658711090"
            alt="Assortment of healthy snacks"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md shadow-lg transform hover:scale-105 transition-transform duration-300 outline-none"
          />
        </div>

        <div className="flex flex-col gap-4 md:gap-6 w-full lg:w-1/2 items-center lg:items-start lg:text-left lg:pr-8 xl:pr-12 lg:order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-center lg:text-left">
            Feel-good Snacks Delivered
          </h1>
          <p className="text-lg sm:text-xl md:text-xl text-gray-600 text-center lg:text-left">
            Say goodbye to the 3pm sugar crash.
          </p>
          <p className="text-lg sm:text-xl md:text-xl text-gray-600 text-center lg:text-left">
            Shop curated healthy snacks and gifts.
          </p>
          <button 
            className="bg-gradient-to-r from-amber-400 to-amber-500 text-white font-semibold py-3 px-8 sm:py-4 sm:px-10 rounded-full shadow-md hover:from-amber-500 hover:to-amber-600 transition-all duration-300 transform hover:-translate-y-1 mt-4"
            onClick={handleShopNow}
          >
            SHOP NOW
          </button>
        </div>
      </section>

      {/* Best Selling Snacks Carousel */}
      <section className="w-full mx-auto px-4 py-12 md:py-16 lg:px-8 relative overflow-hidden">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
            Shop Our Best Selling Snack Boxes
          </h2>
          <div className="w-24 h-1 bg-amber-400 rounded-full"></div>
        </div>
        
        {/* Carousel Wrapper */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows - Only show if there are multiple items */}
          {allSnacks.length > itemsPerPage && (
            <div className="flex justify-between items-center absolute top-1/2 transform -translate-y-1/2 w-full z-10 px-2 sm:px-4">
              <button 
                onClick={prevSlide} 
                className="bg-white p-2 sm:p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
                aria-label="Previous items"
              >
                <img src={leftArrow} alt="Previous" className="w-4 h-4 sm:w-6 sm:h-6" />
              </button>
              <button 
                onClick={nextSlide} 
                className="bg-white p-2 sm:p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
                aria-label="Next items"
              >
                <img src={rightArrow} alt="Next" className="w-4 h-4 sm:w-6 sm:h-6" />
              </button>
            </div>
          )}
          
          {/* Slides */}
          <div className="overflow-hidden px-2">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
                width: `${(allSnacks.length / itemsPerPage) * 100}%`
              }}
            >
              {allSnacks.map((snack) => (
                <div 
                  key={snack.id} 
                  className="px-2 sm:px-3 flex-shrink-0"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  <SnackCard snack={snack} />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Carousel Indicators */}
        {allSnacks.length > itemsPerPage && (
          <div className="flex justify-center mt-6 md:mt-8 space-x-2">
            {Array.from({ length: Math.ceil(allSnacks.length / itemsPerPage) }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                  currentIndex === index ? "bg-amber-500" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </section>

      {/* Value Snacks Section */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="px-4 max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-8 md:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 text-center">
              Value Deals
            </h2>
            <p className="text-base md:text-lg text-gray-600 text-center mb-2">
              Quality snacks at amazing prices
            </p>
            <div className="w-24 h-1 bg-amber-400 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {cheapSnacks.map((cheapSnack) => (
              <div key={cheapSnack.id} className="flex justify-center">
                <SnackCard snack={cheapSnack} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-amber-50 to-amber-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 md:mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 mb-6 md:mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for exclusive deals and new snack arrivals
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <button className="bg-amber-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors duration-300 sm:whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;