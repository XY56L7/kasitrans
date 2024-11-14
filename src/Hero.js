// src/components/Hero/Hero.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const backgroundImages = [
    '/about1.jpg',
    '/about2.jpg',
    '/about3.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 1000 ms = 1 másodperc

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section
      className="bg-cover bg-center h-screen relative"
      style={{
        backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
        transition: 'background-image 0.5s ease-in-out',
      }}
    >
      {/* Fekete átmenet */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Tartalom */}
      <div className="flex items-center justify-center h-full relative z-10">
        <motion.div
          className="text-center text-white px-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Üdvözöljük a KasiTransnál!
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            Megbízható és gyors fuvarozási szolgáltatások.
          </p>
          <Link
            to="/kapcsolat"
            className="bg-secondary hover:bg-accent text-white font-semibold py-3 px-6 rounded-full transition"
          >
            Vedd fel velünk a kapcsolatot
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
