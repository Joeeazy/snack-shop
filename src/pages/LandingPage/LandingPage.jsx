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
  const itemsPerPage = 4;

  const [cheapSnacks, setCheapSnacks] = useState([]);
  const navigate = useNavigate();

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
      <section className="bg-gradient-to-r from-[#f1e3dd] to-[#f8f1ee] h-screen flex flex-col justify-center items-center py-12 px-8 sm:py-8 sm:px-4 md:flex-row md:justify-between md:items-center">
      <div className="w-full md:w-2/3 flex justify-center ml-20">
        <img
          src="https://shop.snackproud.com.au/cdn/shop/products/SnackBoxes-ProteinSnackBundle.png?v=1658711090"
          alt="Assortment of healthy snacks"
          className="shadow-lg transform hover:scale-105 transition-transform duration-300 outline:none"
        />
      </div>

      <div className="flex flex-col gap-6 w-2/5 items-end md:items-center md:text-center md:mt-6 md:w-full">
        <h1 className="text-5xl font-bold text-gray-800 text-right md:text-3xl md:text-center">Feel-good Snacks Delivered</h1>
        <p className="text-xl text-gray-600 text-right md:text-lg md:text-center">Say goodbye to the 3pm sugar crash.</p>
        <p className="text-xl text-gray-600 text-right md:text-lg md:text-center">Shop curated healthy snacks and gifts.</p>
        <button 
          className="bg-gradient-to-r from-amber-400 to-amber-500 text-white font-semibold py-4 px-10 rounded-full shadow-md hover:from-amber-500 hover:to-amber-600 transition-all duration-300 transform hover:-translate-y-1 md:self-center"
          onClick={handleShopNow}
        >
          SHOP NOW
        </button>
      </div>
    </section>
      {/* Best Selling Snacks Carousel */}
      <section className="w-full mx-auto px-5 py-12 relative overflow-hidden md:py-8">
  {/* Section Header */}
  <div className="flex flex-col items-center mb-10 md:mb-6">
    <h2 className="text-4xl font-bold text-gray-800 mb-4 md:text-2xl">
      Shop Our Best Selling Snack Boxes
    </h2>
    <div className="w-24 h-1 bg-amber-400 rounded-full"></div>
  </div>
  
  {/* Carousel Wrapper */}
  <div className="relative">
    {/* Navigation Arrows */}
    <div className="flex justify-between items-center absolute top-1/2 transform -translate-y-1/2 w-full z-10 px-2">
      <button 
        onClick={prevSlide} 
        className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
        aria-label="Previous items"
      >
        <img src={leftArrow} alt="Previous" className="w-6 h-6" />
      </button>
      <button 
        onClick={nextSlide} 
        className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
        aria-label="Next items"
      >
        <img src={rightArrow} alt="Next" className="w-6 h-6" />
      </button>
    </div>
    
    {/* Slides */}
    <div className="overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
        }}
      >
        {allSnacks.map((snack) => (
          <div 
            key={snack.id} 
            className="px-3 w-1/4 md:w-1/2 sm:w-full flex-shrink-0"
          >
            <SnackCard snack={snack} />
          </div>
        ))}
      </div>
    </div>
  </div>
  
  {/* Carousel Indicators */}
  <div className="flex justify-center mt-8 space-x-2">
    {Array.from({ length: Math.ceil(allSnacks.length / itemsPerPage) }).map((_, index) => (
      <button
        key={index}
        className={`w-3 h-3 rounded-full ${
          currentIndex === index ? "bg-amber-500" : "bg-gray-300"
        }`}
        onClick={() => setCurrentIndex(index)}
        aria-label={`Go to slide ${index + 1}`}
      />
    ))}
  </div>
</section>
      {/* Value Snacks Section */}
      <section className="bg-gray-50 py-12 md:py-8">
        <div className="px-5">
          <div className="flex flex-col items-center mb-10 md:mb-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 md:text-2xl">Value Deals</h2>
            <p className="text-lg text-gray-600">Quality snacks at amazing prices</p>
            <div className="w-24 h-1 bg-amber-400 rounded-full mt-2"></div>
          </div>
          
          <div className="grid grid-cols-4 gap-6 md:grid-cols-4 sm:grid-cols-1">
            {cheapSnacks.map((cheapSnack) => (
              <SnackCard key={cheapSnack.id} snack={cheapSnack} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-amber-100 md:py-10">
        <div className="max-w-3xl mx-auto text-center px-5">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8">Subscribe to our newsletter for exclusive deals and new snack arrivals</p>
          <div className="flex max-w-md mx-auto md:flex-col md:space-y-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-l-lg border border-r-0 border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 md:rounded-lg md:border-r"
            />
            <button className="bg-amber-500 text-white font-semibold px-6 py-3 rounded-r-lg hover:bg-amber-600 transition-colors duration-300 md:rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;