import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const [heroContent, setHeroContent] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeroItems = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://127.0.0.1:8000/api/hero-items");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setHeroContent(data);
      } catch (error) {
        console.error("Error fetching hero items:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHeroItems();
  }, []);

  useEffect(() => {
    if (heroContent.length === 0) return;
    
    const interval = setInterval(() => {
      nextImage();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, heroContent]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + heroContent.length) % heroContent.length);
  };

  if (isLoading) return <div className="h-[550px] md:h-[650px] flex items-center justify-center">Loading...</div>;
  if (error) return <div className="h-[550px] md:h-[650px] flex items-center justify-center">Error: {error}</div>;
  if (heroContent.length === 0) return <div className="h-[550px] md:h-[650px] flex items-center justify-center">No hero items found</div>;

  const { image, title, description } = heroContent[currentIndex];
  
  // Construct the correct image URL
  const imageUrl = image.startsWith('http') ? image : `http://127.0.0.1:8000/storage/${image}`;

  return (
    <div className="relative shadow-2xl w-full h-[450px] md:h-[760px] flex items-center justify-center text-white overflow-hidden mt-20">
      <motion.div
        key={currentIndex} // Use currentIndex as key to force re-render
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 w-full h-full bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-black/50"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></motion.div>

      <button 
        onClick={prevImage} 
        className="absolute left-10 md:left-20 z-20 hover:bg-black/30 p-2 rounded-full"
        aria-label="Previous image"
      >
        <ChevronLeft className="text-white w-6 h-6" />
      </button>

      <button 
        onClick={nextImage} 
        className="absolute right-10 md:right-20 z-20 hover:bg-black/30 p-2 rounded-full"
        aria-label="Next image"
      >
        <ChevronRight className="text-white w-6 h-6" />
      </button>

      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
        key={`content-${currentIndex}`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-white drop-shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="md:mt-4 text-lg md:text-xl text-gray-200 drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          {description}
        </motion.p>
        <motion.div
          className="mt-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="bg-gradient-to-r from-blue-600 to-blue-800 py-3 px-6 rounded-lg text-white font-semibold shadow-lg hover:opacity-90 transition duration-300">
            Book Your Consultation Today!
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;