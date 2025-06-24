import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import slideImg1 from "../assets/authentic-italian-pasta.jpg";
import slideImg2 from "../assets/fresh-vegetable-salad-plate.jpg";
import slideImg3 from "../assets/sushi-set-philadelphia-alaska-rolls-wooden-plate-with-chopsticks.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    title: "Delicious Pasta",
    description: "Creamy Alfredo pasta with herbs and cheese.",
    image: slideImg1
  },
  {
    id: 2,
    title: "Fresh Salad",
    description: "A healthy bowl of greens and veggies.",
    image: slideImg2
  },
  {
    id: 3,
    title: "Sushi Platter",
    description: "Fresh sushi with soy and wasabi.",
    image: slideImg3
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(false); // Reset when slide changes
  }, [current]);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full mx-auto overflow-hidden rounded-2xl shadow-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          className="relative w-full h-[30rem] bg-black flex items-center justify-start"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Image */}
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="absolute inset-0 w-full h-full object-cover"
            onLoad={() => setImageLoaded(true)}
          />

          {/* Overlay after image loads */}
          {imageLoaded && (
            <motion.div
              className="relative z-10 bg-black/60 p-6 rounded-xl max-w-md text-white space-y-4 ml-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold">{slides[current].title}</h2>
              <p className="text-lg">{slides[current].description}</p>
              {/* <button className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition-all">
                <Link to='/cart'>Order Now</Link>
              </button> */}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow z-20"
      >
        <IoIosArrowBack />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow z-20"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Carousel;
